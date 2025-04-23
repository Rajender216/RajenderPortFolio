import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"

export const Pcontext = createContext();

const PcontextProvider = (props) => {
  const navigate = useNavigate();

  const value = {
    navigate,
    toast
  };
  return <Pcontext.Provider value={value}>{props.children}</Pcontext.Provider>;
};

export default PcontextProvider;
