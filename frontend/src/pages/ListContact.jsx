import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import axios from 'axios'
const ListContact = () => {
  const [users, setUsers] = useState()

  const fetchUser =async () => {
    const {data} = await axios.get("http://localhost:5000/api/userlists")
    console.log(data)
   setUsers(data)
  }
  
 
  useEffect(() => {
    fetchUser();
  },[])
  return (
    <div>
      <MainScreen title={"welcome back sammed"}>
        <Link to="/createcontact" className="bg-black p-2">
          <button
            type="button"
            className="text-xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400 px-1 animate-pulse "
          >
            Create Contact +
          </button>
        </Link>

        <ContactCard users={users} />
      </MainScreen>
    </div>
  );
};

export default ListContact;
