import React from "react";
import { useSelector } from "react-redux";
import { PostAuthor } from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import TimeAgo from "./TimeAgo";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  // using slice to get a copy of new array
  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <>
      <article key={post.id} style={{display:'flex',flexDirection:"column",alignItems:"flex-start"}}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p>
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.date}/>
        </p>
      </article>
      <hr />
    </>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}
