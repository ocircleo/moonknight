import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";
import Reviews from "./homeCompo/Reviews";
import Statistics from "./homeCompo/Statistics";
<<<<<<< HEAD
// <<<<<<< HEAD
// <<<<<<< HEAD

import WorkSection from "./homeCompo/WorkSection";
import Banner from "./homeCompo/Banner";
// =======
// import Banner from "./homeCompo/Banner";
// import WorkSection from "./homeCompo/WorkSection";
import Property from "./homeCompo/Property";
// >>>>>>> e4326f253d0d7eaead89ed975b828ce38145b554
// =======
// import Banner from "./homeCompo/Banner";
// import WorkSection from "./homeCompo/WorkSection";
// import Property from "./homeCompo/Property";
// >>>>>>> f212567304bb130eda8ae5f4357b1da060daf321
=======
import Banner from "./homeCompo/Banner";
import Property from "./homeCompo/Property";
import Card from "../../shared/Card";
import Sales from "./homeCompo/Sales";
import Cities from "./homeCompo/Cities";
import WorkSection from "./homeCompo/WorkSection";
import Rent from "./homeCompo/Rent";
import Faq from "./homeCompo/Faq";
//import Aos from 'aos';
//import 'aos/dist/aos.css'

>>>>>>> 4d87507d1bbb043dcfeb5f3e791dc93f52302f24
const Home = () => {

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

      <div className="mb-5" data-aos="fade-down" data-aos-anchor-placement="top-center">
        <WorkSection></WorkSection>
      </div>

      <div className="mb-5">
<<<<<<< HEAD
{/* <<<<<<< HEAD */}
        <Banner></Banner>
      </div>
      <div className="mb-5">
{/* <<<<<<< HEAD */}
       
      <WorkSection></WorkSection>
=======
        <Property></Property>
{/* >>>>>>> e4326f253d0d7eaead89ed975b828ce38145b554 */}
=======
        <Property></Property>
{/* >>>>>>> f212567304bb130eda8ae5f4357b1da060daf321 */}
=======
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
>>>>>>> 4d87507d1bbb043dcfeb5f3e791dc93f52302f24
      </div>

      <div className="mb-5">
        <Statistics></Statistics>
      </div>
      <h2 className="text-2xl ps-2 font-semibold my-3">What people says about us</h2>
      <div className="mb-5">
        <Reviews></Reviews>
      </div>
      <div className="mb-5">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
