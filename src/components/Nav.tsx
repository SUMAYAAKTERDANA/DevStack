import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        
        <button className="md:hidden text-2xl text-gray-700">
          ☰
        </button>

        
        <div className="flex items-center gap-2">
          
          <img src={logo} alt="Dev Stack" className="h-8 auto" />

         
         
        </div>

         
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          <li className="text-[#E94D8B] cursor-pointer">Home</li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Technologies</li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Projects</li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">About</li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</li>
        </ul>

       
        <div className="flex gap-4 items-center text-sm">
          <span className="text-gray-700 font-medium cursor-pointer hover:text-gray-900">
            Sign In
          </span>

          <button className="bg-[#E94D8B] hover:bg-[#d63f78] text-white px-5 py-2 rounded-full font-medium transition-colors">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;