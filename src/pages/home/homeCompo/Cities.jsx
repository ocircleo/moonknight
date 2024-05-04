import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { dataContext } from '../../../private/provider/Data_Provider';
import { useNavigate } from 'react-router-dom';
const Cities = () => {
    let cities = [{ city: "Dhaka", properties: '5', image: "/images/city/dhaka.jpeg" }, { city: "Barisal", properties: '7', image: "/images/city/barishal.jpg" }, { city: "Jessore", properties: '4', image: "/images/city/jessore_result.png" }, { city: "Cumilla", properties: '6', image: "/images/city/cumilla.jpg" }, { city: "Bogura", properties: '5', image: "/images/city/bogura.jpg" }, { city: "Rongpur", properties: "6", image: "/images/city/rangpur.jpg" }]
    const { setSearchData } = useContext(dataContext)
    const navigate = useNavigate()
    const goto = (text) => {
        setSearchData(text)
        navigate('/search')
    }
    return (
        <div>
            <div className=' md:px-12 md:py-12'>
                <div className="text-center md:px-12 mb-10 ">
                    <h1 className="text-4xl font-bold mb-3">Cities With Listing</h1>
                    <span className="w-4 h-1.5 bg-[#FD3358] inline-block rounded-2xl mr-1.5"></span>
                    <span className="w-12 h-1.5 bg-[#FD3358] inline-block rounded-2xl"></span>
                    <span></span>
                    <p className="text-lg text-slate-400 pt-4">Destinations we love the most</p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-12 p-5' data-aos="fade-down" data-aos-anchor-placement="top-center">

                    {
                        cities.map(ele => {
                            return (
                                <div key={ele.properties} className="w-auto shadow-xl h-60 bg-gray-300 relative overflow-hidden">
                                    <div className='hover:scale-110 h-full w-full duration-200'>
                                        <img src={ele.image} alt="" className='duration-100 absolute hover:scale-105 h-full w-full object-cover rounded z-10 to' />
                                        <div className='h-full w-full rounded bg-gray-900/50 absolute z-20'></div>
                                    </div>
                                    <div className='absolute bottom-5 left-8 z-30'>
                                        <h1 className='text-white text-2xl font-bold'>{ele.city}</h1>
                                        <p className='text-white text-md font-bold'>{ele.properties} properties</p>
                                    </div>
                                    <div className='absolute  right-8 bottom-5 z-30'>
                                        <button onClick={() => goto(ele.city)} className="btn btn-circle bg-[#6C60FE] border-none">
                                            <FontAwesomeIcon className=" text-black text-lg" icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Cities;