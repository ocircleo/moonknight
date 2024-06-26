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
        className=" bg-white text-black border-black border-2 cursor-pointer  font-bold rounded-lg p-3 flex items-center gap-2 w-full justify-center "
        onClick={handleGoogleSignIn}
      >
        <button type="button" className="text-red-500 text-2xl">
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285f4" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"></path><path fill="#34a853" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"></path><path fill="#fbbc05" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"></path><path fill="#ea4335" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"></path></svg>
        </button>
        Continue with Google
      </div>
    </div>
  );
};

export default SocialLogin;
