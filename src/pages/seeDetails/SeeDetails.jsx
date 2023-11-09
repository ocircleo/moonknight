import ImageSlider from "./ImageSlider";
import SeeDatailCollaps from "./SeeDatailCollaps";
import SimilarListing from "./SimilarListing";

const SeeDetails = () => {
  return (
    <div className="container-lg w-11/12 mx-auto">
      <div className=" grid grid-cols-2">
      
        <div className="p-4">
          <h2 className="font-semibold text-3xl py-2">
            Modern Apartment in the City CenterImage
          </h2>
          <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
        </div>

        <div className="p-4 flex items-center justify-center md:justify-end">
          <div>
            <h3 className="font-semibold text-2xl pb-2">$4,000</h3>
            <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-gray-600 bg-gray-200 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Wishlist
                        </button>
          </div>
        </div>
      </div>
      <div className="container-sm mx-auto md:w-6/12">
       
        <ImageSlider />
        
      
      </div>
      
      {/* main part start here */}

      <div className="container mx-auto  max-w-ful">
        <div className="lg:w-8/12 w-full lg:float-left">
          {/* <!-- Left div (70% width on large screens, full width on smaller screens) --> */}
          <div className="min-h-full max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full p-4">
            
            <SeeDatailCollaps></SeeDatailCollaps>
           
          </div>
        </div>
        <div className="lg:w-4/12 w-full lg:float-right">
          {/* left side contact page */}
          <div className=" min-h-full max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full p-4">
            {/* left side button  */}
            <div>
              <button
                type="submit"
                className="w-full py-4 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book Property
              </button>
            </div>

            <div className="w-full  shadow sm:rounded-md">
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
                              className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-12"
                            />
                          </div>

                          <div className="col-span-12 sm:col-span-12">
                            <label className="block text-sm font-medium text-gray-700">
                              Phone
                            </label>
                            <input
                              type="number"
                              name="last_name"
                              id="last_name"
                              placeholder="Enter Your Number"
                              className="focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12"
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
                              className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12"
                            />
                          </div>

                          <div className="col-span-12">
                            <label className="text-gray-600">Description</label>
                            <textarea
                              name="message"
                              className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-40"
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

                      <div className=" flex justify-between px-4 py-3 bg-gray-50 text-left sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-gray-600 bg-gray-200 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Call Us
                        </button>

                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-gray-600 bg-gray-200 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Whatsapp
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
      <SimilarListing  />

    </div>
  );
};

export default SeeDetails;
