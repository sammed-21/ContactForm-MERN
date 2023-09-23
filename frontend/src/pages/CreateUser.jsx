import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { createContact,getContacts } from "../features/contact/contactActions";
const CreateUser = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
    const { userToken  } = useSelector((state) => state.auth)
   
  
  const onSubmit = (data) => {
    dispatch(createContact({data, userToken})) 
navigate('/contacts')
  // This will log the form data when the form is submitted.
  };

  return (
    <div>
      <div className="min-h-screen pt-2 font-mono my-6">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-gray-900">User Information</h2>
            <form
              className="mt-6 border-t border-gray-400 pt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-wrap flex-col -mx-3 mb-6">
                <div className="flex items-center justify-between mt-4">
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      First Name
                    </label>
                    <input
                      className={`appearance-none block w-full bg-white text-gray-700 border ${
                        errors.firstName ? "border-red-500" : "border-gray-400"
                      } shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                      type="text"
                      {...register("firstName", { required: true })}
                      placeholder="First Name"
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        First Name is required
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      className={`appearance-none block w-full bg-white text-gray-700 border ${
                        errors.lastName ? "border-red-500" : "border-gray-400"
                      } shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                      type="text"
                      {...register("lastName", { required: true })}
                      placeholder="Last Name"
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        Last Name is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Email Address
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      errors.email ? "border-red-500" : "border-gray-400"
                    } shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                    id="grid-text-1"
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="Enter Email"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      Email is required
                    </p>
                  )}
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Address 1
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      errors.address1 ? "border-red-500" : "border-gray-400"
                    } shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                    id="grid-text-1"
                    type="text"
                    {...register("address1", { required: true })}
                    placeholder="Enter Address 1"
                    required
                  />
                  {errors.address1 && (
                    <p className="text-red-500 text-xs mt-1">
                      Address 1 is required
                    </p>
                  )}
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Address 2
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      errors.address2 ? "border-red-500" : "border-gray-400"
                    } shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                    id="grid-text-1"
                    type="text"
                    {...register("address2")}
                    placeholder="Enter Address 2"
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Pick Your Country
                  </label>
                  <div className="flex-shrink w-full inline-block relative">
                    <select
                      className={`block appearance-none text-gray-600 w-full bg-white border ${
                        errors.country ? "border-red-500" : "border-gray-400"
                      } shadow-inner px-4 py-2 pr-8 rounded`}
                      {...register("country", { required: true })}
                    >
                      <option value="">Choose ...</option>
                      <option value="USA">USA</option>
                      <option value="France">France</option>
                      <option value="Spain">Spain</option>
                      <option value="UK">UK</option>
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1">
                        Country is required
                      </p>
                    )}
                    <div className="pointer-events-none absolute top-0 mt-3 right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    State
                  </label>
                  <div className="flex-shrink w-full inline-block relative">
                    <select
                      className={`block appearance-none text-gray-600 w-full bg-white border ${
                        errors.state ? "border-red-500" : "border-gray-400"
                      } shadow-inner px-4 py-2 pr-8 rounded`}
                      {...register("state", { required: true })}
                    >
                      <option value="">Choose ...</option>
                      <option value="English">English</option>
                      <option value="France">France</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                    {errors.state && (
                      <p className="text-red-500 text-xs mt-1">
                        State is required
                      </p>
                    )}
                    <div className="pointer-events-none absolute top-0 mt-3 right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone-no"
                  >
                    Phone No
                  </label>
                  <div className="flex space-x-3">
                    
                    <select
                      className={`border-black rounded p-2 ${
                        errors.countryCode ? "border-red-500" : "border-gray-400"
                      }`}
                      {...register("mobile.countryCode", { required: true })}
                    >
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                    </select>
                    <input
                      type="text"
                      className={`border ${
                        errors.number ? "border-red-500" : "border-gray-400"
                      } rounded p-2 w-full`}
                      placeholder="Phone Number"
                      {...register("mobile.number", { required: true })}
                    />
                  </div>
                  {errors.countryCode && (
                    <p className="text-red-500 text-xs mt-1">
                      Phone Code is required
                    </p>
                  )}
                  {errors.number && (
                    <p className="text-red-500 text-xs mt-1">
                      Phone Number is required
                    </p>
                  )}
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Pin Code
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      errors.zipCode ? "border-red-500" : "border-gray-400"
                    } shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                    id="grid-text-1"
                    type="text"
                    {...register("zipCode", { required: true })}
                    placeholder="Enter Pin Code"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">
                      Pin Code is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
