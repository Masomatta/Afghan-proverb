import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import CreateNew from "../pages/CreateNew";
import EditPage from "../pages/EditPage";
import About from "../pages/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <CreateNew />,
      },

      { path: "/updateproverb/:id",
        element: <EditPage /> },
      {
        path:"/about", 
        element:<About/>
      }
    ],
  },
]);
export default Router;
