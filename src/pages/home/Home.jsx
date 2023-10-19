import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";
import WelcomeSlider from "./homeCompo/welcomeSlider";
import Catagories from "./homeCompo/Catagories";

const Home = () => {
  const { name } = useContext(dataContext);
  let newArray = [...new Array(4).keys()];

  return (
    <div className="container mx-auto mt-8">
      <WelcomeSlider></WelcomeSlider>
      <div className="flex items-center justify-center gap-4 my-12 flex-wrap">
        {newArray.map((ele) => (
          <Catagories key={ele}></Catagories>
        ))}
      </div>
    </div>
  );
};

export default Home;
