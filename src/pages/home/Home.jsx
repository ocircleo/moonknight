import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";
import Reviews from "./homeCompo/Reviews";
import Statistics from "./homeCompo/Statistics";
import Banner from "./homeCompo/Banner";
import Property from "./homeCompo/Property";
import Card from "../../shared/Card";
import Sales from "./homeCompo/Sales";
import Cities from "./homeCompo/Cities";
import WorkSection from "./homeCompo/WorkSection";
import Rent from "./homeCompo/Rent";

const Home = () => {
  const { name } = useContext(dataContext);

  return (
    <div className=" mx-auto">
      <div className="mb-5">
        <Banner></Banner>
      </div>

      <div className="mb-5">
        <WorkSection></WorkSection>
        <Property></Property>
      </div>

      <div className="mb-5">
        <Sales></Sales>
      </div>
      <div className="mb-5">
        <Cities></Cities>
      </div>
      <div className="mb-5">
        <Rent></Rent>
      </div>

      <div className="mb-5">
        <Statistics></Statistics>
      </div>
      <h2 className="text-2xl ps-2 font-semibold my-3">What people says about us</h2>
      <div className="mb-5">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
