import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: '初期値のテスト投稿' }
  ]);
  const [loading,setLoading] =useState(true);

/** axiosを使用
 * laravelのormを通してdbにアクセスするのでcsrfモジュールを使用
 * 初期はテスト値を使う
*/
useEffect(()=>{
    const fetchData = async()=>{
        try{
            const res = await axios.get('/api/posts');
            setPosts(res.data);
            setLoading(false);
        } catch(error){
            console.error('Error at fetching data ',error)
        }
    }
    fetchData();
})


  return (
    <div>
      <h1>ブログ</h1>
      {
        loading ?(
            <p>読み込み中...</p>
        ) : (
            <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default Home;