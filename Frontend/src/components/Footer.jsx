import { MapPin } from "lucide-react";
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-300">
            AFG-Proverbs
          </h3>
          <p className="text-sm text-white">
            Sharing wisdom through timeless Afghan proverbs. Explore, learn, and
            connect with culture and language.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>All Proverbs</Link>
            </li>
            <li>
             <Link to={"/create"}>Submit a Proverb</Link>
            </li>
            <li>
            <Link to={"/about"}>About us</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className=" mt-1 text-lg font-bold mb-4 ">Contact</p>
          <p className="text-sm mt-1 text-white ">
            <div className="flex">
              <MapPin size={20} />
              Kabul, Afghanistan
            </div>
          </p>
        </div>
      </div>

      <div className="copyright">© 2025 AFG-Proverbs. All rights reserved.</div>
    </footer>
  );
}
