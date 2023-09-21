import axios from "axios";
import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
// import MainScreen from '../components/MainScreen'
import { Link,useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { loginUser } from "../features/auth/authActions";

import toast from "react-hot-toast";
const LoginPage = ({ history }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading, userInfo,error  }=useSelector((state)=>state.auth)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  
 useEffect(() => {
   if (userInfo) {
      console.log(userInfo.name)
      navigate('/contacts')
    }
  }, [navigate, userInfo])

  const handlesubmit = async (e) => {
     e.preventDefault();
    
    dispatch(loginUser(loginData))
    toast.success('registered redirect to login page')
    
    // try{
      // setLoading(true);
      // const { data } = await axios.post(
      //   "http://localhost:5000/api/users/login",
      //   {
      //     email,
      //     password,
      //   },
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      // console.log(data);

      // localStorage.setItem("userInfo", JSON.stringify(data));
      // navigate("/contacts")
      // setLoading(false);
    // } catch (error) {
    //   toast.error(error.response.data.message);
    // }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-start px-6  mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <span className="  rounded-full mx-2 p-1 font-semibold bg-black text-white">
            UL
          </span>{" "}
          Login
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handlesubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setLoginData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
  type="password"
  name="password"
  id="password"
  placeholder="••••••••"
  onChange={(e) =>
    setLoginData((prev) => ({
      ...prev,
      password: e.target.value,
    }))
  }
  autoComplete="current-password" // Add this attribute
  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  required
/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                       type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                     />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white  bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Login In
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
