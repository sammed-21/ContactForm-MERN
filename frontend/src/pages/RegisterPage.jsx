import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../components/Loading";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authActions";
const RegisterPage = () => {
  const navigate = useNavigate();
   const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });
  // const [loadings, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, pic } = loginData;
    if (password !== confirmPassword) {
      console.log('here in confirmpassword ✅')
      toast.error("password does not match");
    }
    dispatch(registerUser(loginData))
    toast.success('registered redirect to login page')
    if (success) {
      
      navigate("/login");
    }
    
    // if (password !== confirmPassword) {
   
      // toast.error("password does not match");
    // } else {
    //   try {
    //     setLoading(true);
    //     console.log(name, email, password, pic);
    //     const { data } = await axios.post(
    //       "http://localhost:5000/api/users",
    //       {
    //         name,
    //         email,
    //         password,
    //         pic

    //       },
    //       {
    //         headers: { "Content-Type": "application/json" },
    //       }
    //     );
    //     console.log(data);

    //     localStorage.setItem("userInfo", JSON.stringify(data))
    //     navigate("/login");
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error.response.data.message);
    //   }
    // }
  };
  const postDetails = (pics) => {
  if (!pics) {
    return toast("please select an image")
  }
  if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
    const data = new FormData()
    data.append('file', pics)
    data.append('upload_preset', 'uesrLink')
    data.append('cloud_name', 'dwpvb0zly')
    fetch('https://api.cloudinary.com/v1_1/dwpvb0zly/image/upload', {
      method: "POST",
      body: data
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      setLoginData((prev) => ({ ...prev, pic: data.url.toString() }))
    }).catch((err) => console.log(err.message))
  } else {
    return toast("please select an Image")
  }
}



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
          Create your account
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handlesubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setLoginData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your name"
                  required
                />
              </div>
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
                  htmlFor="pic"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  your profile picture
                </label>
                <input
                  type="file"
  name="pic"
  onChange={(e) => postDetails(e.target.files[0])}
  id="pic"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) =>
                  setLoginData((prev) => ({
                    ...prev,
                    password: e.target.value, // Change "passwords" to "password"
                  }))
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <div>
                <label
                  htmlFor="new Password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  confirmPassword
                </label>
                <input
                  type="password"
                  name="Confirm Password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  onChange={(e) => setConfirmPassword((prev) => e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white  bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default RegisterPage;
