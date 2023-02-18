import React, { useState } from 'react'
import { useEffect } from 'react';
import '../styles/post.css'
function Posts() {
const key=process.env.React_App_API_KEY;
const [articles,setArticles]=useState([]);
const [page,setPage]=useState(1);
const loadPosts=async()=>{
    try{
        const resp=await fetch(`https://newsapi.org/v2/everything?q=tesla&page=${page}&apiKey=${key}`);
        const data=await resp.json();
        setArticles([...articles,...data['articles']]);
        setPage(page+1);
    }catch(err){
        console.log(err);
    }
}
useEffect(() => {
    loadPosts();
  }, [loadPosts]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadPosts();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles,handleScroll]);
  return (
        <div className='post'>
        <h2>Posts</h2>
            {articles.length!==0?articles.map((article)=>{
                return (
                <div className='card'>
                <img src={article.urlToImage} alt="Article Image"></img>
                <h3>Author: {article.author}</h3>
                <h4>Title:</h4>
                <p>{article.title}</p>
                <h4>Description:</h4>
                <p>{article.description}</p>
                </div>
                )
            }):<p>Loading...</p>}
        </div>
  )
}

export default Posts