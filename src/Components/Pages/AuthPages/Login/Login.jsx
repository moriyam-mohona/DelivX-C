import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [btnDisable, setBtnDisable] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setBtnDisable(false);
      alert("Captcha validated successfully!");
    } else {
      setBtnDisable(true);
      alert("Captcha validation failed. Please try again.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleSocialLogin = () => {
    console.log("Social login initiated");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightGray">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-darkGray text-center">
          Login
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
          />
          {/* ReCaptcha */}
          <LoadCanvasTemplate />
          <div className="flex">
            <input
              type="text"
              ref={captchaRef}
              placeholder="Type the text above"
              className="w-full p-3 rounded-l-md focus:outline-none focus:border-teal"
            />
            <button
              type="button"
              onClick={handleValidateCaptcha}
              className="px-3 bg-teal text-white rounded-r-md font-semibold hover:bg-orange"
            >
              Validate
            </button>
          </div>

          <button
            disabled={btnDisable}
            type="submit"
            className="w-full py-3 bg-teal text-white rounded-md font-semibold"
          >
            Login
          </button>
          {/* Social Login */}
          <div className="w-full flex gap-4 items-center justify-center">
            <button
              type="button"
              className="font-semibold text-2xl"
              onClick={handleSocialLogin}
            >
              <FcGoogle />
            </button>
            <button
              type="button"
              className="font-semibold text-2xl text-black"
              onClick={handleSocialLogin}
            >
              <FaGithub />
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/Signup" className="text-teal font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
