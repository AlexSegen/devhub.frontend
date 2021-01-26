import { useContext, useEffect } from "react";
import Post from "./Post";
import PostFilter from "./PostFilter";
import styles from './postList.module.scss'

import { BlogContext } from "../../context/blogContext";

const PostList = ({title, resource, value}) => {

  const { GetPosts, posts, loading, error } = useContext(BlogContext);

  useEffect(() => {
    GetPosts(resource, value)
  }, [value])


    if (loading)
      return <>Loading posts</>


  return (
    <>
      <div className={styles.header}>
        <h1>{ title || "Posts"}</h1>
        <PostFilter/>
      </div>
      
      {posts && posts.length > 0 ? (
        posts.map((post, index) => <Post key={index} post={post} index={index} />)
      ) : (
        <div className="text-muted">No posts yet</div>
      )}
    </>
  );
};

export default PostList;
