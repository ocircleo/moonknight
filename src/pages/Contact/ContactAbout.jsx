import { Link } from "react-router-dom";
import img from "../../assets/images/ContactPage/contact.jpg"
import "../Contact/Contact.css";

const ContactAbout = () => {
  return (
   <div className="bg-slate-100">
     <div className="lg:p-28 md:p-24 p-6">
      <section className="lg:flex md:flex justify-center gap-2">
        <div className="pt-6">
          <div className="shadow-md bg-white w-11/12 p-6">
            <h1 className="text-3xl font-bold">Talk to Member of Sales Team</h1>
            <p className="pt-6 text-lg text-gray-500">
Connect with our expert sales team to explore options, answer queries, and guide you seamlessly through your property journey.</p>
            <div className="pt-4">
              <Link className="btn btn-primary hover:bg-transparent hover:text-black" to={'#contact'}>Contact Sales</Link>
            </div>
          </div>
         <div className="pt-8">
         <div className="shadow-md bg-white w-11/12 p-6">
            <h1 className="text-3xl font-bold">Product & Account Support</h1>
            <p className="pt-6 text-lg text-gray-500">
Our dedicated support team is here to assist you with any product-related inquiries or account issues. Contact us for prompt and reliable assistance to enhance your user experience.</p>
            <div className="pt-4">
              <Link to="/question"><button className="btn btn-primary hover:bg-transparent hover:text-black">Go to FAQ</button></Link>
            </div>
          </div>
         </div>
        </div>
        <div>
          <img  className="w-full h-[250px]  md:w-[790px] md:h-[550px] rounded-3xl p-4 pt-6 object-cover" src={img}  alt="" />
        </div>
      </section>
    </div>
   </div>
  );
};

export default ContactAbout;