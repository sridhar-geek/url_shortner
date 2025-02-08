import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const navigation = ["Features", "Pricing", "Resources"];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="header py-8 margin">
        <nav className="header gap-10">
          {/* left navigation */}
          <img
            src="images/logo.svg"
            alt="logo"
            className="select-none cursor-pointer"
          />
          <div className="header gap-6">
            {navigation.map((nav, index) => (
              <p className="navigation" key={index}>
                {nav}
              </p>
            ))}
          </div>
        </nav>
        {/* right navigation */}
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
      {/* mobile navigation */}
      {navOpen && (
        <nav className="flex flex-col gap-5 rounded-lg bg-backgroundColor p-4 m-5 md:hidden duration-1000 ease-in ">
          {navigation.map((nav, index) => (
            <button key={index} className="navBtn mobileNavBtn">
              {nav}
            </button>
          ))}
          <div className="border border-gray-700"></div>
          <button className="navBtn mobileNavBtn">Login</button>
          <button className="navBtn mobileNavBtn">Signup</button>
        </nav>
      )}
    </>
  );
};

export default Header;
