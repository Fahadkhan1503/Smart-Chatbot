import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  
  const {loginUser, btnLoading} = UserData()
  const navigate = useNavigate()

  const submitHandler=(e) =>{
    e.preventDefault();
    loginUser(email,navigate);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <form
        onSubmit={submitHandler}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-7 border border-purple-200"
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-700">Smart Chatbot</h2>
        <p className="text-center text-gray-600">Login to continue</p>
  
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-400 outline-none transition"
            placeholder="example@email.com"
            required
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-3 font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl hover:opacity-90 shadow-lg transition-all duration-300"
          disabled={btnLoading}
        >
           {btnLoading ? <LoadingSpinner />:"Login"}
        </button>
      </form>
    </div>
  );
  
  

  // //original
  // return (
  //   <div className="flex items-center justify-center h-screen">
  //     <form className="bg-white p-6 m-6 rounded shadow-md w-full md:w-[500px]"
  //     onSubmit={submitHandler}>

  //     <h2 className="text-2xl mb-4">Login</h2>
  //     <div className="mb-4">
  //       <label className="block text-gray-700 mb-2" htmlFor="email">
  //         Email:
  //       </label>
  //       <input
  //         type="email"
  //         id="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500"
  //         required
  //       />
  //     </div>
  //     <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" disabled={btnLoading}>
  //       {btnLoading ? "please Wait ...":"Submit"}
  //     </button>
  //     </form>
  //   </div>
  // );
};

export default Login;
