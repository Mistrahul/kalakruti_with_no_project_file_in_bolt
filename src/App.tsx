import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingCall from './components/FloatingCall';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Update page title based on current page
    const titles = {
      home: "Interior Designer Bhubaneswar | Kalakruti Associates",
      services: "Interior Design Services Bhubaneswar | Kalakruti Associates", 
      portfolio: "Interior Design Portfolio Bhubaneswar | Kalakruti Associates",
      about: "About Kalakruti Associates | Interior Experts Bhubaneswar",
      blog: "Interior Design Blog Bhubaneswar | Kalakruti Associates",
      faq: "Interior Design FAQ Bhubaneswar | Kalakruti Associates",
      contact: "Contact Kalakruti Associates | Interior Design Bhubaneswar"
    };
    
    document.title = titles[currentPage as keyof typeof titles] || titles.home;
  }, [currentPage]);

  // Handle navigation
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const baseUrl = 'https://kalakrutiassociates.com';
      const pageUrls = {
        home: '/',
        services: '/services',
        portfolio: '/portfolio',
        about: '/about-kalakruti-associates-interior-designers-bhubaneswar',
        blog: '/interior-design-blog-bhubaneswar',
        faq: '/frequently-asked-questions',
        contact: '/contact'
      };
      canonicalLink.setAttribute('href', baseUrl + (pageUrls[page as keyof typeof pageUrls] || '/'));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Kalakruti Associates
              </h2>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => handleNavigation('home')} className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Home</button>
                <button onClick={() => handleNavigation('services')} className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Services</button>
                <button onClick={() => handleNavigation('portfolio')} className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Portfolio</button>
                <button onClick={() => handleNavigation('blog')} className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Blog</button>
                <button onClick={() => handleNavigation('faq')} className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">FAQ</button>
                <button onClick={() => handleNavigation('about')} className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">About</button>
                <button onClick={() => handleNavigation('contact')} className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-orange-500 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <button onClick={() => handleNavigation('home')} className="text-gray-900 block px-3 py-2 text-base font-medium w-full text-left">Home</button>
              <button onClick={() => handleNavigation('services')} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Services</button>
              <button onClick={() => handleNavigation('portfolio')} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Portfolio</button>
              <button onClick={() => handleNavigation('blog')} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Blog</button>
              <button onClick={() => handleNavigation('faq')} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">FAQ</button>
              <button onClick={() => handleNavigation('about')} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">About</button>
              <button onClick={() => handleNavigation('contact')} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main>
        {currentPage === 'home' && <HomePage handleNavigation={handleNavigation} />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Kalakruti Associates
              </h3>
              <p className="text-gray-300 mb-4">
                Premier interior design services in Bhubaneswar, creating beautiful and functional spaces since inception.
              </p>
              <p className="text-sm text-gray-400 italic">
                ଆପଣଙ୍କ ସ୍ବପ୍ନର ଘର, ଆମର କଳାକୃତି
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Residential Interior Design</button></li>
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Commercial Interior Design</button></li>
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Modular Kitchen Design</button></li>
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Vastu Consultation</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Areas Served</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Bhubaneswar</li>
                <li>Cuttack</li>
                <li>Puri</li>
                <li>Across Odisha</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Design Plaza, Saheed Nagar</p>
                <p>Bhubaneswar, Odisha 751007</p>
                <p>Phone: <a href="tel:+919876543210" className="hover:text-orange-500 transition-colors">+91-98765-43210</a></p>
                <p>Email: info@kalakrutiassociates.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-1 max-w-md mx-auto md:mx-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => handleNavigation('blog')} className="hover:text-orange-500 transition-colors text-left">Blog</button></li>
                <li><button onClick={() => handleNavigation('faq')} className="hover:text-orange-500 transition-colors text-left">FAQ</button></li>
                <li><a href="/testimonials" className="hover:text-orange-500 transition-colors">Reviews</a></li>
                <li><a href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><button onClick={() => handleNavigation('about')} className="hover:text-orange-500 transition-colors text-left">About Us</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kalakruti Associates. All rights reserved. | Best Interior Designer in Bhubaneswar</p>
          </div>
        </div>
      </footer>

      {/* Global Floating Action Buttons */}
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  );

}

export default App;