import { useContext } from "react";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Firebase/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  //   const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result);

      //   const userInfo = {
      //     email: result.user?.email,
      //     name: result.user?.displayName,
      //   };
      navigate("/");
      //   axiosPublic.post("/users", userInfo).then((res) => {
      //     console.log(res.data);
      //     navigate("/");
      //   });
    });
  };

  const handleGithubSignIn = () => {
    signInWithGitHub().then((result) => {
      console.log(result);
      //   const userInfo = {
      //     email: result.user?.email,
      //     name: result.user?.displayName,
      //   };
      navigate("/");
      //   axiosPublic.post("/users", userInfo).then((res) => {
      //     console.log(res.data);
      //     navigate("/");
      //   });
    });
  };

  return (
    <div className="w-full flex gap-4 items-center justify-center">
      <button
        type="button"
        className="font-semibold text-2xl"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle />
      </button>
      <button
        type="button"
        className="font-semibold text-2xl text-black"
        onClick={handleGithubSignIn}
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
