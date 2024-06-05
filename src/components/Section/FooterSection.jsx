import { CiSearch } from "react-icons/ci";
import { LuMailOpen } from "react-icons/lu";
const FooterSection = () => {
  return (
    <>
      <footer className="container flex gap-10 justify-center flex-wrap px-2 md:px-10 py-5 lg:px-20 2xl:px-36 bg-primary-green">
        <div className="relative flex max-w-2xl justify-center items-center">
          <CiSearch className="absolute left-2" />
          <input
            type="text"
            name="subscribe"
            id="subscribe"
            className="h-12 pl-10 p-4 transition rounded-l-full w-full outline-none text-lg"
            placeholder="Enter Your Email Id Here...."
          />
          <input
            type="button"
            value="submit"
            id="submit"
            className="bg-secondary-green h-12 rounded-r-full border-0 px-5"
          />
        </div>
        <div className="flex items-center text-white gap-5">
          <LuMailOpen className="text-xl" />
          <h3 className="text-white font-medium text-3xl">
            Signup For Newsletter{" "}
          </h3>
        </div>
      </footer>
      <div className="italic mb-10 mt-96 text-center">
        @2024-2026, Potter's Shed. All rights reserved.
      </div>
    </>
  );
};

export default FooterSection;
