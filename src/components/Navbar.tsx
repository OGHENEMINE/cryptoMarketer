import Logo from "../assets/logo.png"
// const Navbar = () => {
//   return (
//     <nav className="max-sm:z-10 fixed max-sm:w-1/2 max-sm:h-full bg-red-500 md:left-0 md:container flex max-sm:flex-col md:justify-between md:items-center py-8 md:py-4 px-10">
//       <div>Logo</div>
//       <div className="flex max-sm:mt-24 max-sm:flex-col md:items-center gap-5 tracking-widest md:text-sm font-bold">
//         <span>Home</span>
//         <span>About Us</span>
//         <span>Services</span>
//         <span>Contact Us</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-10 shadow max-sm:w-1/2">
      <div className="container mx-auto flex justify-between items-center py-1 bg-white px-10">
        <img className="w-14 h-14" src={Logo} alt="logo image"/>
        <div className="flex gap-5 tracking-widest text-sm font-bold">
          <span>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Contact Us</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
