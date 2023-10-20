
import { BsThreeDotsVertical } from "react-icons/bs";
import ActiveLink from "../shared/Activelink/ActiveLink";
import { Outlet } from "react-router-dom";

const Moderator = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <nav className="w-full h-12 shadow flex justify-between items-center px-4 lg:hidden">
                    <h2 className="text-xl font-semibold">Moderator</h2>
                    <label htmlFor="my-drawer-2" className=" font-bold text-3xl  drawer-button lg:hidden "><BsThreeDotsVertical></BsThreeDotsVertical></label>
                </nav>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 flex gap-2 text-base-content">
                    {/* Sidebar content here */}
                    <li className="  rounded-lg"><ActiveLink to={'/moderator/modhome'}>Instractor Home</ActiveLink></li>
                    <li className="  rounded-lg"><ActiveLink to={'/moderator/classes'}>courses</ActiveLink></li>
                    <li className="  rounded-lg"><ActiveLink to={'/moderator/addClasses'}>Add courses</ActiveLink></li>
                    <li className="  rounded-lg"><ActiveLink to={'/moderator/appliedStudemts'}>Applied Students</ActiveLink></li>
                    <hr className="h-1 bg-gray-200" />
                    <li className="  rounded-lg"><ActiveLink to={'/'}>Home</ActiveLink></li>
                </ul>

            </div>
        </div >
    );
};

export default Moderator;