import { useEffect } from 'react';
import { useState } from 'react';
import PostToUpdate from './postToUpdate';

const UpdatePostOptions = ({ update, success }) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let request = await fetch('http://localhost:3000/api/posts');
      let data = await request.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-10 mb-2">
      {posts.map(post => (
        <PostToUpdate
          key={post._id}
          post={post}
          update={update}
          success={success}
        />
      ))}
    </div>
  );
};

export default UpdatePostOptions;
