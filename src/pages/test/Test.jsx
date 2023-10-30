import React, { useContext, useEffect } from "react";
import { Authcontext } from "../../private/provider/Provider";

const Test = () => {
  const { user } = useContext(Authcontext);
  useEffect(() => {
    let body = { email: user?.email };
    fetch("http://localhost:3000/user/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("acces_token")}`,
      },
      body: JSON.stringify(body),
    });
  }, [user, user?.email]);

  return <div></div>;
};

export default Test;
