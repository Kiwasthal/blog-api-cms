let MainPage = () => {
  return <h1>Welcome {localStorage.getItem('username')}</h1>;
};

export default MainPage;
