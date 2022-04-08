import React, { Suspense, lazy } from 'react';
import PageLoader from "./Component/loading/PageLoader";
import { BrowserRouter as Router, useRoutes, } from "react-router-dom";
// import Login from "./Component/Login/Login";\
import Registration from "./Component/Registration/Registration";
import AdminPannel from "./Component/AdminLogin/AdminPannel";
import Superr from "./Component/SuperAdminTest/Super";

const Admin = lazy(() => import("./Component/Admin/Admin"))
const AdminLogin = lazy(() => import("./Component/AdminLogin/AdminLogin"));
const Record = lazy(() => import("./Component/AppoinmentRecord/Record"));
const About = lazy(() => import("./Component/About/About"));
const ManageAppoinment = lazy(() => import("./Component/ManageAppoinment/ManageAppoinment"));
const Appoinment = lazy(() => import("./Component/Appoinment/Appoinment"));
const Schedule = lazy(() => import("./Component/Schedule/Schedule"));
const ChangePassword = lazy(() => import("./Component/Changepassword/ChangePassword"));



// let Role
const user = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null;
// console.log("app role", user[0].role_id);

const App = () => {
  let routes = useRoutes([
    // { path: "/login", element: <Login /> },

    // {path: "/AdminPannel", element: () => {
    //     return user && user[0].role_id === 2 ? <AdminPannel /> : <Appoinment />
    //   }},
    { path: "/AdminPannel", element: <AdminPannel /> },
    { path: "/", element: <Appoinment /> },
    { path: "/about", element: <About /> },
    { path: "/admin", element: <Admin /> },
    { path: "/registration", element: <Registration /> },
    { path: "/schedule", element: <Schedule /> },
    { path: "/record", element: <Record /> },
    { path: "/cp", element: <ChangePassword /> },
    { path: "/adminlogin", element: <AdminLogin /> },

    { path: "/super", element: <Superr /> },
    { path: "/manageAppoinment", element: <ManageAppoinment /> },
  ]);
  return routes;
};

const AppWrapper = () => {

  return (
    <>

      <Router >
        <Suspense fallback={<PageLoader />}>
          <App />
        </Suspense>
      </Router>

    </>
  );
};

export default AppWrapper;