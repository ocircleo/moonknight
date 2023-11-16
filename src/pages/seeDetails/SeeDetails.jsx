import ImageSlider from "./ImageSlider";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import SeeDetailsCollaps from "./SeeDetailsCollaps";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";


const SeeDetails = () => {
  const { addToWishList, userDB } = useContext(Authcontext)
  const [wish, setWish] = useState(false)
  const loader = useLoaderData()
  const bookProperty = (e) => {
    e.preventDefault();
    let form = e.target;
    let name, email, date, message;
    name = form.name.value;
    email = form.email.value;
    date = form.date.value;
    message = form.message.value;
    const data = {
      userName: name,
      userEmail: email,
      hostEmail: loader?.hostEmail,
      text: message,
      date: date,
    }
    toast('sending please, wait')
    fetch('https://moonknight-backend.vercel.app/user/sendMessage', {
      method: "POST",
      headers: { 'content-type': "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
      if (data.insertedId) {
        toast('Message Sent');
      }
    }).catch(err => toast(err.message))

  }
  const wishList = () => {
    if (loader._id) {
      addToWishList(loader._id)
      setWish(true);
    } else {
      toast('login to add to wishlist')
    }
  }
  const share = () => {
    let location = window.location
    navigator.clipboard.writeText(location.href)
    toast('linked copied');
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (userDB.wishlist) {
      userDB.wishlist.indexOf(loader._id) ? setWish(true) : ""
    }
  }, [userDB.wishlist, loader._id])
  return (
    <div className="bg-gray-100 pb-4">
      <div className="container-lg w-11/12 mx-auto ">
        <div className="md:flex md:justify-between pb-8 w-full md:w-5/6 pt-8 mx-auto">
          <section>
            <h1 className="text-3xl font-bold text-slate-700">{loader.title}</h1>
            <p className="flex text-gray-500 pt-6"> <CiLocationOn className="pt-1 h-5 w-5" /> {loader.region},{loader.city}</p>
          </section>
          <section>
            <h1 className="text-3xl font-bold text-slate-700 md:text-right">$ {loader.price}</h1>
            <div className="md:flex gap-4 pt-8 ">
              <button onClick={share} className="btn hover:bg-indigo-400 bg-white hover:text-white"><AiOutlineShareAlt />Share</button>

              <button onClick={wishList} className={` btn  bg-white hover:text-white ${wish ? "btn-disabled" : "hover:bg-indigo-400"}`}><AiOutlineHeart />Wishlist</button>
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

                  className="w-full py-4 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-black bg-gray-200"
                >
                  Book Property
                </button>
              </div>
              <div className="pt-4">

                <div className="w-full  shadow sm:rounded-md bg-white">
                  <div>
                    <div className="mt-5 md:mt-0 ">
                      <form onSubmit={bookProperty}>
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
                                  name="name"
                                  defaultValue={userDB?.name}
                                  placeholder="Enter Your Name"
                                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-12 focus:outline-none"
                                  required
                                />
                              </div>

                              <div className="col-span-12 sm:col-span-12">
                                <label className="block text-sm font-medium text-gray-700">
                                  Email address
                                </label>
                                <input
                                  type="text"
                                  name="email"
                                  defaultValue={userDB?.email}
                                  placeholder="Enter Your Email"
                                  required
                                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="capitalize font-semibold"> date</label>
                                <input type="date" name="date" required />
                              </div>
                              <div className="col-span-12">
                                <label className="text-gray-600">Description</label>
                                <textarea
                                  name="message"
                                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-40 focus:outline-none"
                                  placeholder="Comments" required
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
            <section className="pt-20">
              <div className="w-full  shadow sm:rounded-md bg-white">
                <h1 className="text-xl font-semibold p-4">Owner Details</h1>
                <hr className="pl-6 pe-6" />
                <div className="p-4">
                  <h4 className="text-base font-medium">Owner Name : Mehedi Hassan Niloy</h4>
                  <h4 className="text-base font-medium pt-3 pb-3">Owner Email : {loader.hostEmail}</h4>
                </div>
              </div>
            </section>

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
      </div>

    </div>
  );
};

export default SeeDetails;
