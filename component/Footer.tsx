const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Logo & Address */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <span className="rounded-full border-2 border-purple-700 w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15V9a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 9v6a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/>
                </svg>
              </span>
              <span className="text-purple-700 text-2xl font-semibold">PrimeEdge AI</span>
            </div>
            <p className="text-sm text-gray-400">Elkridge, MD, USA</p>
            {/* <p className="text-sm text-gray-400">Email: primeedgeai@gmail.com</p> */}
            <p className="text-sm text-gray-400">Phone: +1 443 743 2492</p>
          </div>
  
          {/* Quick Links */}
          <nav className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#solutions" className="hover:text-white transition">Services</a>
            <a href="https://calendly.com/primeedgeai/30min" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Careers</a>
          </nav>
  
          {/* Copyright */}
          <div className="flex flex-col justify-center items-center md:items-end">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} PrimeEdge AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  