import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";

import Reviews from "./homeCompo/Reviews";
const Home = () => {
  const { name} = useContext(dataContext);

  return (
    <div className="container mx-auto mt-8">
  
      <h2 className="text-2xl ps-2 font-semibold my-3">Our Top Reviews</h2>
      <div className="mb-5">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
