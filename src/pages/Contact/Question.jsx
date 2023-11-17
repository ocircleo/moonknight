import '../Contact/Question.css'
import line from "../../assets/images/ContactPage/line-bg.png";
import { animated, useSpring } from 'react-spring';


const Question = () => {
    const scaleIn = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 120, friction: 14 }, // Adjust the tension and friction as needed
    });
    return (
        <div>
            {/* <div className="question-Background md:ml-36 md:me-36 rounded-lg">
                <div className=" bg-indigo-950 opacity-80">
                    <div className="flex justify-center items-center p-6">
                        <div className="">
                            <h1 className="text-5xl font-bold text-white">Frequently Ask Question</h1>
                        </div>
                    </div>
                </div>
            </div> */}
          <div className='md:me-36 md:ml-36'>
          <div className="py-3 w-full rounded-md mx-auto  flex justify-center items-center text-center text-white opacity bg-[#47446A]">
                <animated.h2 style={scaleIn} className=" text-2xl px-2 font-bold ">
                Frequently Ask Question
                </animated.h2>
            </div>
             
            <div>
                <img src={line} alt="" />
            </div>
          </div>
           

            

            {/* Faq design start */}

            <div className=' '>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-12 md:py-12 p-3">
                    <div className=''>
                        <div className=" p-3 bg-[#F9F9F9] rounded-none mb-4">
                            
                            <div className="text-lg font-medium">
                                1. What are the costs to buy a house?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> Did you know that 93% of homebuyers shop online for properties? This means 
                                your real estate listing description matters more than ever. A great listing is written to 
                                cast the property in its best light while making you look professional to both your client and potential buyers.</p>
                            </div>
                        </div>
                        <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            
                            <div className="text-lg font-medium">
                                3. Do you have loan consultants?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> This may seem like a no-brainer, but your
                                 real estate listing description should be accurate. If the house is barely 900 square feet,
                                  writing that the space is “sprawling” is dishonest. When you say a home is in “excellent condition”
                                 and there is water damage throughout the house and the back deck is rotting,
                                    </p>
                            </div>
                        </div>
                        <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            
                            <div className=" text-lg font-medium">
                              5. What are the steps to rent a house?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> Be descriptive, but don’t go over the top with your praise.
                                 Remember, people can tell when you’re trying too hard. For example, we all know “cozy” is code for “very small.” 
                                Your real estate listing description is your chance to get creative and paint a picture of your listing.
                                    </p>
                            </div>
                        </div>
                        <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            <div className=" text-lg font-medium">
                                7. Lorem ipsum dolor sit amet consectetur?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> These words include “fixer,” “TLC,” and “cosmetic.”
                                 Why? Unless you’re looking to flip a home, these words imply the home requires a lot of work.
                                  While these words are not outright negative,
                                 they give potential home buyers the impression there is a lot of room to negotiate.
                                    </p>
                            </div>
                        </div>
                        <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                           
                            <div className=" text-lg font-medium">
                                9. Lorem ipsum dolor sit amet.?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> While you may want to avoid the red flag words listed above, 
                                there are also words that can help a home listing. “Impeccable,” “luxurious,” and “landscaped” were 
                                found to help boost sales prices. So if there’s a jacuzzi tub in the master, 
                                luxurious will definitely apply to your real estate listing description.
                                    </p>
                            </div>
                        </div>
                      
                    </div>

                    <div className=''>
                    <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            
                            <div className=" text-lg font-medium">
                            2. When will the project be completed?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> Character can help sell a home. Is there a fireplace in the
                                 master bedroom? Or maybe an original stained glass window in the entryway? At the very least,
                                 it will help potential buyers differentiate your listing from the other dozen they are browsing.
                                    </p>
                            </div>
                        </div>
                    <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            
                            <div className=" text-lg font-medium">
                            4. When will the project be completed?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> Every sentence should not end in an exclamation! If everything is
                                 amazing, then nothing is! On the other end of the spectrum,
                                 be sure that you use punctuation. Long, run-on sentences are hard to follow and information gets lost.
                                    </p>
                            </div>
                        </div>
                    <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                          
                            <div className=" text-lg font-medium">
                                6. Lorem ipsum dolor sit amet consectetur?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> This isn’t anything you can write, but photos are an
                                 incredibly important part of your listing. Consumers are more tech-savvy than ever and expect quality photos.
                                  If your images are poorly lit,
                                 grainy, or too small to see anything, people will move on to the next listing.
                                    </p>
                            </div>
                        </div>
                    <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            <div className=" text-lg font-medium">
                                8. Lorem ipsum dolor sit, amet consectetur adipisicing?
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> This stunning two-story home is on a large lot in a hot neighborhood.
                                 From the open-concept kitchen and living space to the large shaded backyard, there is plenty of room for
                                 the whole family to enjoy. Recent updates include new carpeting upstairs and stainless appliances.
                                    </p>
                            </div>
                        </div>
                    <div className="p-3 bg-[#F9F9F9] rounded-none mb-4">
                            <div className=" text-lg font-medium">
                                10. Lorem ipsum dolor sit.
                            </div>
                            <div className="p-4">
                                <p className='text-md text-gray-500'> This may seem like a no-brainer, but your real estate listing 
                                description should be accurate. If the house is barely 900 square feet, writing that the space is “sprawling” 
                                 is dishonest. When you say a home is in
                                 “excellent condition” and there is water damage throughout the house and the back deck is rotting,
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Faq design  */}

            <img src={line} alt="" />
        </div>
    );
};

export default Question;