import React from "react";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  ///////////////////////////////////////////////////////////////////
  // 특정 시점에만 실행되는 함수(처음 컴포넌트가 바인딩 될 때 1번만 실행)
  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      try {
        const userResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const posts = await userResponse.json();
        setPosts(posts);
      } catch (err) {
        console.error("에러발생", err.message);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  return (
    <>
      <div>{loading && "로딩중..........."}</div>
      <div>
        {posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </div>
    </>
  );
}

export default Posts;
