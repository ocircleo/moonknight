import React, { useContext, useEffect } from "react";
import { Authcontext } from "../../private/provider/Provider";

const Test = () => {
  const { user } = useContext(Authcontext);
  const load = (e) => {
    e.preventDefault()
    let query = e.target.query.value;
    let body = {
      name: 'kamal',
      email: "salmanhossain11222626@gmail.com",
      age: 18,
      role: 'admin'

    };
    fetch(`https://moonknight-backend.vercel.app/user/${query}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("acces_token")}`,
      }
    }).then(res => res.json()).then(data => console.log(data));
  }

  return <div className="container mx-auto">
    <form onSubmit={load} className="flex flex-col gap-3 my-4">
      <input type="text" name="query" className="border-2 rounded w-full border-indigo-400 p-3" />
      <button type="submit" className="bg-indigo-400 p-3 rounded hover:bg-indigo-500 self-start capitalize text-white font-semibold">fetch</button>
    </form>
  </div>;
};

export default Test;
