import React, { useContext, useState } from "react";
import { asst } from "../assets/asst.js";
import axios from "axios";
import { Pcontext } from "../../context/Pcontext.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { navigate, toast } = useContext(Pcontext);
  const [page, setPage] = useState("signup");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const setPageState = () => {
    if (page === "signup") {
      setPage("signin");
    } else {
      setPage("signup");
    }
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        setShowOtp(true);
        console.log("Hello");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`,
        {
          password,
          email,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        localStorage.setItem("user", "yes");
        toast.success("login Successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleOtp = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/verifyotp`,
        {
          otp,
          email,
          password,
          username,
        }
      );
      console.log(response.data.success);
      if (response.data.success) {
        toast.success(response.data.message);
        setShowOtp(false);
        setPage("signin");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-w-full flex justify-center items-center mt-10 text-teal-400">
      <div className="w-80 rounded-xl p-8 shadow-2xl">
        <p className="text-center text-xl font-bold he1">
          {page === "signup" ? "Sign-Up" : "Sign-In"}
        </p>
        <form
          className="mt-6"
          onSubmit={
            showOtp ? handleOtp : page === "signup" ? handleSignup : handleLogin
          }
        >
          {page === "signup" ? (
            <div className="mt-1">
              <label
                className="block text-sm he1 font-semibold"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-700  px-4 py-3  focus:border-green-700 focus:outline-none focus:ring-0"
                required
              />
            </div>
          ) : (
            ""
          )}
          <div className="mt-1">
            <label className="block text-sm he1 font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-700  px-4 py-3  focus:border-green-700 focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div className="mt-1">
            <label
              className="block text-sm he1 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-700  px-4 py-3  focus:border-green-700 focus:outline-none focus:ring-0"
              required
            />
            <div className="mt-2 flex justify-end text-sm">
              <a
                href="#forgot"
                className=" font-semibold hover:text-purple-500 hover:underline"
              >
                {page === "signup" ? "" : "Forgot password ?"}
              </a>
            </div>
          </div>
          {showOtp ? (
            <div className="mt-1">
              <label className="block text-sm he1 font-semibold" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-700  px-4 py-3  focus:border-green-700 focus:outline-none focus:ring-0"
                required
              />
              <div className="mt-2 flex justify-end text-sm">
                <a
                  href="#forgot"
                  className=" font-semibold hover:text-purple-500 hover:underline"
                >
                  {page === "signup" ? "" : "Forgot password ?"}
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-green-500 px-4 py-3 font-semibold text-gray-900 hover:bg-purple-500"
          >
            {showOtp == true
              ? "Verify OTP"
              : page === "signup"
              ? "Sign-Up"
              : "Sign-in"}
          </button>
        </form>
        <div className="mt-4 flex items-center pt-6">
          <div className="h-px flex-1 bg-green-500"></div>
          <p className="px-3 text-sm">
            {page === "signup"
              ? "Sign-up with social accounts"
              : "Login with social accounts"}
          </p>
          <div className="h-px flex-1 bg-green-500"></div>
        </div>
        <div className="mt-6 flex justify-center space-x-2">
          <button aria-label="Log in with Google" className="rounded-sm p-3 ">
            <img className="w-5 cursor-pointer" src={asst.search} alt="" />
          </button>
          <button aria-label="Log in with Twitter" className="rounded-sm p-3 ">
            <img className="w-5 cursor-pointer" src={asst.twitter} alt="" />
          </button>
          <button aria-label="Log in with GitHub" className="rounded-sm p-3 ">
            <img className="w-5 cursor-pointer" src={asst.github} alt="" />
          </button>
        </div>
        <p className="mt-8 text-center text-sm">
          {page === "signup"
            ? "Already have an accounnt? "
            : "Don't have an account? "}
          <a
            href="#signup"
            className=" font-semibold hover:text-purple-500 underline"
            onClick={setPageState}
          >
            {page !== "signup" ? "Sign-Up" : "Sign-in"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
