import { useState, useEffect } from 'react';

const PostDeleteOption = ({ post, update, success }) => {
  const [postComments, setPostComments] = useState([]);

  let deletePostHandler = async e => {
    e.preventDefault();
    console.log(post._id);
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    let response = await fetch(
      `https://kiwasthal-blog-server.herokuapp.com/api/posts/${post._id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: bearer,
        },
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      update(false);
      success(`Post with title ${post.title} deleted successfully!`);
    } else alert(data.message);
  };

  useEffect(() => {
    let getPostComments = async () => {
      const token = localStorage.getItem('token');
      const bearer = `Bearer ${token}`;
      let response = await fetch(
        `https://kiwasthal-blog-server.herokuapp.com/api/posts/${post._id}/comments`,
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

  return (
    <div className="flex justify-evenly">
      <h3>Title : {post.title}</h3>
      {postComments.length > 0 ? (
        postComments.map(comment => {
          return <div>Comment</div>;
        })
      ) : (
        <button onClick={deletePostHandler}>Delete</button>
      )}
    </div>
  );
};

export default PostDeleteOption;
