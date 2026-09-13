import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

         
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-8 w-auto"
              />
            </div>

            <p className="text-sm text-gray-400 max-w-sm mb-5">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 text-sm text-gray-500">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

         
          <div>
            <h3 className="font-bold text-xs mb-4">PRODUCT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

         
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xs mb-4">COMPANY</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xs mb-4">LEGAL</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

        </div>

       
        <div className="border-t border-gray-200 mt-10 pt-6 flex justify-between text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;