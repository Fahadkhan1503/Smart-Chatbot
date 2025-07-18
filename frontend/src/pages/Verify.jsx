import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const { verifyUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyUser(Number(otp),navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 p-4">
      <form
        onSubmit={submitHandler}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-7 border border-teal-200"
      >
        <h2 className="text-4xl font-extrabold text-center text-teal-700">
          OTP Verification
        </h2>
        <p className="text-center text-gray-600">
          Enter the code sent to your email
        </p>

        <div className="space-y-2">
          <label
            className="block text-sm font-semibold text-gray-700"
            htmlFor="otp"
          >
            OTP Code
          </label>
          <input
            type="number"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-400 outline-none transition"
            placeholder="Enter OTP"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 font-bold text-white bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-xl hover:opacity-90 shadow-lg transition-all duration-300"
        >
          {btnLoading ? <LoadingSpinner />:"Verify"}
        </button>
      </form>
    </div>
  );

  // //Original
  // return (
  //   <div className="flex items-center justify-center h-screen">
  //   <form className="bg-white p-6 m-6 rounded shadow-md w-full md:w-[500px]"
  //   onSubmit={submitHandler}>

  //   <h2 className="text-2xl mb-4">Verify</h2>
  //   <div className="mb-4">
  //     <label className="block text-gray-700 mb-2" htmlFor="otp">
  //       otp:
  //     </label>
  //     <input
  //       type="number"
  //       id="otp"
  //       value={otp}
  //       onChange={(e) => setOtp(e.target.value)}
  //       className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500"
  //       required
  //     />
  //   </div>
  //   <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
  //     {btnLoading ? "Please Wait ...":"Submit"}
  //   </button>
  //   </form>
  // </div>
  // )
};

export default Verify;
