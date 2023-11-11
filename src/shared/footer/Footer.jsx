/* eslint-disable react/no-unknown-property */

import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { dataContext } from "../../private/provider/Data_Provider";
import { useContext } from "react";

const Footer = () => {
  const { setSearchData } = useContext(dataContext)
  const navigate = useNavigate()
  const goto = (text) => {
    setSearchData('', text)
    navigate('/search')
  }
  return (

    <div className="grid md:grid-cols-2 gap-4 md:px-12 md:py-12 bg-[#10162E]">

      <div className="text-white text-center">
        <div className='text-base-700 md:text-start text-white  md:space-y-4  p-5 py-5'>
          <span className="font-bold text-white text-2xl md:text-3xl select-none cursor-pointer">
            <Link to={"/"}>
              TOO<span className="text-[#FD3358] ">LATE</span>
            </Link>
          </span>
          <p className='py-2 md:py-1'>Get the latest Apartment trend on your inbox!</p>
          <div className="form-control">
            <label className="input-group">
              <input type="text" placeholder="info@site.com" className="input input-bordered w-full md:w-2/4 text-black h-8 text-sm" />
              <button className='btn border-0 bg-[#FD3358] btn-sm p-2 text-white hover:bg-[#f04a69]'>Subscribe</button>
            </label>
          </div>

          <div className="flex mt-4 justify-center md:justify-start">
            <span className="pe-3 cursor-pointer"><FaFacebook className="text-3xl text-[#FD3358]" ></FaFacebook></span>
            <span className="pe-3 cursor-pointer"><FaInstagram className="text-3xl text-[#FD3358]" ></FaInstagram></span>
            <span className="pe-3 cursor-pointer"><FaTwitter className="text-3xl text-[#FD3358]" ></FaTwitter></span>
            <span className="pe-3 cursor-pointer"><FaLinkedinIn className="text-3xl text-[#FD3358]" ></FaLinkedinIn></span>

          </div>



        </div>
      </div>


      <div className="grid md:grid-cols-3 justify-center gap-4 text-white px-5 ">
        <nav className="mb-7">
          <header className="text-white text-2xl font-semibold mb-4">Explore</header>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl text-[#FD3358]"></FaAngleRight>
            <Link className="hover:text-[#FD3358] duration-500" to={"/register"}>Register</Link>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl text-[#FD3358]"></FaAngleRight>
            <Link className="hover:text-[#FD3358] duration-500" to={"/login"}>Login</Link>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl font-thin text-[#FD3358]"></FaAngleRight>
            <Link className="hover:text-[#FD3358] duration-500" to={"/blog"}>Blog</Link>
          </span>

        </nav>
        <nav className="mb-7">
          <header className="text-white text-2xl font-semibold mb-4">Quick Links</header>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl text-[#FD3358]"></FaAngleRight>
            <Link className="hover:text-[#FD3358] duration-500" to={"/applyForHost"}>Be a Host</Link>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl text-[#FD3358]"></FaAngleRight>
            <Link className="hover:text-[#FD3358] duration-500" to={"/contact"}>Contact</Link>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl font-thin text-[#FD3358]"></FaAngleRight>
            <Link className="hover:text-[#FD3358] duration-500" to={"/about"}>About</Link>
          </span>

        </nav>
        <nav className="mb-7">
          <header className="text-white text-2xl font-semibold mb-4">Locations</header>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl text-[#FD3358]"></FaAngleRight>
            <button className="hover:text-[#FD3358] duration-500" onClick={() => goto('dhaka')}>Dhaka</button>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl text-[#FD3358]"></FaAngleRight>
            <button className="hover:text-[#FD3358] duration-500" onClick={() => goto('Barishal')}>Barishal</button>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl font-thin text-[#FD3358]"></FaAngleRight>
            <button className="hover:text-[#FD3358] duration-500" onClick={() => goto('Jessore')}>Jessore</button>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl font-thin text-[#FD3358]"></FaAngleRight>
            <button className="hover:text-[#FD3358] duration-500" onClick={() => goto('Rangpur')}>Rangpur</button>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl font-thin text-[#FD3358]"></FaAngleRight>
            <button className="hover:text-[#FD3358] duration-500" onClick={() => goto('Bogura')}>Bogura</button>
          </span>
          <span className="flex items-center mb-2">
            <FaAngleRight className="text-xl font-thin text-[#FD3358]"></FaAngleRight>
            <button className="hover:text-[#FD3358] duration-500" onClick={() => goto('Comilla')}>Comilla</button>
          </span>

        </nav>
      </div>

    </div>






  );
};

export default Footer;
