import { useState } from 'react';
import useInput from '../hooks/useInput';

const AddPostForm = ({ update, success }) => {
  const title = useInput('');
  const content = useInput('');
  const [errorTxt, setErrorTxt] = useState('');

  const submitPost = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    const formData = new FormData();

    formData.append('title', title.value);
    formData.append('content', content.value);

    let request = await fetch(
      'https://kiwasthal-blog-server.herokuapp.com/api/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: bearer,
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );
    const data = await request.json();

    if (request.status === 200) {
      success(`${data.post.title} POST added successfully!`);
      update(false);
    } else setErrorTxt(data.errors[1].msg);
  };

  return (
    <div className="mt-12">
      <div className=" lg:justify-between justify-center flex-wrap h-full g-6">
        <div className="px-6 h-full text-gray-800">
          <form onSubmit={submitPost}>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
                CREATE POST
              </p>
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-300 ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                {...title}
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="content"
                placeholder="Content"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-300 ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                {...content}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounder shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
            <div className="mt-2">
              <span className="text-sm text-red-500">{errorTxt}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;
