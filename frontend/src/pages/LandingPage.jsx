import React,{useEffect} from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
      useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
           
        }
    },[history])
  return (
    <div className="flex min-h-[80vh]">
      {/* Left side with background image */}
      <div
        className="hidden lg:block w-1/2 bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80')",
        }}
      ></div>

      {/* Right side with content */}
      <div className="w-full p-8 lg:w-1/2 bg-white text-center items-center justify-center flex flex-col">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Welcome to User Management
        </h1>
        <p className="text-gray-600 mb-8">
          Organize and manage your contacts effortlessly with Contact
          Management. Add, edit, and categorize your contacts, set reminders,
          and keep your contacts accessible and up-to-date. Simplify your life
          today!
        </p>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Login
          </Link>
          <Link to='/register' className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
