import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAuthor } from "./PostAuthor";
import PostExerpt from "./PostExerpt";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postSlice";

import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

export default function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if(postsStatus === 'loading'){
    content = <p>Loading ....</p>
  }
  else if(postsStatus === "succeeded"){
    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    content = orderedPosts.map(post=><PostExerpt key={post.id} post={post}/>)
  }
  else if(postsStatus === "failed"){
    content = <p>{error}</p>
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}
