import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../private/provider/Provider";
import { MdAccountBox } from "react-icons/md";
import ActiveNavLInk from "../Activelink/ActiveNavLInk";
const Navbar = () => {
  const { user, signout, userDB } = useContext(Authcontext);
  const navlinks = (
    <>
      <ActiveNavLInk to={"/"}> Home</ActiveNavLInk>
      <ActiveNavLInk to={"/search"}>Search Places</ActiveNavLInk>
      <ActiveNavLInk to={"/be-a-host"}>Be a Host</ActiveNavLInk>
      <ActiveNavLInk to={"/about"}>About</ActiveNavLInk>
      <ActiveNavLInk to={"/contact"}>Contact</ActiveNavLInk>
      <ActiveNavLInk to={"/blog"}>Blog</ActiveNavLInk>
    </>
  );
  return (
    <>
      <nav className="h-20 w-full bg-white fixed top-0 flex justify-between items-center px-4 md:px-10 shadow z-[111]">
        <div className="flex gap-10 h-80 w-auto items-center justify-center">
          <span className="font-bold text-black text-2xl md:text-3xl select-none cursor-pointer">
            <Link to={'/'}>
              TOO<span className="text-indigo-400 ">LATE</span>
            </Link>
          </span>
          <span className="font-semibold lg:flex gap-4 hidden">{navlinks}</span>
        </div>
        <div className={`flex ${user ? "gap-0" : "gap-4"} items-center`}>
          {/* //user logo */}
          {user ? (
            <>
              <div className="dropdown">
                <label tabIndex={1} className="btn btn-ghost">
                  <img
                    src={user.photoURL}
                    alt=""
                    className=" h-[40px] w-[40px] md:h-[55px] md:w-[55px] bg-white border-[2px] md:border-[4px]  rounded-full"
                  />
                </label>
                <div
                  tabIndex={1}
                  className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 right-2 flex flex-col gap-3"
                >
                  <p className="py-2 capitalize font-semibold text-lg text-center text-black">
                    {user.displayName}
                  </p>
                  {userDB?.role == "admin" ? (
                    <>
                      <Link
                        className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
                        to={"/admin/home"}
                      >
                        Dashboard
                      </Link>
                    </>
                  ) : userDB?.role == "host" ? (
                    <>
                      <Link
                        className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
                        to={"/host-dash-board"}
                      >
                        Dashboard
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
                        to={"/user-dash-board"}
                      >
                        Dashboard
                      </Link>
                    </>
                  )}
                  <button
                    onClick={signout}
                    className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="hidden sm:flex gap-4">
              <Link
                to={"/login"}
                className="bg-indigo-500 rounded-lg text-white px-4 py-2 capitalize font-semibold hover:bg-slate-200 hover:text-black duration-300 hover:border"
              >
                login
              </Link>
              <Link
                to={"/register"}
                className="hover:bg-indigo-500 rounded-lg hover:text-white px-4 py-2 capitalize font-semibold bg-slate-200 text-black duration-300 border"
              >
                Register
              </Link>
            </div>
          )}

          <div
            className={`h-9 w-8 cursor-pointer rounded  flex gap-[3px] items-center justify-center flex-col lg:hidden`}
          >
            <div className="h-[6px] bg-black w-full rounded-[2px]"></div>
            <div className="h-[6px] bg-black w-full rounded-[2px]"></div>
            <div className="h-[6px] bg-black w-full rounded-[2px]"></div>
          </div>
        </div>
      </nav>
      <div className="h-20 w-full bg-white"></div>
    </>
  );
};

// return (
//   <div className="navbar shadow p-2 md:px-12 bg-[#6A94FF] text-white font-semibold h-[70px] justify-between">
//     <div className="justify-start font-normal">
//       <div className="dropdown">
//         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16"
//             />
//           </svg>
//         </label>
//         <ul
//           tabIndex={0}
//           className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 text-black bg-white"
//         >
//           {navlinks}
//         </ul>
//       </div>
//       <Link
//         to={"/"}
//         className="normal-case text-sm md:text-3xl font-semibold "
//       >
//         <span className="text-red-500 text-xl md:text-5xl">T</span>⨀⨀
//         <span className="text-red-500 text-xl md:text-5xl">L</span>ate{" "}
//       </Link>
//     </div>
//     {user ? (
//       <>
//         <div className="navbar-end gap-4 ">
//           <ul className="hidden lg:flex menu menu-horizontal px-1">
//             {navlinks}
//           </ul>
//           <div className="dropdown">
//             <label tabIndex={1} className="btn btn-ghost">
//               <img
//                 src={user.photoURL}
//                 alt=""
//                 className=" h-[40px] w-[40px] md:h-[55px] md:w-[55px] bg-white border-[2px] md:border-[4px]  rounded-full"
//               />
//             </label>
//             <div
//               tabIndex={1}
//               className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-2 flex flex-col gap-3"
//             >
//               <p className="py-2 capitalize font-semibold text-lg text-center text-black">
//                 {user.displayName}
//               </p>
//               {userDB?.role == "admin" ? (
//                 <>
//                   <Link
//                     className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
//                     to={"/admin/home"}
//                   >
//                     Dashboard
//                   </Link>
//                 </>
//               ) : userDB?.role == "host" ? (
//                 <>
//                   <Link
//                     className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
//                     to={"/host-dash-board"}
//                   >
//                     Dashboard
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
//                     to={"/user-dash-board"}
//                   >
//                     Dashboard
//                   </Link>
//                 </>
//               )}
//               <button
//                 onClick={signout}
//                 className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
//               >
//                 Sign out
//               </button>
//             </div>
//           </div>
//         </div>
//       </>
//     ) : (
//       <>
//         <div className="justify-end gap-4 ">
//           <ul className="hidden lg:flex menu menu-horizontal px-1 ">
//             {navlinks}
//           </ul>
//           <div className="dropdown">
//             <label tabIndex={1} className="btn btn-ghost">
//               <MdAccountBox className="text-4xl"></MdAccountBox>
//             </label>

//             <div
//               tabIndex={1}
//               className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-2 flex flex-col gap-3"
//             >
//               <Link
//                 className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
//                 to={"/register"}
//               >
//                 register
//               </Link>
//               <Link
//                 className="bg-[#6A94FF] p-2 rounded text-white capitalize font-semibold text-center"
//                 to={"/login"}
//               >
//                 login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </>
//     )}
//   </div>
// );

export default Navbar;
