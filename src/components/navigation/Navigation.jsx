import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
import useGSAPFrom from "../../lib/GSAP/GSAPForm";

const Navigation = () => {
  const fromLeft = useGSAPFrom({ x: -300, y: 0, duration: 1 });
  const fromRight = useGSAPFrom({ x: 300, y: 0, duration: 1 });

  return (
    <nav className="min-h-12 font-medium font-Inter bg-primary-green py-px flex flex-wrap items-center justify-around text-white">
      <div ref={fromLeft} className="left-gsap flex gap-2 items-center">
        <FiPhoneCall></FiPhoneCall>0431 344 177
      </div>

      <ul
        ref={fromRight}
        className="right-gsap flex gap-2 font-medium flex-wrap justify-center text-center items-center"
      >
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
          <Link to="/">
            <PiFacebookLogoBold />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to="/">
            <LuMail />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
