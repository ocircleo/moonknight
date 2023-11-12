/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";
import Reviews from "./homeCompo/Reviews";
import Statistics from "./homeCompo/Statistics";
import WorkSection from "./homeCompo/WorkSection";
import Banner from "./homeCompo/Banner";
import Property from "./homeCompo/Property";
import Card from "../../shared/Card";
import Sales from "./homeCompo/Sales";
import Cities from "./homeCompo/Cities";
import Rent from "./homeCompo/Rent";
import Faq from "./homeCompo/Faq";
import usePageTitle from "../../hooks/PageTitleHook";
const Home = () => {

  usePageTitle('Too late | home');

  {/* Aos.init({
    offset: 200,
    duration: 900,
    easing: 'ease-in-sine',
    delay: 100,
  });*/}


  const { name } = useContext(dataContext);

  return (
    <div className=" mx-auto">
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <div className="mb-5">
        <WorkSection></WorkSection>
      </div>
      <div className="mb-5">
        <Property></Property>
      </div>

      <div className="mb-5">
        <Sales></Sales>
      </div>
      <div className="mb-5">
        <Cities></Cities>
      </div>
      <div className="mb-5">
        {/* <Rent></Rent> */}
      </div>

      <div className="mb-5">
        <Statistics></Statistics>
      </div>
      {/* <div className="mb-5">
        <Rent></Rent>
      </div> */}
      {/* <h2 className="text-3xl ps-2 font-semibold my-3 text-center py-7 capitalize ">What people says about us</h2>
      <div className="mb-5">
        <Reviews></Reviews>
      </div> */}
      <div className="mb-5">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
