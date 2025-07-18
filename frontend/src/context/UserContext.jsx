import { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { server } from "../main";



const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [btnLoading, setBtnloading] = useState(false)

  async function loginUser(email, navigate) {
    setBtnloading(true)
    try {
      const { data } = await axios.post(`${server}/api/user/login`, { email });
      toast.success(data.message);

      localStorage.setItem("verifyToken", data.verifyToken);
      navigate("/verify");
      setBtnloading(false)
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnloading(false)
    }
  }

  const [user, setUser] = useState([])
  const [isAuth, setIsAuth] = useState(false)
  async function verifyUser(otp, navigate) {
    const verifyToken = localStorage.getItem("verifyToken");
    setBtnloading(true)

    if(!verifyToken) toast.error("Please login first");
    try {
      const { data } = await axios.post(`${server}/api/user/verify`, { otp,verifyToken });
      toast.success(data.message);
      localStorage.clear();
      localStorage.setItem("token", data.token);
      navigate("/");
      setBtnloading(false)
      setIsAuth(true);
      setUser(data.user);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnloading(false)
    }
  }




  return (
    <UserContext.Provider value={{ 
        loginUser, btnLoading,
        isAuth, setIsAuth,
        user, verifyUser,
     }}>
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
