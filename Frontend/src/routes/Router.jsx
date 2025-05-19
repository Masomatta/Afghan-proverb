import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import CreateNew from "../pages/CreateNew";
import EditPage from "../pages/EditPage";

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

      { path: "updateproverb/:id", element: <EditPage /> },
    ],
  },
]);
export default Router;
