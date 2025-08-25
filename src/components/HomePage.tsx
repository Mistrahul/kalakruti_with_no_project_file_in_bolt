import React, { useState, useEffect } from 'react';
import { Phone, Home, Briefcase, Eye, Users, Award, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';

interface HomePageProps {
  handleNavigation: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ handleNavigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openFooterFAQ, setOpenFooterFAQ] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFooterFAQ = (index: number) => {
    setOpenFooterFAQ(openFooterFAQ === index ? null : index);
  };

  const footerFAQs = [
    "How much does interior design cost in Bhubaneswar?",
    "What is the timeline for complete home interior design?",
    "Do you provide vastu-compliant interior design in Bhubaneswar?"
  ];

  const fadeInClass = `transition-all duration-700 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  const services = [
    {
      title: "Residential Interior Design Solutions",
      description: "Transform your home with our bespoke residential interior design services. From living rooms to bedrooms, we create spaces that reflect your personality while ensuring Vastu compliance.",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "Commercial & Office Interior Design", 
      description: "Boost productivity with professionally designed commercial spaces. Our office interior designs combine functionality with aesthetics to create inspiring work environments.",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Modular Kitchen Design",
      description: "Experience the perfect blend of style and functionality with our modular kitchen designs. Custom solutions tailored to your cooking needs and space requirements.",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  const features = [
    {
      title: "Vastu-Compliant Designs",
      description: "Every design follows traditional Vastu principles for positive energy flow",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "On-Time Delivery",
      description: "Guaranteed project completion within agreed timelines",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs - clear, upfront pricing for all services",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45" />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content text-center relative z-10 pt-20">
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Premier Interior Designer in Bhubaneswar | Kalakruti Associates
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-3 md:mb-4 italic font-medium">
              ଆପଣଙ୍କ ସ୍ବପ୍ନର ଘର, ଆମର କଳାକୃତି
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Your Dream Home, Our Masterpiece
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#contact" 
                className="hero-cta bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                style={{ minHeight: '44px' }}
              >
                Book Free Consultation
              </a>
              <a 
                href="#portfolio" 
                className="hero-cta bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                style={{ minHeight: '44px' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('portfolio');
                }}
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Paragraph - SEO Optimized */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to <strong>Kalakruti Associates</strong>, the premier <strong>interior designer in Bhubaneswar</strong> and leading <strong>interior design company in Bhubaneswar</strong>. As the <strong>best interior designer in Bhubaneswar</strong>, we specialize in creating stunning residential and commercial spaces that perfectly blend aesthetics with functionality. Our expert team offers comprehensive <strong>interior design services in Bhubaneswar</strong>, including <strong>home interior design Bhubaneswar</strong>, <strong>residential interior design Bhubaneswar</strong>, and <strong>modular kitchen Bhubaneswar</strong> solutions. When you search for an "<strong>interior designer near me</strong>,\" choose Kalakruti Associates for <strong>Vastu compliant interior design</strong> that transforms your vision into reality. As a leading <strong>luxury interior designer in Odisha</strong>, we deliver <strong>turnkey interior projects in Bhubaneswar</strong> with transparent pricing, on-time delivery guarantees, and bespoke designs tailored to your unique lifestyle and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Voice Search Callouts */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
              <h3 className="text-lg font-semibold text-green-800 mb-2">🎤 Voice Search Friendly</h3>
              <p className="text-green-700">"Looking for the best interior designer near me in Bhubaneswar? Kalakruti Associates is just a call away."</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out" style={{transitionDelay: '200ms'}}>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">🏠 Vastu Expertise</h3>
              <p className="text-purple-700">"Need a vastu-compliant interior design? Our expert consultants blend tradition with modern style."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kalakruti Associates for Your Interior Design Needs?
            </h2>
            <h3 className="text-xl text-orange-600 font-semibold mb-8">
              Serving Bhubaneswar, Cuttack & Across Odisha
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 scroll-animate opacity-0 translate-y-6"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Services Summary */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-green-800 mb-1">TL;DR - Services Summary:</p>
            <p className="text-green-700">We provide complete interior design solutions including modular kitchens, home renovations, office interiors, and vastu-compliant planning throughout Bhubaneswar and Cuttack.</p>
          </div>

          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Interior Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions for every space and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 scroll-animate opacity-0 translate-x-8"
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('services');
                  }}
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Complete Interior Design Services
            </a>
          </div>
        </div>
      </section>

      {/* Vastu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Process Summary */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-purple-800 mb-1">TL;DR - Process Summary:</p>
            <p className="text-purple-700">Our 6-step interior design process covers consultation, 3D design, material selection, vastu compliance, execution, and handover with 2-year warranty.</p>
          </div>

          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vastu-Compliant Modern Interior Design
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harmonize traditional Vastu principles with contemporary design aesthetics for spaces that promote positive energy and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury living room interior by Kalakruti Associates Bhubaneswar"
                srcSet="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                        https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800 800w"
                sizes="(max-width: 768px) 100vw, 50vw"
                srcSet="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                        https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800 800w"
                sizes="(max-width: 768px) 100vw, 50vw"
                srcSet="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                        https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800 800w"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Balancing Tradition with Innovation</h3>
              <p className="text-gray-600 mb-6">
                Our expertise in Vastu-compliant interior design ensures that your spaces not only look stunning but also promote harmony, prosperity, and positive energy flow. We seamlessly integrate ancient wisdom with modern aesthetics.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Proper room placement and orientation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Color schemes for positive energy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Furniture arrangement for optimal flow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Portfolio Summary */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-orange-800 mb-1">TL;DR - Portfolio Summary:</p>
            <p className="text-orange-700">Our portfolio showcases 500+ completed interior projects across Bhubaneswar neighborhoods including luxury villas in Chandrasekharpur and modern apartments in Patia.</p>
          </div>

          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Interior Design Projects in Bhubaneswar
            </h2>
            <p className="text-lg text-gray-600">
              Discover our latest residential and commercial interior transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern modular kitchen design in Bhubaneswar by Kalakruti Associates"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Modular Kitchen</h3>
                  <p className="text-gray-600 mb-4">Contemporary kitchen design with smart storage solutions and premium finishes.</p>
                  <button 
                    onClick={() => handleNavigation('portfolio')}
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>

            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out" style={{transitionDelay: '200ms'}}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vastu-compliant bedroom interior design in Bhubaneswar Odisha"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vastu-Compliant Bedroom</h3>
                  <p className="text-gray-600 mb-4">Serene bedroom design following Vastu principles for peaceful sleep and positive energy.</p>
                  <button 
                    onClick={() => handleNavigation('portfolio')}
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <a 
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('portfolio');
              }}
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Stunning Interior Projects in Bhubaneswar
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ Schema JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does a 3BHK interior cost in Bhubaneswar?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "3BHK interior design in Bhubaneswar typically costs ₹8-15 lakhs depending on materials and customization level."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide vastu-compliant interior design services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all our interior designs follow vastu principles while maintaining modern aesthetics and functionality."
                    }
                  }
                ]
              })
            }}
          />

          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our interior design services in Bhubaneswar
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
              <div className="px-6 py-4 bg-gray-50 rounded-t-lg">
                <h3 className="font-semibold text-gray-900">How much does a 3BHK interior cost in Bhubaneswar?</h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600">3BHK interior design in Bhubaneswar typically costs ₹8-15 lakhs depending on materials and customization level. We provide detailed quotations with transparent pricing and no hidden costs.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out" style={{transitionDelay: '200ms'}}>
              <div className="px-6 py-4 bg-gray-50 rounded-t-lg">
                <h3 className="font-semibold text-gray-900">Do you provide vastu-compliant interior design services?</h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600">Yes, all our interior designs follow vastu principles while maintaining modern aesthetics and functionality. Our expert consultants ensure proper room placement, color schemes, and furniture arrangement for positive energy flow.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free consultation and bring your dream interiors to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ minHeight: '44px' }}
              >
                Book Your Free Interior Design Consultation
              </a>
              <a 
                href="tel:+919876543210" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300"
                style={{ minHeight: '44px' }}
              >
                Call Now: +91-98765-43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section - Above Footer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick FAQ</h2>
          
          <div className="space-y-3">
            {footerFAQs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <button
                  onClick={() => toggleFooterFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq}</span>
                  {openFooterFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFooterFAQ === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <a 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('faq');
                      }}
                      className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                    >
                      View detailed answer →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('faq');
              }}
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              View All Frequently Asked Questions →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;