<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
//test_blog/posts
Route::prefix('test_blog')->group(function () {
    Route::get('posts', 'App\Http\Controllers\PostController@index');
    Route::post('posts', 'App\Http\Controllers\PostController@store');
    Route::get('posts/{id}', 'App\Http\Controllers\PostController@show');
    Route::put('posts/{id}', 'App\Http\Controllers\PostController@update');
    Route::delete('posts/{id}', 'App\Http\Controllers\PostController@destroy');
});