import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";

import Reviews from "./homeCompo/Reviews";
import Statistics from "./homeCompo/Statistics";
// <<<<<<< HEAD

import WorkSection from "./homeCompo/WorkSection";
import Banner from "./homeCompo/Banner";
// =======
// import Banner from "./homeCompo/Banner";
// import WorkSection from "./homeCompo/WorkSection";
import Property from "./homeCompo/Property";
// >>>>>>> e4326f253d0d7eaead89ed975b828ce38145b554
const Home = () => {
  const { name } = useContext(dataContext);

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <div className="mb-5">
{/* <<<<<<< HEAD */}
       
      <WorkSection></WorkSection>
=======
        <Property></Property>
{/* >>>>>>> e4326f253d0d7eaead89ed975b828ce38145b554 */}
      </div>

      <div className="mb-5">
        <Statistics></Statistics>
      </div>
      <h2 className="text-2xl ps-2 font-semibold my-3">Our Top Reviews</h2>
      <div className="mb-5">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
