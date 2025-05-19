import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-yellow-50">
      <div>
        <nav className="navbar">
          <div className="text">
            <span className="font-bold text-2xl text-gray-950 ml-2"> Afghan</span>{" "}
            <span className="secondary-color text-lg"> Proverbs </span>
          </div>
          <ul className="text flex space-x-4 mr-5 mt-1">
            <li className="font-bold text-lg">
              <Link to={"/"}> Home </Link>
            </li>
            <li className="font-bold text-lg">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
