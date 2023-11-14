import '../Contact/Question.css'
import line from "../../assets/images/ContactPage/line-bg.png";
import { Link } from 'react-router-dom';

const Question = () => {
    return (
        <div>
            <div className="question-Background">
                <div className=" bg-indigo-950 opacity-80">
                    <div className="flex justify-center items-center p-20">
                        <div className="">
                            <h1 className="text-5xl font-bold text-white">Frequently Ask Question</h1>
                            <div className="flex gap-2 pt-2 w-3/4 mx-auto border-2">
                                <Link to={'/'} className="text-white">Home <span className="text-yellow-600">/</span> </Link>
                                <h5 className="text-white">FAQ</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={line} alt="" />
            </div>

            {/* Faq design start */}

            <div className=' '>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-12 md:py-12 p-3">
                    <div className=''>
                        <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                1. What are the costs to buy a house?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                3. Do you have loan consultants?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                              5. What are the steps to rent a house?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                7. Lorem ipsum dolor sit amet consectetur?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                9. Lorem ipsum dolor sit amet.?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                      
                    </div>

                    <div className=''>
                    <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                            2. When will the project be completed?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                    <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                            4. When will the project be completed?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                    <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                6. Lorem ipsum dolor sit amet consectetur?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                    <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                8. Lorem ipsum dolor sit, amet consectetur adipisicing?
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                    <div className="collapse collapse-plus bg-[#F9F9F9] rounded-none mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                10. Lorem ipsum dolor sit.
                            </div>
                            <div className="collapse-content">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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