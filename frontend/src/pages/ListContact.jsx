import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { getContacts,deleteContact } from "../features/contact/contactActions";
import Loading from "../components/Loading";
const ListContact = () => {
  // const [users, setUsers] = useState()
  const dispatch = useDispatch()
  const { userToken ,userInfo:data } = useSelector((state) => state.auth)
   
  const { userInfo, loading, error } = useSelector((state) => state.contact);
 
  const deleteContacts = (id) => {
    console.log(id)
    dispatch(deleteContact({ id, userToken })).then(() => {
      // After successful deletion, refetch the updated contact list
      dispatch(getContacts(userToken));
    });
  }
  useEffect(() => {
   
    dispatch(getContacts(userToken));
  }, [dispatch])
if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <MainScreen title={`welcome back ${data.name}`}>
        
        <Link to="/createcontact" className="bg-black p-2">
          <button
            type="button"
            className="text-xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400 px-1 animate-pulse "
          >
            Create Contact +
          </button>
        </Link>

        <ContactCard users={userInfo} deleteContacts={deleteContacts} />
      </MainScreen>
      <Toaster/>
    </div>
  );
};

export default ListContact;
