import React from 'react';

const Faq = () => {
    return (
        <div className="bg-[#F7F6FF] overflow-hidden md:px-12 md:py-12" data-aos="fade-down" data-aos-anchor-placement="top-center">
            <div className="md:grid md:p-5 cols-1 md:grid-cols-3 gap-4 justify-items-center items-center p-5">
                <div className=" md:w-full text-center md:text-left">
                    <img className='rounded-xl' src="https://dreamsestate.dreamstechnologies.com/html/assets/img/faq-img.jpg" alt="" />
                </div>
                <div className="col-span-2">
                    <div>
                        <h2 className="text-2xl  md:text-4xl  font-bold">
                            Frequently Asked Questions
                        </h2>
                        <div className="my-2">
                            <span className="w-4 h-1.5 bg-[#FD3358] inline-block rounded-2xl mr-1.5"></span>
                            <span className="w-12 h-1.5 bg-[#FD3358] inline-block rounded-2xl"></span>
                            <span></span>
                        </div>
                        <p className="text-lg font-semibold text-slate-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem debitis odit ab nostrum provident unde officiis ex illum est totam nobis perferendis, eum molestias temporibus veniam excepturi aliquam recusandae exercitationem!
                        </p>
                    </div>

                    




                    <div className='mt-6'>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                               1. What are the costs to buy a house?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white  rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                               2. What are the steps to sell a house?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                3. Do you have loan consultants?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                4. When will the project be completed?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                               5. What are the steps to rent a house?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                      
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Faq;