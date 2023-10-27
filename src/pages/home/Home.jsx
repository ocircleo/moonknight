import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";

import Property from "./homeCompo/Property";



import Reviews from "./homeCompo/Reviews";
<<<<<<< HEAD

// import Reviews from "./homeCompo/Reviews";

=======
import Statistics from "./homeCompo/Statistics";
import Banner from "./homeCompo/Banner";
import WorkSection from "./homeCompo/WorkSection";
>>>>>>> 5e4b38f46b27cfb5c891e3471140810e60ffd34a
const Home = () => {
  const { name } = useContext(dataContext);

  return (
    <div className="container mx-auto mt-8">

<<<<<<< HEAD
=======
      <div className="mb-5">
        <Banner></Banner>
      </div>
      <div className="mb-5">
        <WorkSection></WorkSection>
      </div>

      <div className="mb-5">
        <Statistics></Statistics>
      </div>
>>>>>>> 5e4b38f46b27cfb5c891e3471140810e60ffd34a
      <h2 className="text-2xl ps-2 font-semibold my-3">Our Top Reviews</h2>
      <div className="mb-5">
        {/* <Reviews></Reviews> */}
        <Reviews></Reviews>
        <Property></Property>





      </div>
    </div>
  );
};

export default Home;
