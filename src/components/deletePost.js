import { useState, useEffect } from 'react';
import PostDeleteOption from './postOptions';

const DeletePostOverlay = ({ success, update }) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let fetchPosts = async () => {
      let request = await fetch('http://localhost:3000/api/posts');
      let data = await request.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map(post => {
          return (
            <PostDeleteOption
              key={post._id}
              post={post}
              update={update}
              success={success}
            />
          );
        })
      ) : (
        <h1>There are no Posts</h1>
      )}
    </div>
  );
};

export default DeletePostOverlay;
