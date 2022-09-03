export const AddPost = ({ render }) => {
  return (
    <button
      className="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
      onClick={render}
    >
      ADD POST
    </button>
  );
};

export const DeletePost = ({ render }) => {
  return (
    <button
      className="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
      onClick={render}
    >
      DELETE POST
    </button>
  );
};
export const UpdatePost = ({ render }) => {
  return (
    <button
      className="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
      onClick={render}
    >
      UPDATE POST
    </button>
  );
};
export const DeleteComment = ({ render }) => {
  return (
    <button
      className="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
      onClick={render}
    >
      DELETE COMMENT
    </button>
  );
};
