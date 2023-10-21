import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../assets/Firebase_Sdk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ from }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-full p-3 flex items-center gap-2 justify-center w-full" onClick={handleGoogleSignIn}>
      <button
        type="button"
        
        className="text-red-500 text-2xl"
      >
        <FaGoogle></FaGoogle>
      </button>
      Continue with Google
    </div>
  );
};

export default SocialLogin;
