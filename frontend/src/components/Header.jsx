import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate ,NavLink} from "react-router-dom";
import { logout } from "../features/auth/authSlice";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

   const { userInfo } = useSelector((state) => state.auth)
 const dispatch =useDispatch()
  // automatically authenticate user if token is found
  const navigate= useNavigate()
  const handleLogout = () => {
     
    dispatch(logout())
  
    navigate('/')
  }
  // Function to toggle the navigation menu
  const toggleMenu = () => {
    setOpen(!open);
  };
  const handleDropdown = () => {
 
    setDropDown((prev) => !prev);
  };

  return (
    <nav className="bg-white  border-b sticky backdrop-filter backdrop-blur-md bg-opacity-20 top-0 w-full z-50 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <span className="  rounded-full mx-2 p-1 font-semibold bg-black text-white">
            UL
          </span>
          <span className="self-center text-xl font-semibold font-san whitespace-nowrap dark:text-white">
            <Link to="/">User Link</Link>
          </span>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu} // Toggle the menu
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 transition-transform transform ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            open ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-2`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col justify-center items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-900">
            {userInfo && 
              <li>
              <Link
              to={"/contacts"}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              Contacts
              </Link>
              </li>
            }
          
            
            <li>
              <button
               
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                {userInfo ?
                  <img src={userInfo.pic}  onClick={handleDropdown} className="w-10 h-10 rounded-full"/> :  
              <button className="bg-black text-white px-3 py-2 rounded-md">Login</button>
              }
          
              </button>

              {userInfo && (
              <div
                id="dropdownNavbar"
                className={` ${
                  dropDown ? "block relative" : "hidden"
                }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-4 absolute z-10 flex flex-col  right-1 top-4  justify-center items-center md:min-w-[500px]  w-full border-1 shadow-xl border-black/75 bg-white  text-sm text-gray-900 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                   
  <button
    type="button"
    onClick={() => {
      handleLogout(); // Call handleLogout as a function
    }}
    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  >
    Sign Out
  </button>
  </li>
  </ul>
  </div>
  )  }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
