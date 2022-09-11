import { useState } from 'react';
import useInput from '../hooks/useInput';

const PostToUpdate = ({ post, update, success }) => {
  const newTitle = useInput(post.title);
  const [newContent, setNewContent] = useState(post.content);
  console.log(newContent);

  const handleSubmit = async e => {
    e.preventDefault();
    const updateFormData = new FormData();
    updateFormData.append('title', newTitle.value);
    updateFormData.append('content', newContent);
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;

    let response = await fetch(
      `https://kiwasthal-blog-server.herokuapp.com/api/posts/${post._id}/update`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: bearer,
        },
        body: JSON.stringify(Object.fromEntries(updateFormData)),
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      update(false);
      post.title === newTitle.value
        ? success(`Post titled ${post.title} successfuly updated`)
        : success(
            `Post previously named ${post.title} retitled to ${newTitle.value} and successfully updated`
          );
    } else alert(data.message);
  };

  return (
    <div className="flex xl:justify-center lg:justify-between justify-center flex-wrap h-full g-6">
      <div className="px-6 h-full text-gray-800">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
              Update Post
            </p>
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-300 ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none "
              {...newTitle}
            />
          </div>
          <div className="mb-6">
            <textarea
              name="content"
              cols="30"
              rows="10"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-300 ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none "
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounder shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostToUpdate;
