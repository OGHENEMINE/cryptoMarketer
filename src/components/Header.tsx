import Navbar from "./Navbar";
import HeaderImage from "../assets/page Image.png";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="flex max-sm:flex-col md:items-center md:justify-between container mx-auto pb-8 px-5 max-sm:mt-16 md:px-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-7xl font-bold tracking-wider">
          Unlocking Crypto Success Together
          </h1>
          <p className="my-6">
            Cryptopage is a website that helps you unlock your cryptocurrency
          </p>

          <button className="text-white tracking-wider font-bold py-5 px-16 max-sm:py-7 bg-yellow-500 shadow rounded-full">
            Get Started
          </button>
        </div>
        <img className="w-[450px]" src={HeaderImage} alt="an image" />
      </div>
    </header>
  );
};

export default Header;
