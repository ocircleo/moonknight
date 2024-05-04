import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../shared/Activelink/ActiveLink";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext } from "react";
import { Authcontext } from "../private/provider/Provider";
import usePageTitle from "../hooks/PageTitleHook";

const Dashboard = () => {

    usePageTitle('Too late | dashboard');

    const links = [

        {
            title: '/dashboard',
            text: "profile"
        },
        {
            title: '/myWishlist',
            text: "myWishlist"
        },
        {
            title: '/notifications',
            text: "notifications"
        },
        {
            title: '/mypayments',
            text: 'My Payments'
        }
    ];
    const { user, userDB } = useContext(Authcontext)
    if (userDB?.role == 'admin') {
        const adminDatas = [
            {
                title: '/users',
                text: 'users'
            },
            {
                title: '/addblog',
                text: 'Add Blog'
            },
            {
                title: '/PendingApproval',
                text: 'Pending Approval'
            },{
                title: '/mails',
                text: 'mails'
            }
            
            ,{
                title: '/update_house_admin',
                text: 'Update Posts'
            },{
                title:"edit_blog",
                text: "edit blogs"
            }
           


        ]
        adminDatas.map(ele => links.push(ele))
    }
    if (userDB?.role == "host") {
        const hostDatas = [
            {
                title: '/myhouses',
                text: 'My Houses'
            },
            {
                title: '/postHouseInfo',
                text: 'Add houses'
            },
            {
                title: '/update_house',
                text: 'Update Posts'
            },{
                title: "/payments",
                text: "house Booking"
            }
        ]
        hostDatas.map(ele => links.push(ele))
    }
    return (
        <div>
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                    <nav className="w-full h-12 shadow flex justify-between items-center px-4">
                        <h2 className="text-xl font-semibold">Dash Board</h2>
                        <label htmlFor="my-drawer-2" className=" font-bold text-3xl  drawer-button lg:hidden "><BsThreeDotsVertical></BsThreeDotsVertical></label>
                    </nav>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side overflow-y-scroll">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 gap-2 text-base-content text-center flex-nowrap overflow-y-scroll">
                        {/* Sidebar content here */}
                        {
                            links.map(ele => <ActiveLink key={ele.title} to={ele.title}><p className="py-1 capitalize font-semibold">{ele.text}</p></ActiveLink>)
                        }
                        <Link className="bg-indigo-300 text-black py-2 rounded font-semibold" to={'/'}>Home</Link>
                    </ul>

                </div>
            </div >
        </div>
    );
};

export default Dashboard;