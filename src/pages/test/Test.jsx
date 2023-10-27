import React, { useContext, useEffect } from "react";
import { Authcontext } from "../../private/provider/Provider";

const Test = () => {
  const { user } = useContext(Authcontext);
  useEffect(() => {
    console.log(user)
    fetch("http://localhost:3000/user/user", {
      method: "POST",
      headers: {
        authorization: `bearer ${localStorage.getItem("acces_token")}`,
      },
      body: { email: user.email },
    });
  }, [user]);

  return <div></div>;
};

export default Test;
