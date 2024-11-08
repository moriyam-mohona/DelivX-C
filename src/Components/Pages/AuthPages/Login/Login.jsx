import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Login logic here
  };

  const handleSocialLogin = () => {
    // Social login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightGray">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-darkGray text-center">
          Login
        </h2>
        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="w-full py-3 bg-teal text-white rounded-md font-semibold hover:bg-orange"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type="button"
            className="w-full py-3 bg-blueGray text-white rounded-md font-semibold hover:bg-blue-500"
            onClick={handleSocialLogin}
          >
            Sign in with Google
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don`t have an account?{" "}
          <Link to="/signup" className="text-teal font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
