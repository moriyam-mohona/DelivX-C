import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const accept = form.accept.checked;

    console.log(name, email, password, accept);
  };

  const handleSocialLogin = () => {
    // Social login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightGray">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-darkGray text-center">
          Sign Up
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
          />
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

          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal">
            <option value="User">User</option>
            <option value="DeliveryMen">Delivery Men</option>
          </select>
          <div className="flex items-center">
            <input type="checkbox" name="accept" className="mr-3" />
            <label>
              Accept our{" "}
              <a href="terms" className="underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal text-white rounded-md font-semibold hover:bg-orange"
          >
            Sign Up
          </button>
          <div className="w-full flex gap-4 items-center justify-center">
            {/* Google Login */}
            <button
              type="button"
              className="font-semibold text-2xl"
              onClick={handleSocialLogin}
            >
              <FcGoogle />
            </button>
            {/* GitHub Login */}
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
          Already have an account?{" "}
          <Link to="/login" className="text-teal font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
