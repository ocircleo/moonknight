import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import reader from "../../../public/login.json";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInEmailusers, signJwt } = useContext(Authcontext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password))
      signInEmailusers(email, password)
        .then((result) => {
          const loggedUser = result.user.email;
          signJwt(loggedUser);
          toast.success("successfully login");
          form.reset();

          // navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.message);
        });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-2/4">
            <Lottie animationData={reader} loop={true} />
          </div>
          <div className="card md:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-3xl ">Log In</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded-full"
                  required
                />
                <div
                  className="self-start flex items-center gap-2 my-2 ms-2 select-none cursor-pointer"
                  onClick={togglePassword}
                >
                  <input
                    type="checkbox"
                    name=""
                    checked={showPassword ? true : false}
                    id=""
                    className="h-4 w-4 "
                  />
                  <p className="pb-1">show password</p>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn btn-primary bg-blue-500 border-blue-500 rounded-full text-white font-normal text-lg px-5"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <p className="text-center">
                <small>
                  New here?{" "}
                  <Link to="/signup" className="text-primary">
                    Create a new account
                  </Link>
                </small>{" "}
              </p>
              <SocialLogin from={from}></SocialLogin>
              Continue with Google
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
