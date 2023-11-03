import { BsThreeDotsVertical } from "react-icons/bs";
import ActiveLink from "../shared/Activelink/ActiveLink";
import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <nav className="w-full h-12 shadow flex justify-between items-center px-4 lg:hidden">
                    <h2 className="text-xl font-semibold">Dash Board</h2>
                    <label htmlFor="my-drawer-2" className=" font-bold text-3xl  drawer-button lg:hidden "><BsThreeDotsVertical></BsThreeDotsVertical></label>
                </nav>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 flex gap-2 text-base-content text-center">
                    {/* Sidebar content here */}
                    <ActiveLink to={'/admin'}><p className="py-1 capitalize font-semibold">profile</p></ActiveLink>
                    <ActiveLink to={'/users'}><p className="py-1 capitalize font-semibold">Users</p></ActiveLink>
                    <ActiveLink to={'/addblog'}><p className="py-1 capitalize font-semibold">post Blogs</p></ActiveLink>
                    <ActiveLink to={'/PendingApproval'}><p className="py-1 capitalize font-semibold">Pending Approval</p></ActiveLink>
                    <hr className="h-1 bg-gray-200" />
                    <ActiveLink to={'/'}><p className="py-1 capitalize font-semibold">home</p></ActiveLink>
                </ul>

            </div>
        </div >
    );
};

export default Admin;