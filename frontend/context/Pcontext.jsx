import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Pcontext = createContext();

const PcontextProvider = (props) => {
  const navigate = useNavigate();
  const userLoggedIn = localStorage.getItem("user");

  const value = {
    navigate,
    toast,
    userLoggedIn,
  };
  return <Pcontext.Provider value={value}>{props.children}</Pcontext.Provider>;
};

export default PcontextProvider;
