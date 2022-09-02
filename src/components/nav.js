let NavBar = () => {
  const handleLogout = () => localStorage.clear();

  return (
    <nav id="home" class="bg-white shadow-lg p-4">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <h1 class="font-semibold text-gray-500 text-xl">
            Kiwasthal Blog CMS
          </h1>
          <button
            id="logout"
            class="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
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
