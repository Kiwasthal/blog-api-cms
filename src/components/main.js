import { AddPost, DeletePost, UpdatePost, DeleteComment } from './buttons';
import { useState } from 'react';
import AddPostForm from './addPostForm';
import DeletePostOverlay from './deletePost';

let MainPage = () => {
  let [addPost, setAddPost] = useState(false);
  let [deletePost, setDeletePost] = useState(false);
  let [updatePost, setUpdatePost] = useState(false);
  let [deleteComment, setDeleteComment] = useState(false);
  let [successMsg, setSuccessMsg] = useState('');

  let renderAddPost = () => {
    setDeletePost(false);
    setUpdatePost(false);
    setDeleteComment(false);
    setAddPost(true);
  };

  let renderDeletePost = () => {
    setDeletePost(true);
    setUpdatePost(false);
    setDeleteComment(false);
    setAddPost(false);
  };

  let renderUpdatePost = () => {
    setDeletePost(false);
    setUpdatePost(true);
    setDeleteComment(false);
    setAddPost(false);
  };

  let renderDeleteComment = () => {
    setDeletePost(false);
    setUpdatePost(false);
    setDeleteComment(true);
    setAddPost(false);
  };

  return (
    <section className="max-w-5xl  mx-auto">
      <h1 className="mt-8 text-gray-500 text-3xl">
        Welcome {localStorage.getItem('username')}
      </h1>
      <h3 className="text-lg text-green-500 mt-2">{successMsg}</h3>
      <div className="bg-gray-100 shadow-lg p-4 mt-4">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between">
            <AddPost render={renderAddPost} />
            <DeletePost render={renderDeletePost} />
            <UpdatePost render={renderUpdatePost} />
            <DeleteComment render={renderDeleteComment} />
          </div>
        </div>
      </div>
      <div>
        {addPost ? (
          <AddPostForm update={setAddPost} success={setSuccessMsg} />
        ) : deletePost ? (
          <DeletePostOverlay />
        ) : updatePost ? (
          <h1>Update a Post</h1>
        ) : deleteComment ? (
          <h1>Delete a comment</h1>
        ) : null}
      </div>
    </section>
  );
};

export default MainPage;
