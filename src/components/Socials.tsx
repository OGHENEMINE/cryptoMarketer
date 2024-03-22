import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
const Socials = () => {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-3 p-1">
      <a href="#" target="_blank">
        <img className="w-7 h-7" src={Facebook} alt="A facebook icon" />
      </a>
      <a href="#" target="_blank">
        <img className="w-7 h-7" src={Instagram} alt="An instagram icon" />
      </a>
      <a href="#" target="_blank">
        <img className="w-7 h-7" src={Twitter} alt="A twitter icon" />
      </a>
    </div>
  );
};

export default Socials;
