import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Authcontext } from "../../private/provider/Provider";


const Adminhome = () => {
    const { user } = useContext(Authcontext)
    return (
        <div className="grid col-span-6 w-full font-semibold">
            <div className=" col-span-6 bg-[#6A94FF] md:rounded-s-xl ">
                <div className="flex flex-col justify-center items-center text-center h-96 gap-y-3 text-white font-serif">
                    <img className="rounded-full h-28 w-28 items-center justify-center" src={user.photoURL} alt="" />
                    <h2 className="pt-2">Md.Mosarof </h2>
                    <h2>Status : user (verified)</h2>
                    <div className='text-white fill-slate-50 '>
                        <a href="#_" className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">Edit</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 col-span-6 bg-white shadow-sm px-12 py-5">
                <h2 className=" font-serif p">Information</h2>
                <hr />
                <div className="flex justify-between my-7  font-serif">
                    <div>
                        <h2>Email</h2>
                        <p>mosarof@gmail.com</p>
                    </div>
                    <div>
                        <h2>Phone</h2>
                        <p>01946875729</p>
                    </div>
                </div>

                <h2 className=" font-serif">Projects</h2>
                <hr />
                <div className="flex justify-between my-7  font-serif">
                    <div>
                        <h2>Recent</h2>
                        <p>Sam Disuja</p>
                    </div>
                    <div>
                        <h2>Most Viewed</h2>
                        <p>01946875729</p>
                    </div>
                </div>

                <div className='flex gap-5 py-4 text-[#6A94FF]'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>

                </div>

            </div>
        </div>


    );
};

export default Adminhome;