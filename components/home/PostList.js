import { useContext, useEffect } from "react";
import Post from "./Post";
import PostFilter from "./PostFilter";
import styles from './postList.module.scss'

import { BlogContext } from "../../context/blogContext";

const PostList = () => {

  const { GetPosts, posts } = useContext(BlogContext);

  useEffect(() => {
    GetPosts()
  }, [])

  return (
    <>
      <div className={styles.header}>
        <h1>Posts</h1>
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
