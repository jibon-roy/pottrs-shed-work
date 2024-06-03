import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
const Navigation = () => {
  return (
    <div className="container min-h-12 bg-primary-green py-px flex flex-wrap items-center justify-around text-white">
      <div className="flex gap-2 items-center">
        <FiPhoneCall></FiPhoneCall>0431 344 177
      </div>
      <div className="flex gap-2 flex-wrap justify-center text-center items-center">
        Home About Contact Us Wholesale Login/Register <PiFacebookLogoBold />{" "}
        <FaInstagram /> <LuMail />
      </div>
    </div>
  );
};

export default Navigation;
