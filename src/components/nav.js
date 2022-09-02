let NavBar = ({ setUserAuth }) => {
  const handleLogout = () => {
    localStorage.clear();
    setUserAuth(false);
  };

  return (
    <nav id="home" className="bg-white shadow-lg p-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-500 text-xl">
            Kiwasthal Blog CMS
          </h1>
          <button
            id="logout"
            className="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
