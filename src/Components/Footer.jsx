const footerIcons = [
  {
    src: "images/icon-facebook.svg",
    alt: "facebook",
  },
  {
    src: "images/icon-twitter.svg",
    alt: "twitter",
  },
  {
    src: "images/icon-pinterest.svg",
    alt: "pinterest",
  },
];
const navElements = [
  ["Features", "Link Sharing", "Branded Links", "Analytics"],
  ["Resources", "Blog", "Developers", "Support"],
  ["Company", "Our Team", "Carrers", "Contact"],
];

const Footer = () => {
  return (
    <footer className="bg-footerColor text-white">
      {/* Main Container which holds grid elements */}
      <div
        className=" margin py-8 flex flex-col text-center gap-10 items
       md:grid md:gap-5 md:grid-cols-8"
      >
        {/* App Name */}
        <div className=" md:col-start-1 col-end-3 font-bold text-3xl md:text-4xl">
          Shortly
        </div>
        {/* Nav Elements */}
        {navElements.map((elements, index) => (
          <div key={index} className="footerNav">
            <h3 className="footerHeading">{elements[0]}</h3>
            <p>{elements[1]}</p>
            <p>{elements[2]}</p>
            <p>{elements[3]}</p>
          </div>
        ))}

        {/* Social Icons */}
        <div className="col-start-7 col-end-8 justify-center flex items-center gap-4">
          {footerIcons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} className="icons" />
          ))}
        </div>
      </div>
      <p className="text-center pb-3">© 2024 Shortly. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
