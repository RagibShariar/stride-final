import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser , googleLogin} = useAuth();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [registerError, setRegisterError] = useState('');



  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirmPassword.value;
    const termsAndConditions = form.termsAndConditions.checked;
    // console.log(name, email, password, confirm_password, termsAndConditions);


    // reset error message
    setRegisterError('');

    if (password < 6) {
      setRegisterError("Password should be at least 6 characters or longer")
      return;
    }
    if (password !== confirm_password) {
      setRegisterError("password doesn't match");
      return;
    }
    if (!termsAndConditions) {
      setRegisterError("You must accept our terms and conditions");
      return;
    }
    

    createUser(email, password)
      .then(res => {
        Toast.fire({
          icon: "success",
          title: "Registration successful",
        });
        form.reset();
        navigate("/");
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setRegisterError('email already exits')
          return
        }
      })
  };


  const handleGoogleLogin = () => { 
    googleLogin()
      .then(result => {
        Toast.fire({
          icon: "success",
          title: "Login successful",
        });
        navigate("/");
      }).catch(error => { 
        console.log(error.code)
      })
  }

  return (
    <>
      <div className="flex items-center p-4 bg-gray-50 md:h-screen">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid w-full gap-16 p-6 bg-white shadow-md rounded overflow-hidden md:grid-cols-2 lg:gap-24 sm:p-8">
            <div className="space-y-6 max-md:order-1 ">
              <div className="mb-12 md:mb-16">
                <h3 className="text-2xl font-extrabold">Instant Access</h3>
              </div>
                <div className="w-full">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-semibold tracking-wider text-gray-900 bg-gray-100 rounded hover:bg-gray-200"
                >
                  <FcGoogle size={22} className="mr-3" />
                  Continue with Google
                </button>
                </div>
                <div className="w-full">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-semibold tracking-wider text-white bg-black rounded hover:bg-gray-800"
                >
                  <FaGithub size={22} className="mr-3" />
                  Continue with Github
                </button>
                </div>
            </div>
            <form onSubmit={handleRegister} className="w-full ">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold">Register</h3>
              </div>
              <div className="space-y-6 ">
                <div>
                  <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full py-2.5 pl-4 pr-10 text-sm border border-gray-300 rounded outline-blue-500"
                      placeholder="Enter name"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="absolute w-4 h-4 right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6" />
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">Email Id</label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full py-2.5 pl-4 pr-10 text-sm border border-gray-300 rounded outline-blue-500"
                      placeholder="Enter email"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="absolute w-4 h-4 right-4"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" />
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        />
                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="relative ">
                    <input
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      required
                      className="w-full py-2.5 pl-4 pr-10 text-sm border border-gray-300 rounded outline-blue-500"
                      placeholder="Enter password"
                    />
                    <button className="btn text-gray-400 absolute right-0 -bottom-1 flex items-center text-sm leading-5 bg-transparent border-none shadow-none hover:bg-transparent" onClick={togglePasswordVisibility}>
                    {passwordVisible ? <RxEyeOpen className="w-4 h-4 right-4 cursor-pointer"/> : <RxEyeClosed className="w-4 h-4 right-4 cursor-pointer" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  <div className="relative ">
                    <input
                      name="confirmPassword"
                      type={confirmPasswordVisible ? "text" : "password"}
                      required
                      className="w-full py-2.5 pl-4 pr-10 text-sm border border-gray-300 rounded outline-blue-500"
                      placeholder="Confirm password"
                    />
                    <button className="btn text-gray-400 absolute right-0 -bottom-1 flex items-center text-sm leading-5 bg-transparent border-none shadow-none hover:bg-transparent" onClick={toggleConfirmPasswordVisibility}>
                    {confirmPasswordVisible ? <RxEyeOpen className="w-4 h-4 right-4 cursor-pointer"/> : <RxEyeClosed className="w-4 h-4 right-4 cursor-pointer" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center ">
                  <input
                    id="termAndConditions"
                    name="termsAndConditions"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 shrink-0"
                  />
                  <label htmlFor="termAndConditions" className="block ml-3 text-sm">
                    I accept the
                    <a
                      href="javascript:void(0);"
                      className="ml-1 font-semibold text-blue-600 hover:underline"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div >
              { registerError &&
                <p className="mt-6 text-red-500 text-sm font-medium leading-6">{ registerError }</p> 
                }
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
                >
                  Create Account
                </button>
              </div>
              <p className="mt-6 text-sm text-center">
                Already have an account?
                <Link to='/login'
                  href="javascript:void(0);"
                  className="ml-1 font-semibold text-blue-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
