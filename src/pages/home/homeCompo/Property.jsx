import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Property = () => {
    const slider = useRef(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    }

    Aos.init({
        offset: 200,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 100,
      });



    return (
        <div className="bg-[#1E1D85] overflow-hidden md:px-12 md:py-12">
            <div className="md:grid md:p-5 cols-1 md:grid-cols-3 gap-4">
                <div className=" md:w-9/12  text-center md:text-left">
                    <div className="text-white my-8">
                        <h2 className="text-2xl  md:text-4xl  font-bold">
                            Explore by Property Type
                        </h2>
                        <div className="my-2">
                            <span className="w-4 h-1.5 bg-[#FD3358] inline-block rounded-2xl mr-1.5"></span>
                            <span className="w-12 h-1.5 bg-[#FD3358] inline-block rounded-2xl"></span>
                            <span></span>
                        </div>
                        <p className="text-small">
                            OUR PURPOSE IS TO HELP PEOPLE REACH THEIR POTENTIAL IN REAL ESTATE.
                        </p>
                        <div className="mt-4">
                            <FontAwesomeIcon onClick={() => slider?.current?.slickPrev()} className="m-2 ms-0 text-4xl" icon={faCircleArrowLeft} />
                            <FontAwesomeIcon onClick={() => slider?.current?.slickNext()} className="m-2 text-4xl" icon={faCircleArrowRight} />
                        </div>
                    </div>
                </div>
                <div className="col-span-2" data-aos="fade-down" data-aos-anchor-placement="top-center">
                    <Slider ref={slider} {...settings}>

                        <div className="p-5">
                            <div className="card h-[300px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="/images/icon/Property1 (2).svg"
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
                        <div className="p-5">
                            <div className="card h-[300px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="/images/icon/Property2 (3).svg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Offices</h2>
                                    <p>30 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="card h-[300px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="/images/icon/Property2 (3).svg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Apartment</h2>
                                    <p>30 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="card h-[300px] max:max:w-[250px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="/images/icon/Property2 (3).svg"
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
                        <div className="p-5">
                            <div className="card h-[300px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="/images/icon/Property2 (3).svg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Offices</h2>
                                    <p>30 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="card h-[300px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="/images/icon/Property2 (3).svg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Apartment</h2>
                                    <p>30 Properties</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>



            </div>


        </div>
    );
};

export default Property;
