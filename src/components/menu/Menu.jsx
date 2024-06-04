import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import Section from "../Section/Section";

const MenuSection = () => {
  return (
    <Section className="flex my-2 flex-wrap justify-evenly items-center">
      <div className="mx-auto">
        <img src="./site_logo.png" alt="Site logo" />
      </div>
      <div className="font-Inter my-1 mx-auto max-w-xl justify-center items-center flex-wrap flex gap-4">
        <Link to="#">New Arrivals</Link>
        <Link to="#">Windspinners</Link>
        <select className="">
          <option>Ceramics/Pots</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
        <select className="">
          <option>Metal Animal/Birds</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
        <select className="">
          <option>Rusty Gardenware</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
        <select className="">
          <option>Decorative/Ornaments</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
        <Link to="#">Entire Range</Link>
      </div>
      <div className="flex gap-4 my-10 mx-auto">
        <CiSearch />
        <FaRegCircleUser />
        <BsHandbag />
      </div>
    </Section>
  );
};

export default MenuSection;