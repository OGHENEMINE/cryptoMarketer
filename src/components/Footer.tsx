import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto grid grid-cols-3 py-8 px-10">
      <img className="w-14 h-14" src={Logo} alt="logo image" />
      <div>
        <h3 className="font-bold text-lg mb-2">Socials</h3>
        <div className="flex items-center gap-4">
          <a href="#">
            <img className="w-10 h-10" src={Facebook} />
          </a>
          <a>
            <img className="w-10 h-10" src={Instagram} />
          </a>
          <a>
            <img className="w-10 h-10" src={Twitter} />
          </a>
        </div>
      </div>
      <div>
      <h3 className="font-bold text-lg mb-2">Newsletter</h3>
          <label className="sr-only" htmlFor="newsletter">
            subscribe
          </label>
          <div className="border border-gray-500 rounded flex items-center p-2 relative">
            <input
              type="email"
              name="newsletter"
              id="newsletter"
              className="border-none outline-none w-full"
            />
            <button className="bg-yellow-500 rounded-tr rounded-br absolute top-0 right-0 bottom-0 px-4 text-white">
              subscribe
            </button>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
