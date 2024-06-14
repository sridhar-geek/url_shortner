import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <header className="header py-8 mx-8 md:mx-14 lg:mx-28 ">
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
        <button className="md:hidden text-4xl text-textColor font-medium">
          <IoMdMenu />{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
