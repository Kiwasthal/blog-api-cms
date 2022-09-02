import useInput from '../hooks/useInput';

let LoginPage = () => {
  const username = useInput('');
  const password = useInput('');

  let saveTokenData = data => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.body.username);
  };

  let handleLogin = async e => {
    e.preventDefault();

    const loginData = new FormData();
    loginData.append('username', username.value);
    loginData.append('password', password.value);

    let response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(loginData)),
    });

    let data = await response.json();

    if (response.status === 200) {
      saveTokenData(data);
      console.log('Logged');
    } else {
      //SetError.textContent = data.info.message;
    }
  };

  return (
    <section className="mt-12 justify-center flex">
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <div className="flex xl:justify-center lg:justify-between justify-center flex-wrap h-full g-6">
          <div className="px-6 h-full text-gray-800">
            <form onSubmit={handleLogin}>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
                  LOG IN
                </p>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-300 ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none "
                  {...username}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-300 ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none "
                  {...password}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounder shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
