import { useContext, useEffect } from "react";
import { dataContext } from "../../private/provider/Data_Provider";
import WelcomeSlider from "./homeCompo/welcomeSlider";
import Catagories from "./homeCompo/Catagories";
import data from "../../../public/cardData.json";
import BaseCard from "../../shared/baseCard/BaseCard";
import { Link } from "react-router-dom";
import Reviews from "./homeCompo/Reviews";
const Home = () => {
  const { name } = useContext(dataContext);
  let newArray = [
    {
      id: 0,
      category: "students",
    },
    {
      id: 2,
      category: "singles",
    },
    {
      id: 3,
      category: "couples",
    },
    {
      id: 4,
      category: "family",
    },
  ];
  // useEffect(() => {
  //   fetch("http://localhost:3000/test", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("acces_token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="container mx-auto mt-8">
      <WelcomeSlider></WelcomeSlider>
      <div className="flex items-center justify-center gap-4 my-12 flex-wrap">
        {newArray.map((ele) => (
          <Catagories key={ele.id} data={ele}></Catagories>
        ))}
      </div>
      <h2 className="text-2xl underline decoration-[#6A94FF] decoration-4 underline-offset-8 text-center font-semibold">
        Top Rent House Around Bangladesh
      </h2>
      <div className="container mx-auto grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-items-center gap-5 my-10 flex-wrap">
        {data.map((ele) => (
          <BaseCard key={ele.location} data={ele}></BaseCard>
        ))}
      </div>
      <Link className="w-full bg-[#6A94FF] block text-center py-2 rounded font-semibold capitalize text-white mb-5">
        explore more →{" "}
      </Link>
      <h2 className="text-2xl ps-2 font-semibold my-3">Our Top Reviews</h2>
      <div className="mb-5">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
