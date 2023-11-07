import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";

const SocialLogin = ({ from }) => {
  const { googleSignIn, signJwt, setUserDB } = useContext(Authcontext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user.email;
        signJwt(user);
        toast.success("logged in");
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          imageUrl: result.user.photoURL,
          phone: result.user.phoneNumber
        };
        fetch(`https://moonknight-backend.vercel.app/user/createUser`, {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser)
        }).then(res => res.json()).then(data => setUserDB(data))
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div
        className=" bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white rounded-lg p-3 flex items-center gap-2 w-full justify-center "
        onClick={handleGoogleSignIn}
      >
        <button type="button" className="text-red-500 text-2xl">
          <FaGoogle></FaGoogle>
        </button>
        Continue with Google
      </div>
    </div>
  );
};

export default SocialLogin;
