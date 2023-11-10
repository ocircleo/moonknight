


import { useSpring, animated } from 'react-spring';
import { Link, useLoaderData } from 'react-router-dom';

const BlogViewDetails = () => {
    const data = useLoaderData();
    console.log(data)

    const scaleIn = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 120, friction: 14 }, // Adjust the tension and friction as needed
    });

    const formattedTime = new Date(data.time).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return (
        <div>
            <div className="h-[200px] w-[90%] rounded-md mx-auto  flex justify-center items-center text-center text-white opacity bg-[#47446A]">
                <animated.h2 style={scaleIn} className="md:text-4xl text-3xl px-2 font-bold font-serif">
                    {data.title}
                </animated.h2>
            </div>

            {/* card */}

            <div className="card my-8 w-[80%] font-serif h-[700px] mx-auto  bg-base-100 shadow-xl">
                <figure><img className=' object-cover hover:scale-125 transition duration-500 cursor-pointer' src={data.imgUrl} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="text-2xl font-black pb-3 flex items-center justify-between">
                        <h2 className='font-bold'>{data.title}</h2>
                        <span className='text-sm'>{formattedTime}</span>
                    </h2>
                    <p className='text-lg'>{data.description}</p>

                    <div className="card-actions md:justify-end justify-center pt-2 ">
                        <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <Link to='/blog'> <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span></Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogViewDetails;

