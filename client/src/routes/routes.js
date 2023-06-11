import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Add from "../pages/Add";
import ErrorPage from "../pages/Error";

import {
  httpDeleteStudent,
  httpGetAllStudents,
  httpGetStudent,
} from "../hooks/requests";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: httpGetAllStudents,
  },
  {
    path: "/edit/:studentID",
    element: <Edit />,
    errorElement: <ErrorPage />,
    loader: httpGetStudent,
  },
  {
    path: "/add",
    element: <Add />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
