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
                        The completion deadline for our innovative and sustainable building project, TolaTE Building,
                         is set for [insert specific date]. We are committed to delivering a cutting-edge structure that 
                         not only meets industry standards but also exceeds expectations in terms of efficiency and environmental sustainability.
                         Stay tuned for updates as we work diligently to bring TolaTE Building to life         </p>
                    </div>

                    




                    <div className='mt-6'>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                               1. What are the costs to buy a house?
                            </div>
                            <div className="collapse-content">
                                <p>Purchase Price: The actual cost of the house.
Down Payment: A percentage of the purchase price paid upfront.
Closing Costs: Fees for services and expenses associated with finalizing the sale.
Property Taxes and Insurance: Ongoing costs associated with homeownership.
Home Inspection and Appraisal Fees: Costs for evaluating the condition and value of the property.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white  rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                               2. What are the steps to sell a house?
                            </div>
                            <div className="collapse-content">
                                <p>Prepare Your Home: Make necessary repairs and improvements.
Set a Price: Determine a competitive and realistic selling price.
Market Your Property: Use various channels to advertise your home.
Negotiate Offers: Work with potential buyers to reach a mutually agreeable price.
Complete Required Paperwork: Sign necessary documents for the sale.
Close the Deal: Transfer ownership and receive payment.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                3. Do you have loan consultants?
                            </div>
                            <div className="collapse-content">
                                <p> Yes, loan consultants are professionals who assist individuals in understanding and securing loans. 
                                    They can provide advice on different types of loans, 
                                    help with the application process, and guide borrowers through the financing process.                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                4. When will the project be completed?
                            </div>
                            <div className="collapse-content">
                                <p> The completion date of a construction project depends on various
                                     factors such as the size of the project, weather conditions, and unforeseen challenges. It is essential to work 
                                    closely with the project manager or contractor to get accurate timelines and updates.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                               5. What are the steps to rent a house?
                            </div>
                            <div className="collapse-content">
                                <p> Search for Rental Properties: Look for properties that meet your criteria.
Contact Landlords or Property Managers: Inquire about availability, terms, and conditions.
View Properties: Schedule visits to potential rental units.
Submit Rental Application: Provide required documentation and information.
Review Lease Agreement: Understand terms and conditions before signing.
Pay Security Deposit and Rent: Secure the property by paying the required upfront costs.
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