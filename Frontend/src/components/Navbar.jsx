import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="background">
      <div>
        <nav className="flex justify-between p-4 shadow-lg drop-shadow-2xl">
          <div className="text">
            <span className="font-bold text-xl text-gray-950"> Afghan</span>{" "}
            <span className="secondary-color"> Proverbs </span>
          </div>
          <ul className="text flex space-x-4 ">
            <li className="font-bold">
              {" "}
              <Link to={"/"}> Home </Link>
            </li>
            <li className="font-bold">
              {" "}
              <Link to={"/create"}>Create New</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
