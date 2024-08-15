import React, { useState } from "react";
import Header from "./Header";
import bg from "../Assets/bg.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <div className="absolute">
        <Header />
        <img className="object-cover w-full h-full" src={bg} alt="background" />
      </div>
      <form
        className="flex flex-col justify-center items-center text-white 
            my-36 m-auto right-0 left-0 top-0 w-3/12 absolute 
            p-12 bg-[#000000d3] rounded-xl"
      >
        <h1 className="font-bold text-4xl py-4 px-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          className={`p-3 m-4 w-full bg-[#1b1b1bd3]
                ${isSignInForm ? "hidden" : ""}
                `}
        />
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-4 w-full bg-[#1b1b1bd3]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-4 w-full bg-[#1b1b1bd3]"
        />
        <button className="p-2 m-4 w-full text-lg font-semibold bg-red-700 hover:bg-red-800 rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          <span className="text-white cursor-pointer" onClick={toggleForm}>
            {isSignInForm ? " Sign Up Now " : " Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
