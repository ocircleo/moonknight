import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineAttachEmail, MdOutlineLocationOn } from "react-icons/md";

const ContactDetails = () => {
    return (
        <div className="md:pl-24 lg:pl-24 md:pe-24 lg:pe-24 p-6">
            <div className="md:flex lg:flex gap-6">
                <div className="lg:w-6/12 md:w-6/12 shadow overflow-hidden sm:rounded-md">
                    <h1 className="text-black text-2xl font-bold  p-6">Get In Touch</h1>
                    <hr className="pl-6 pe-6" />
                    <div>
                        <div className="mt-5 md:mt-0 ">
                            <form action="#" method="POST">
                                <div>
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-12 gap-4 ">
                                            <div className="col-span-12 sm:col-span-12">
                                                <label className="block text-sm font-medium text-gray-700"> Name</label>
                                                <input type="text" name="first_name" id="first_name" placeholder="Enter Your Name" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-12" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                                <input type="number" name="last_name" id="last_name" placeholder="Enter Your Number" className="focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label className="block text-sm font-medium text-gray-700">Email address</label>
                                                <input type="text" name="email_address" id="email_address" placeholder="Enter Your Email" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label className="block text-sm font-medium text-gray-700">City</label>
                                                <select id="country" name="country" className="mt-1 block w-6/12 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 sm:text-sm">
                                                    <option>Select</option>
                                                    <option>Dhaka</option>
                                                    <option>Cumilla</option>
                                                    <option>Gazipur</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                                <input type="text" name="street_address" id="street_address" placeholder="Enter Your Subject" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12" />
                                            </div>

                                            <div className="col-span-12">
                                                <label className="text-gray-600">Description</label>
                                                <textarea name="message" className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-80"
                                                    placeholder="Comments"
                                                ></textarea>
                                            </div>
                                          
                                        </div>
                                    </div>

                                    <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit Enquiry
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="">
                    <h1 className="text-black text-2xl font-bold pb-6">Contact Details</h1>
                    <section>
                        <div className="flex gap-8">
                         <span className="shadow overflow-hidden sm:rounded-md p-8 text-indigo-800 text-2xl font-bold"><BsTelephoneOutbound/></span>
                           <div>
                            <h2 className="text-xl font-bold pt-3">Call Us At</h2>
                            <p className="text-gray-400 pt-3">+1 63980 98393, +1 63980 98393</p>
                           </div>
                        </div>
                        <div className="flex gap-8 pt-6">
                         <span className="shadow overflow-hidden sm:rounded-md p-8 text-indigo-800 text-2xl font-bold"><MdOutlineAttachEmail/></span>
                           <div>
                            <h2 className="text-xl font-bold pt-3">Email Us</h2>
                            <p className="text-gray-400 pt-3">info@example.com</p>
                           </div>
                        </div>
                        <div className="flex gap-8 pt-6">
                         <span className="shadow overflow-hidden sm:rounded-md p-8 text-indigo-700 text-2xl font-bold"><MdOutlineLocationOn/></span>
                           <div>
                            <h2 className="text-xl font-bold pt-3">Location</h2>
                            <p className="text-gray-400 pt-2">Jl. Surabaya Jaya, No.10, Surabaya</p>
                            <p className="text-gray-400">Dhaka</p>
                           </div>
                        </div>
                        
                    </section>

                    <div className="pt-14">
                        <h1 className="text-black text-3xl font-bold pb-12">Find Us On</h1>
                        <span><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.604248453179!2d90.38425380000001!3d23.750907299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698685739444!5m2!1sen!2sbd" 
                        className="lg:w-[700px] md:w-[700px] lg:h-[500px] md:h-[500px] w-full"  allowfullscreen="" loading="lazy"></iframe></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;