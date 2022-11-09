import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("NavId", 1);
  }, []);
  const login = () => {
    console.log('sss')
    router.push({
        pathname: '/',
        // query: { dep: dep, date: date, profile: profile, tname: tname, hn_: hn, time: '' },
      })
  };
  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          {/* BEGIN: Login Info */}
          <div className="hidden xl:flex flex-col min-h-screen">
            <a className="-intro-x flex items-center pt-5">
              <img
                alt="Midone - HTML Admin Template"
                className="w-6"
                src="dist/images/logo.svg"
              />
              <span className="text-white text-lg ml-3"> Smart IPD </span>
            </a>
            <div className="my-auto">
              <img
                alt="Midone - HTML Admin Template"
                className="-intro-x w-1/2 -mt-16"
                src="dist/images/illustration.svg"
              />
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                IPD PAPERLESS
                {/* <br />
                sign in to your account. */}
              </div>
              <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                โรงพยาบาลศรีสังวรสุโขทัย
              </div>
            </div>
          </div>
          {/* END: Login Info */}
          {/* BEGIN: Login Form */}
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                เข้าสู่ระบบ
              </h2>
              <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                {/* A few more clicks to sign in to your account. Manage all your
                e-commerce accounts in one place */}
              </div>
              <div className="intro-x mt-8">
                <input
                  type="text"
                  className="intro-x login__input form-control py-3 px-4 block"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="intro-x login__input form-control py-3 px-4 block mt-4"
                  placeholder="Password"
                />
              </div>
              <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                <div className="flex items-center mr-auto">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="form-check-input border mr-2"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <a>Forgot Password?</a>
              </div>
              <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" onClick={login}>
                  Login
                </button>
                <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                  Register
                </button>
              </div>
              <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                {" "}
                By signin up, you agree to our{" "}
                <a className="text-primary dark:text-slate-200">
                  Terms and Conditions
                </a>{" "}
                &amp;{" "}
                <a className="text-primary dark:text-slate-200">
                  Privacy Policy
                </a>{" "}
              </div>
            </div>
          </div>
          {/* END: Login Form */}
        </div>
      </div>
    </div>
  );
};

export default Login;
