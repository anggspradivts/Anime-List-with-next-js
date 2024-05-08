"use client";
import React from "react";
// import { useFormState, useFormStatus } from "react-dom";
// import { authenticate } from "@/app/lib/actions";

const LoginForm = () => {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <div className="auth-link">
      <button
        className="btn rounded-none p-3 border-2 border-white hover:border-blue-600 bg-black hover:bg-white text-white hover:text-black"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div>Login</div>
          <form action="" className="space-y-3">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="w-full">
              <input
                type="email"
                placeholder="your email"
                className="w-full h-10 p-2 rounded-md"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="your password"
                className="w-full h-10 p-2 rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <LoginButton />
            </div>
          </form>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )} */}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginForm

function LoginButton() {
  // const { pending } = useFormStatus();
 
  return (
    <button className="mt-4 bg-black p-3 rounded-md">
      Log in 
    </button>
  );
}