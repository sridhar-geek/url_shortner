import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className="header py-8 margin">
        <nav className="header gap-10">
          <img
            src="images/logo.svg"
            alt="logo"
            className="select-none cursor-pointer"
          />
          <div className="header gap-6">
            <p className="navigation">Features</p>
            <p className="navigation">Pricing</p>
            <p className="navigation">Resources</p>
          </div>
        </nav>
        <div className="header gap-10">
          <button className="navBtn bg-transparent text-textColor hover:text-white ">
            Login
          </button>
          <button className="navBtn">Sign Up</button>
          <button
            className="md:hidden text-4xl text-textColor font-medium"
            onClick={() => setNavOpen(!navOpen)}
          >
            <IoMdMenu />{" "}
          </button>
        </div>
      </header>
      {navOpen &&  (
        <nav className="flex flex-col gap-5 rounded-lg bg-backgroundColor p-4 m-5 md:hidden ">
          <button className="navBtn mobileNavBtn">
            Features
          </button>
          <button className="navBtn mobileNavBtn">
            Princing
          </button>
          <button className="navBtn mobileNavBtn">
            Resources
          </button>
          <div className="border border-gray-700"></div>
          <button className="navBtn mobileNavBtn">
            Login
          </button>
          <button className="navBtn mobileNavBtn">
            Signup
          </button>
        </nav>
      )}
    </>
  );
};

export default Header;
