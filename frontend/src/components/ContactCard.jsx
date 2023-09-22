import React, { useState } from "react";
import { contacts } from "../assets/data";
const ContactCard = ({users}) => {
  
  const [expandedUsers, setExpandedUsers] = useState(null);

  const toggleExpansion = (userId) => {
    if (expandedUsers === userId) {
      setExpandedUsers(null);
    } else {
      setExpandedUsers(userId);
    }
  };
  //  "firstName": "second contact",
  // "mobile": {
  //           "countryCode": "+91",
  //           "number": "1234567891"
  //       },
//         "lastName": "dummy contact",
//         "email": "dummy@example.com",
//         "address1": "123 Main St",
//         "address2": "Apt 4B",
//         "state": "Karnataka",
//         "country": "India",
//         "zipCode": "12345",
  return (
    <div className="w-full   rounded-lg">
       {users &&
              users.map((user) => (
        <div key={user._id} className="mb-4 my-3 shadow-lg  ">
          <div  
            onClick={() => toggleExpansion(user._id)}
            className="flex justify-between items-center transition ease-in-out delay-150 py-5 bg-gray-200 rounded-lg px-3"
          >
            <h2 className="text-xl font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <div className="space-x-2">
              <button
                className="text-white bg-blue-800 px-1 transition ease-in-out delay-100 hover:bg-blue-400 focus:outline-none"
                onClick={() => {
                  // Handle edit click here
                }}
              >
                Edit
              </button>
              <button
                className="text-white bg-red-800 px-1 transition ease-in-out delay-100 hover:bg-red-400 focus:outline-none"
                onClick={() => {
                  // Handle delete click here
                }}
              >
                Delete
              </button>
          
            </div>
          </div>
          {expandedUsers === user._id && (
            <div className="bg-white transition ease-in-out delay-150  px-3">
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700">
                <strong>Mobile:</strong> {user.mobile.number}
              </p>
              <p className="text-gray-700">
                <strong>Address 1:</strong> {user.address1}
              </p>
              <p className="text-gray-700">
                <strong>Address 2:</strong> {user.address2}
              </p>
              <p className="text-gray-700">
                <strong>State:</strong> {user.state}
              </p>
              <p className="text-gray-700">
                <strong>Country:</strong> {user.country}
              </p>
              <p className="text-gray-700">
                <strong>Zip Code:</strong> {user.zipCode}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
