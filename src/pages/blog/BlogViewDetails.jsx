
import { useSpring, animated } from 'react-spring';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import usePageTitle from '../../hooks/PageTitleHook';

const BlogViewDetails = () => {

    usePageTitle('Too late | blog details');

    const navigate = useNavigate()
    const data = useLoaderData();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
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
        <div className='w-full md:w-5/6 mx-auto '>
            <div className="py-3 w-full rounded-md mx-auto  flex justify-center items-center text-center text-white opacity bg-[#47446A]">
                <animated.h2 style={scaleIn} className=" text-2xl px-2 font-bold ">
                    {data.title}
                </animated.h2>
            </div>

            {/* card */}

            <div className="card my-8 w-full  h-[700px] mx-auto  bg-base-100 shadow-xl">
                <figure><img className=' object-cover hover:scale-125 transition duration-500 cursor-pointer w-full' src={data.imgUrl} alt="Shoes" /></figure>
                <div className="card-body bg-gray-50 ">

                    <h2 className="text-2xl  font-black pb-3 flex items-center justify-between">
                        <h2 className='font-bold text-lg md:text-xl'>{data.title}</h2>
                        <span className='text-sm'>{formattedTime}</span>
                    </h2>
                    <p className='text-base md:text-lg'>{data.description}</p>


                    <button onClick={() => navigate(-1)} className='self-start bg-indigo-400 py-1 px-3 rounded font-semibold text-white'> Go back</button>

                </div>
            </div>
        </div>
    );
};

export default BlogViewDetails;

