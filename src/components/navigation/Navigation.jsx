import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="min-h-12 font-medium bg-primary-green py-px flex flex-wrap items-center justify-around text-white">
      <div className="flex gap-2 items-center">
        <FiPhoneCall></FiPhoneCall>0431 344 177
      </div>

      <ul className="flex gap-2 font-medium flex-wrap justify-center text-center items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">Us</Link>
        </li>
        <li>
          <Link to="/">Wholesale</Link>
        </li>
        <li>
          <Link to="/">Wholesale</Link>
        </li>
        <li>
          <Link to="/">Login</Link>/<Link to="/">Register</Link>
        </li>
        <li>
          <PiFacebookLogoBold />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          {" "}
          <LuMail />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
