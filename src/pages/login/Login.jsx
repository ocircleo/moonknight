
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  return <div className="">login page</div>;
};

export default Login;
