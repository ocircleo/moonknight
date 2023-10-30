
import "../Contact/Contact.css";
import line from "../../assets/images/ContactPage/line-bg.png";
import ContactAbout from "./ContactAbout";
import ContactDetails from "./ContactDetails";

const Contacts = () => {
    return (
        <div>
            <div className="contact-Background">
                <div className=" bg-indigo-950 opacity-80">
                    <div className="flex justify-center items-center p-20">
                        <div className="">
                            <h1 className="text-5xl font-bold text-white">Contact us</h1>
                            <div className="flex gap-2 pt-4 pl-14">
                                <h5 className="text-white">Home <span className="text-yellow-600">/</span> </h5>
                                <h5 className="text-white">Contact</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
              <img src={line} alt="" />
            </div>
            <ContactAbout/>
            <ContactDetails/>
        </div>
    );
};

export default Contacts;