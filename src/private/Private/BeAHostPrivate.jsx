import React from 'react';
import Loading from '../../shared/loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../provider/Provider';

const BeAHostPrivate = ({ children }) => {
  const { user, loading, userDB } = useContext(Authcontext);
  console.log(userDB)
  const loacation = useLocation();
  if (loading) {
    return <Loading para={true}></Loading>;
  }
  if (userDB?.role == "host") {
    return children;
  }
  return <Navigate to={"/applyForHost"} state={{ from: loacation }}></Navigate>;
};

export default BeAHostPrivate;