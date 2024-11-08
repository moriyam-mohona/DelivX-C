import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [profileImage, setProfileImage] = useState("");

  const handleSignup = () => {
    // Signup logic here
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
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="text"
            placeholder="Profile Image URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="User">User</option>
            <option value="DeliveryMen">Delivery Men</option>
          </select>
          <button
            type="button"
            className="w-full py-3 bg-teal text-white rounded-md font-semibold hover:bg-orange"
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="w-full py-3 bg-blueGray text-white rounded-md font-semibold hover:bg-blue-500"
            onClick={handleSocialLogin}
          >
            Sign up with Google
          </button>
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
