import gif from "../../assets/images/BeHost/Welcome.gif"
import '../beAhost/beHost.css'

const BeAHost = () => {
    return (
        <div>
            <div className="lg:pe-30 md:pe-30 pe-6 lg:pl-30 md:pl-30 pl-6 lg:flex md:flex gap-6 p-6">
                <section className="lg:pt-20">
                    <img className="w-[600px] h-[500px]" src={gif} alt="" />
                    <div>
                    </div>
                </section>
                <section>

                    <div className="mt-5 md:mt-0 post-form lg:w-[800px]">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-sky-500 ">New Rent House Add</h1>
                            <span className="w-16 h-1.5 bg-sky-600 inline-block rounded-2xl mr-1.5"></span>
                            <span className="w-44 h-1.5 bg-sky-600 inline-block rounded-2xl"></span>
                        </div>
                        <form action="#" method="POST">
                            <div className=" ">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="">
                                        <div className="lg:flex md:flex gap-8">
                                            <div className=" border-b border-sky-500 py-2">
                                                <label className="block text-sm font-medium text-gray-700 pb-2">City</label>
                                                <input type="text" name="city" id="city" placeholder="Enter City" className="appearance-none border-none lg:w-[350px] w-full text-gray-700 mr-3 py-1 px-2 leading-tight bg-slate-100 focus:bg-white focus:outline-none h-14" />
                                            </div>

                                            <div className=" border-b border-sky-500 py-2 pt-6">
                                                <label className="block text-sm font-medium text-gray-700 pb-2">Rooms</label>
                                                <input type="number" name="room" id="room" placeholder="How Many Rooms" className="appearance-none border-none lg:w-[350px] w-full text-gray-700 mr-3 py-1 px-2 leading-tight bg-slate-100 focus:bg-white focus:outline-none h-14 " />
                                            </div>
                                        </div>

                                        <div>
                                            <div className=" border-b border-sky-500 py-2">
                                                <label className="block text-sm font-medium text-gray-700 pb-2">Aditional Location</label>
                                                <input type="text" name="location" id="location" placeholder="Enter Aditional Location" className="appearance-none border-none lg:w-full w-full text-gray-700 mr-3 py-1 px-2 leading-tight bg-slate-100 focus:bg-white focus:outline-none h-14" />
                                            </div>
                                        </div>

                                        <div className="lg:flex md:flex gap-8 pt-6">
                                            <div className=" border-b border-sky-500 py-2">
                                                <label className="block text-sm font-medium text-gray-700 pb-2">Price</label>
                                                <input type="number" name="price" id="price" placeholder="How Many Price" className="appearance-none border-none lg:w-[350px] w-full text-gray-700 mr-3 py-1 px-2 leading-tight bg-slate-100 focus:bg-white focus:outline-none h-14" />
                                            </div>
                                            <div className=" border-b border-sky-500">
                                                <label className="block text-sm font-medium text-gray-700 pb-2">Maximum Capacity Of People</label>
                                                <input type="number" name="people" id="people" placeholder="How Many People" className="appearance-none border-none lg:w-[350px] w-full text-gray-700 mr-3 py-1 px-2 leading-tight bg-slate-100 focus:bg-white focus:outline-none h-14 " />
                                            </div>
                                        </div>
                                        <div className="border-b border-sky-500 pt-6">
                                            <label className="block text-sm font-medium text-gray-700 pb-2">Details</label>
                                            <textarea name="details" className="appearance-none border-none lg:w-full w-full text-gray-700 mr-3 py-1 px-2 leading-tight bg-slate-100 focus:bg-white focus:outline-none h-60"
                                                placeholder="Enter Details"
                                            ></textarea>
                                        </div>

                                    </div>
                                    <div className="flex justify-between pt-6">
                                        <div className=" border-b border-sky-500">
                                            <input type="file" name="image" id="file" multiple />
                                            <label for="file" className="btn-2">Upload Image</label>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900 h-16 pt-5 w-40" style={{ borderRadius: "40px" }}>
                                                Upload Home
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </section>
            </div>

        </div>
    );
};

export default BeAHost;