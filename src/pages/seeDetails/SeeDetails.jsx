import ImageSlider from "./ImageSlider";

import SimilarListing from "./SimilarListing";
import { CiLocationOn } from "react-icons/ci";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import SeeDetailsCollaps from "./SeeDetailsCollaps";
import { useLoaderData } from "react-router-dom";

const SeeDetails = () => {
  const loader = useLoaderData()
  console.log(loader)
  return (
    <div className="bg-gray-100 pt-3">
      <div className="container-lg w-11/12 mx-auto ">
        <div className="md:flex md:justify-between pb-8 w-full md:w-5/6 mx-auto">
          <section>
            <h1 className="text-3xl font-bold text-slate-700">{loader.title}</h1>
            <p className="flex text-gray-500 pt-6"> <CiLocationOn className="pt-1 h-5 w-5" /> {loader.region},{loader.city}</p>
          </section>
          <section>
            <h1 className="text-3xl font-bold text-slate-700">$ {loader.price}</h1>
            <div className="flex gap-4 pt-8">
              {/* <button className="btn hover:bg-indigo-400 bg-white hover:text-white"><AiOutlineShareAlt />Share</button>
              <button className="btn hover:bg-indigo-400 bg-white hover:text-white"><BiGitCompare />Add to Compare</button>
              <button className="btn hover:bg-indigo-400 bg-white hover:text-white"><AiOutlineHeart />Wishlist</button> */}
            </div>
          </section>
        </div>
        <hr />
        <div className="grid grid-cols-6 m-6 gap-4 max-w-screen-xl sm:px-4 md:px-6 mx-auto">
          <div className="lg:col-span-4 col-span-6 ">
            <div>
              <ImageSlider data={loader.images} />
            </div>
            <section>
              <div className="min-h-full max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full">

                <SeeDetailsCollaps data={loader}></SeeDetailsCollaps>

              </div>
            </section>
          </div>

          {/*leftside  */}
          <div className="lg:col-span-2 col-span-6 py-2 px-2">
            <div>
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Book Property
                </button>
              </div>
              <div className="pt-4">

                <div className="w-full  shadow sm:rounded-md bg-white">
                  <div>
                    <div className="mt-5 md:mt-0 ">
                      <form action="#" method="POST">
                        <p className="text-xl font-semibold p-4">Request info</p>

                        <hr className="pl-6 pe-6" />
                        <div>
                          <div className="px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-12 gap-4 ">
                              <div className="col-span-12 sm:col-span-12">
                                <label className="block text-sm font-medium text-gray-700">
                                  {" "}
                                  Name
                                </label>
                                <input
                                  type="text"
                                  name="first_name"
                                  id="first_name"
                                  placeholder="Enter Your Name"
                                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-12 focus:outline-none"
                                />
                              </div>

                              <div className="col-span-12 sm:col-span-12">
                                <label className="block text-sm font-medium text-gray-700">
                                  Email address
                                </label>
                                <input
                                  type="text"
                                  name="email_address"
                                  id="email_address"
                                  placeholder="Enter Your Email"
                                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 focus:outline-none"
                                />
                              </div>

                              <div className="col-span-12">
                                <label className="text-gray-600">Description</label>
                                <textarea
                                  name="message"
                                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-40 focus:outline-none"
                                  placeholder="Comments"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-3 bg-gray-50  sm:px-6">
                            <button
                              type="submit"
                              className="w-full py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Send Email
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* main part start here */}

        <div className="container mx-auto  max-w-ful">
          <div className="lg:w-8/12 w-full lg:float-left">
            {/* <!-- Left div (70% width on large screens, full width on smaller screens) --> */}

          </div>
          <div className="lg:w-4/12 w-full lg:float-right">
            {/* left side contact page */}
            <div className=" min-h-full max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full p-4">

            </div>
          </div>
        </div>
      </div></div>
  );
};

export default SeeDetails;
