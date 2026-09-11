import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

       
        <button className="md:hidden text-2xl">
          ☰
        </button>

        <div className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack" className="w-10" />
          <span className="font-bold text-xl hidden sm:block">
            Dev Stack
          </span>
        </div>

       
        <ul className="hidden md:flex gap-5 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-2 items-center">
          <span>Sign In</span>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;