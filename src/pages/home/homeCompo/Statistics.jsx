import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistics = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='grid lg:grid-cols-4 text-center bg-[#1E1D85] md:px-12 md:py-12' data-aos="fade-down" data-aos-anchor-placement="top-center">
                <div className='items-center rounded-lg my-4 lg:my-12 py-10 mx-5  hover:bg-[#653cef] ease-in-out duration-1000 '>

                    <img className='w-4/12 mx-auto' src="statistics/counter-icon-1 (1).svg" alt="" />

                    <div className='mt-5'>
                        <h1 className='text-white text-5xl mb-2 font-bold'>
                            {counterOn && <CountUp start={0} end={50} duration={2} delay={0}></CountUp>}
                            K
                        </h1>
                        <p className='text-white text-xl font-bold'>Listings Added</p>
                    </div>
                </div>
                <div className='items-center rounded-lg my-4  lg:my-12 py-10 mx-5  hover:bg-[#653cef] ease-in-out duration-1000 '>

                    <img className='w-4/12 mx-auto' src="statistics/counter-icon-2.svg" alt="" />

                    <div className='mt-5'>
                        <h1 className='text-white text-5xl mb-2 font-bold'>
                            {counterOn && <CountUp start={0} end={3000} duration={2} delay={0}></CountUp>}
                            +
                        </h1>
                        <p className='text-white text-xl font-bold'>Agents Listed</p>
                    </div>
                </div>
                <div className='items-center rounded-lg my-4 lg:my-12 py-10 mx-5  hover:bg-[#653cef] ease-in-out duration-1000 '>

                    <img className='w-4/12 mx-auto' src="statistics/counter-icon-3.svg" alt="" />

                    <div className='mt-5'>
                        <h1 className='text-white text-5xl mb-2 font-bold'>
                            {counterOn && <CountUp start={0} end={2000} duration={2} delay={0}></CountUp>}
                            +
                        </h1>
                        <p className='text-white text-xl font-bold'>Sales Complited</p></div>
                </div>
                <div className='items-center rounded-lg my-4 lg:my-12 py-10 mx-5  hover:bg-[#653cef] ease-in-out duration-1000 '>

                    <img className='w-4/12 mx-auto' src="statistics/counter-icon-4.svg" alt="" />

                    <div className='mt-5'>
                        <h1 className='text-white text-5xl mb-2 font-bold'>
                            {counterOn && <CountUp start={0} end={5000} duration={2} delay={0}></CountUp>}
                            +
                        </h1>
                        <p className='text-white text-xl font-bold'>Users</p>
                    </div>
                </div>

            </div>
        </ScrollTrigger>
    );
};

export default Statistics;