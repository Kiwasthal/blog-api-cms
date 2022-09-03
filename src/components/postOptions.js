import { useState, useEffect } from 'react';

const PostDeleteOption = ({ post }) => {
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    let getPostComments = async () => {
      const token = localStorage.getItem('token');
      const bearer = `Bearer ${token}`;
      let response = await fetch(
        `http://localhost:3000/api/posts/${post._id}/comments`,
        {
          method: 'GET',
          Authorization: bearer,
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        setPostComments(data);
      } else alert(data.message);
    };
    getPostComments();
  }, [post._id]);
  console.log(postComments);
  return (
    <div>
      <h3>{post.title}</h3>
    </div>
  );
};

export default PostDeleteOption;
