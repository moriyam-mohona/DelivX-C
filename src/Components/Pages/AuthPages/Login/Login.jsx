import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { LuEye, LuEyeOff } from "react-icons/lu";
import bg from "../../../../assets/bg.avif";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [btnDisable, setBtnDisable] = useState(true);
  const [passVisible, setPassVisible] = useState(false);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(2, "", "Gray");
  }, []);

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setBtnDisable(false);
      toast.success("Captcha validated successfully!");
    } else {
      setBtnDisable(true);
      toast.error("Captcha validation failed. Please try again.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");

      toast.success("Login successfully");
    });
  };

  const handleSocialLogin = () => {
    console.log("Social login initiated");
  };

  const togglePassVisible = () => {
    setPassVisible(!passVisible);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div
        className="absolute w-full h-full min-h-screen bg-cover bg-center filter blur-md opacity-80"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="relative max-w-md w-full bg-teal/10 px-8 py-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-darkGray text-center">
          Login
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-lightGray rounded-md focus:outline-none focus:border-teal"
          />
          <div className="relative">
            <input
              type={passVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-lightGray rounded-md focus:outline-none focus:border-teal"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePassVisible}
            >
              {passVisible ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>
          {/* ReCaptcha */}
          <div
            style={{
              padding: "5px",
              borderRadius: "8px",
            }}
            className="w-full flex full-width-captcha"
          >
            <LoadCanvasTemplate reloadColor="white text-sm" />
          </div>

          <div className="flex border border-lightGray focus:border-teal rounded-md">
            <input
              type="text"
              ref={captchaRef}
              placeholder="Type the text above"
              className="w-full  p-2 rounded-l-md focus:outline-none "
            />
            <button
              type="button"
              onClick={handleValidateCaptcha}
              className="px-3 bg-teal/50 text-white rounded-r-md font-semibold hover:bg-teal"
            >
              Validate
            </button>
          </div>

          <button
            disabled={btnDisable}
            type="submit"
            className={`w-full py-2 rounded-md font-semibold cursor-pointer 
              ${
                btnDisable
                  ? "bg-teal/50 text-white"
                  : "bg-teal text-white hover:scale-95"
              }`}
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
          <Link to="/Signup" className="text-white font-medium underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
