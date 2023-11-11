import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/PageTitleHook";



const BeAHost = () => {
  usePageTitle('Too late | be a host');
  return (
    <div className=''>
      <div className="bg-slate-100 lg:m-10 md:m-8 m-3 lg:p-12 md:p-10 p-3">
        <section className="text-center">
          <h1 className='text-3xl text-center font-bold text-indigo-400'>Welcome, User</h1>
          <span className="w-56 h-1.5 bg-indigo-500 inline-block rounded-2xl mr-1.5"></span>
          <span className="w-16 h-1.5 bg-indigo-500 inline-block rounded-2xl"></span>
        </section>
        <section className="lg:pl-72 md:pl-72  lg:pt-10 md:pt-10 pt-6">
          <h1 className="text-2xl font-bold">Advertise Your Space for Free on Our Site and Reach <br />
            <span className="text-2xl font-bold text-indigo-400 ">Thousands of Potential Renters</span></h1>
          <p className="pt-6">
            Ready to turn your space into income? Join our vibrant community of hosts <br /> and start welcoming guests from all corners of t
            he globe. With our comprehensive tools and dedicated support, <br /> hosting has never been more accessible and rewarding. Begin
            your hosting journey with us now!
          </p>
          <div className="pt-6">
            <Link to='/hostFormFillUp'><button className="btn glass bg-indigo-600 text-white hover:btn glass">Continue</button></Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeAHost;