import { MapPin } from "lucide-react";

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
              <a href="/" className="hover">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover">
                All Proverbs
              </a>
            </li>
            <li>
              <a href="/create" className="hover">
                Submit a Proverb
              </a>
            </li>
            <li>
              <a href="/about" className="hover">
                About Us
              </a>
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
