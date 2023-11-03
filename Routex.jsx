import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErrorPage from "./src/shared/error/ErrorPage";
import Home from "./src/pages/home/Home";
import Privateuser from "./src/private/Private/Privateuser";
import Register from "./src/pages/register/Register";
import Login from "./src/pages/login/Login";
import Loading from "./src/shared/loading/Loading";
import Private_Mode from "./src/private/Private/Private_Mode";
import Moderator from "./src/moderator/Moderator";
import ModeHome from "./src/moderator/moderetor/ModeHome";
import Private_Admin from "./src/private/Private/Private_Admin";
import Admin from "./src/Admin/Admin";
import Adminhome from "./src/Admin/adminpage/Adminhome";
import Users from "./src/Admin/adminpage/Users";
import Test from "./src/pages/test/Test";
import Blog from "./src/pages/blog/Blog";
import HostDashBoard from "./src/host-dash-board/HostDashBoard";
import UserDashBoard from "./src/user-dash-board/UserDashBoard";
import Contacts from "./src/pages/Contact/Contacts";
import About from "./src/pages/about/About";
import BeAHost from "./src/pages/beAhost/BeAHost";
import Search from "./src/pages/search/Search";
import Question from "./src/pages/Contact/Question";
import Dashboard from "./src/pages/dashboard/Dashboard";
import Mintainence from "./src/pages/maintainence/Mintainence";
import AddBlog from "./src/pages/addBlog/AddBlog";

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
        path: "host-dash-board",
        element: <HostDashBoard></HostDashBoard>,
      },
      {
        path: "be-a-host",
        element: <BeAHost></BeAHost>,
      },
      {
        path: "user-dash-board",
        element: <UserDashBoard></UserDashBoard>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "search",
        element: <Search></Search>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "Mintainence",
        element: <Mintainence></Mintainence>,
      },
    ],
  },
  {
    path: "/",
    element: (
      // <Private_Mode>
      <Moderator></Moderator>
      //  </Private_Mode>
    ),
    children: [
      {
        path: "moderator",
        element: <ModeHome></ModeHome>,
      },
    ],
  },
  {
    path: "/",
    element: (
      // <Private_Admin>
      <Admin></Admin>
      // </Private_Admin>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "admin",
        element: <Adminhome></Adminhome>,
      },
      {
        path: "users",
        element: <Users></Users>,
      }, {
        path: "addblog",
        element: <AddBlog></AddBlog>
      }
    ],
  },
]);
