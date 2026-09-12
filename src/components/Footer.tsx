

const Footer= () => {
  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 mt-16 pt-12 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Dev<span className="text-purple-600">Stack</span>
              </span>
            </div>
            
          
            <p className="text-gray-500 text-sm mb-6 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            
            <div className="flex gap-5 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-purple-600 transition-colors duration-200">GitHub</a>
              <a href="#" className="hover:text-purple-600 transition-colors duration-200">Twitter</a>
              <a href="#" className="hover:text-purple-600 transition-colors duration-200">LinkedIn</a>
            </div>
          </div>

        
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
           
            <div className="flex flex-col">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3 flex flex-col">
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Technologies</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Projects</a></li>
              </ul>
            </div>

            
            <div className="flex flex-col">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3 flex flex-col">
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Careers</a></li>
              </ul>
            </div>

            
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3 flex flex-col">
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>

        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;