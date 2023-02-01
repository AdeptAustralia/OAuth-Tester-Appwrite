//import { useState } from "react";
//import api from "../../api/api";
import {
  appwrite,
} from "../icons";

// Your OAuth Provider Functions
import { loginWithAuthentik } from "./loginWith";

const Login = ({ dispatch }) => {
  return (
    <section className="container h-screen mx-auto flex">
      <div className="flex-grow flex flex-col max-w-md mx-auto p-6 items-center justify-center">
        <h1 className="text-6xl font-bold">Login</h1>
        <p className="mt-6"> Login with... </p>
        <button
          type="submit"
          className="mx-auto mt-4 py-2 px-16 font-semibold rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {loginWithAuthentik()}}
        >
          {appwrite(12)}
        </button>
      </div>
    </section>
  );
};

export default Login;
