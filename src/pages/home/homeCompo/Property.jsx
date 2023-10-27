import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Property = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="bg-[#1E1D85] md:flex text-center justify-center items-center justify-center">
            <div className="text-white p-4">
        <h2 className="text-4xl my-2 font-bold">
          Explore by <br /> Property Type
        </h2>
        <p className="text-smal">
          OUR PURPOSE IS TO HELP PEOPLE REACH THEIR POTENTIAL IN REAL ESTATE.
        </p>
        <div className="">
          <FontAwesomeIcon className="m-4 text-4xl" icon={faCircleArrowLeft} />
          <FontAwesomeIcon className="m-4 text-4xl" icon={faCircleArrowRight} />
        </div>
      </div>
      <Carousel responsive={responsive}>
        <div className="p-10">
          <div className="card h-[300px] max:w-[250px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/src/assets/images/Property1 (2).svg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Houses</h2>
              <p>30 Properties</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="card h-[300px] max:w-[250px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/src/assets/images/Property1 (2).svg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Houses</h2>
              <p>30 Properties</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="card h-[300px] max:w-[250px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/src/assets/images/Property1 (2).svg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Houses</h2>
              <p>30 Properties</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="card h-[300px] max:max:w-[250px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/src/assets/images/Property1 (2).svg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Houses</h2>
              <p>30 Properties</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="card h-[300px] max:w-[250px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/src/assets/images/Property1 (2).svg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Houses</h2>
              <p>30 Properties</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="card h-[300px] max:w-[250px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/src/assets/images/Property1 (2).svg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Houses</h2>
              <p>30 Properties</p>
            </div>
          </div>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Property;
