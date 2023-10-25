import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../assets/Firebase_Sdk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";

const SocialLogin = ({ from }) => {
  const { googleSignIn, signJwt } = useContext(Authcontext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user.email;
        signJwt(user);
        toast.success("logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className=" bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-full p-3 flex items-center gap-2 justify-center w-full"
      onClick={handleGoogleSignIn}
    >
      <button type="button" className="text-red-500 text-2xl">
        <FaGoogle></FaGoogle>
      </button>
      Continue with Google
    </div>
  );
};

export default SocialLogin;
