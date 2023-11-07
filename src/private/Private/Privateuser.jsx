import { useContext } from "react";
import { Authcontext } from "../provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../shared/loading/Loading";
// eslint-disable-next-line react/prop-types
const Privateuser = ({ children }) => {
  const { loading, user } = useContext(Authcontext);
  const loacation = useLocation();
  if (loading) {
    return <Loading para={true}></Loading>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ from: loacation.pathname }}
    ></Navigate>
  );
};

export default Privateuser;
