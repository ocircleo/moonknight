/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErrorPage from "./src/shared/error/ErrorPage";
import Home from "./src/pages/home/Home";
import Register from "./src/pages/register/Register";
import Login from "./src/pages/login/Login";
import Loading from "./src/shared/loading/Loading";
import Test from "./src/pages/test/Test";
import Blog from "./src/pages/blog/Blog";
import Contacts from "./src/pages/Contact/Contacts";
import About from "./src/pages/about/About";
import BeAHost from "./src/pages/beAhost/BeAHost";
import Search from "./src/pages/search/Search";
import Question from "./src/pages/Contact/Question";
import Dashboard from "./src/dashboard/Dashboard";
import Mintainence from "./src/pages/maintainence/Mintainence";
import Privateuser from "./src/private/Private/Privateuser";
import Profile from "./src/shared/profile/Profile";
import Whishlight from "./src/dashboard/compo/Whishlist";
import Notifications from "./src/dashboard/compo/Notifications";
import Private_Host from "./src/private/Private/Private_Host";
import MyHouses from "./src/dashboard/host/MyHouses";
import Private_Admin from "./src/private/Private/Private_Admin";
import Users from "./src/dashboard/admin/Users";
import PendingApproval from "./src/dashboard/admin/PendingApproval";
import AddBlog from "./src/dashboard/admin/AddBlog";
import BeAHostPrivate from "./src/private/Private/BeAHostPrivate";
import PostARent from "./src/pages/beAhost/PostARent";
import BeAHostInfoForm from "./src/pages/beAhost/BeAHostInfoForm";
import EditProfile from "./src/pages/editprofile/EditProfile";
import Mails from "./src/dashboard/admin/Mails";
import Whishlist from "./src/dashboard/compo/Whishlist";
import SeeDetails from "./src/pages/seeDetails/SeeDetails";
import BlogDetails from "./src/pages/blog/BlogDetails";
import BlogViewDetails from "./src/pages/blog/BlogViewDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contacts></Contacts>,
      },
      {
        path: "question",
        element: <Question></Question>,
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "loader",
        element: <Loading></Loading>,
      },
      {
        path: "test",
        element: <Test></Test>,
      },
      {
        path: "postHouseInfo",
        element: <BeAHostPrivate><PostARent></PostARent></BeAHostPrivate>,
      }, {
        path: 'applyForHost',
        element: <BeAHost></BeAHost>
      }, {
        path: "hostFormFillUp",
        element: <Privateuser><BeAHostInfoForm></BeAHostInfoForm></Privateuser>
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        // loader: () => fetch(' https://moonknight-backend.vercel.app/user/allBlog')
      },
      {
        path: "/singleBlog/:id",
        // element: <BlogDetails></BlogDetails>,
        element: <BlogViewDetails></BlogViewDetails>,
        loader: ({ params }) => fetch(`https://moonknight-backend.vercel.app/user/singleBlog/${params.id}`)
      }, {
        path: "seeDetaill/:id",
        element: <SeeDetails></SeeDetails>,
        loader: ({ params }) => fetch(`https://moonknight-backend.vercel.app/user/card/${params.id}`)

      }

      ,
      {
        path: "wishlist",
        element: <Whishlist></Whishlist>,
      },
      {
        path: "search",
        element: <Search></Search>,
      }, {
        path: "editProfile",
        element: <Privateuser><EditProfile></EditProfile></Privateuser>
      },
      {
        path: "Mintainence",
        element: <Mintainence></Mintainence>,
      },
      {
        path: "seeDetails",
        element: <SeeDetails></SeeDetails>,
      },
    ],

  }, {
    path: '/',
    element: <Privateuser> <Dashboard></Dashboard></Privateuser>,
    children: [
      {
        path: 'dashboard',
        element: <Profile></Profile>
      },
      {
        path: 'myWishlist',
        element: <Whishlight></Whishlight>
      },
      {
        path: 'notifications',
        element: <Notifications></Notifications>
      },
      {
        path: '/myhouses',
        element: <Private_Host><MyHouses></MyHouses></Private_Host>
      },
      {
        path: '/addHouses',
        element: <Private_Host><BeAHost></BeAHost></Private_Host>
      },
      {
        path: '/users',
        element: <Private_Admin><Users></Users></Private_Admin>
      },
      {
        path: '/addblog',
        element: <Private_Admin><AddBlog></AddBlog></Private_Admin>
      },
      {
        path: '/PendingApproval',
        element: <Private_Admin><PendingApproval></PendingApproval></Private_Admin>
      },
      {
        path: '/mails',
        element: <Private_Admin><Mails></Mails></Private_Admin>
      },
    ]
  }
]);