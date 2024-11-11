import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import toast from "react-hot-toast";
import { LuEye, LuEyeOff } from "react-icons/lu";
import bg from "../../../../assets/bg.avif";

const Signup = () => {
  const { createUser, updatePro } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passVisible, setPassVisible] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false); // State for accept checkbox

  const handleSignup = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept our Terms & Conditions to proceed.");
      return;
    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result) => {
      const user = result.user;
      updatePro(name)
        .then(() => console.log("Profile updated"))
        .catch((error) => console.log(error));
      navigate("/");
      toast.success("Sign Up Successfully");
    });
  };

  const handleSocialLogin = () => {
    // Social login logic here
  };

  const togglePassVisible = () => {
    setPassVisible(!passVisible);
  };

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked); // Update acceptTerms state based on checkbox
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div
        className="absolute w-full h-full min-h-screen bg-cover bg-center filter blur-md opacity-80"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative max-w-md w-full bg-teal/10 px-8 py-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-darkGray text-center">
          Sign Up
        </h2>
        <form className="mt-6 space-y-3" onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border border-lightGray rounded-md focus:outline-none focus:border-teal"
          />
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
              className=" w-full p-2 border border-lightGray rounded-md focus:outline-none focus:border-teal"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePassVisible}
            >
              {passVisible ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>

          <select className="w-full p-2 border border-lightGray rounded-md focus:outline-none focus:border-teal">
            <option value="User">User</option>
            <option value="DeliveryMen">Delivery Men</option>
          </select>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="accept"
              className="mr-3"
              onChange={handleCheckboxChange}
            />
            <label>
              Accept our{" "}
              <a href="terms" className="underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            disabled={!acceptTerms}
            className={`w-full py-2 rounded-md font-semibold cursor-pointer ${
              acceptTerms
                ? "bg-teal text-white hover:bg-orange hover:scale-95"
                : "bg-teal/50 text-white"
            }`}
          >
            Sign Up
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

        <p className="mt-4 text-center text-md text-white">
          Already have an account?{" "}
          <Link to="/Login" className="font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
