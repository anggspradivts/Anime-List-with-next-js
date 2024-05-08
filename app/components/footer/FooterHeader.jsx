"use client";
import React from "react";
import LoginForm from "../login/index"

const FooterHeader = () => {
  // const { data: session } = useSession()
  return (
    <div className="flex justify-between">
      <LoginForm />
      <div className="nav-logo text-2xl font-bold font-mono">
        <span className="">My Anime list</span>
      </div>
      <div className="auth-link ">
        <button className="p-3 border-2 border-blue-600 bg-blue-600 duration-300 hover:bg-yellow-200 hover:border-white hover:text-black font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default FooterHeader;
