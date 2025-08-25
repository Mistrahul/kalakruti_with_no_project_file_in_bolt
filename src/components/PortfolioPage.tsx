import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  ChefHat, 
  Eye, 
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Users,
  Award
} from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';

interface FAQItem {
  question: string;
  answer: string;
}

const PortfolioPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Intersection Observer for scroll animations
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

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const faqData: FAQItem[] = [
    {
      question: "Do you provide 3D design visualization and walkthroughs?",
      answer: "Yes, we create detailed 3D visualizations, virtual walkthroughs, and photorealistic renders for all projects before execution to help clients visualize the final outcome."
    },
    {
      question: "How do you ensure quality control during interior execution?",
      answer: "We ensure quality through dedicated project managers, regular site inspections, milestone-based approvals, quality checklists, and client sign-offs at each project phase."
    },
    {
      question: "Can you work with existing furniture and fittings?",
      answer: "Yes, we can redesign spaces incorporating your existing furniture, fittings, and decor items to reduce project costs while achieving a cohesive new look."
    },
    {
      question: "Do you provide after-sales service and maintenance?",
      answer: "Yes, we offer comprehensive after-sales service including periodic maintenance, repair support, and annual check-ups for 2 years post-project completion."
    },
    {
      question: "Is free consultation available for interior design projects?",
      answer: "Yes, we provide complimentary initial consultation, site visits, and basic design concepts for all interior design projects in Bhubaneswar and Cuttack with no obligation."
    }
  ];

  const portfolioProjects = [
    {
      title: "Luxury Villa Interior - Chandrasekharpur",
      category: "Residential",
      location: "Chandrasekharpur, Bhubaneswar",
      area: "4500 sq ft",
      year: "2024",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Luxury villa interior design portfolio project in Chandrasekharpur Bhubaneswar"
    },
    {
      title: "Modern Apartment Transformation - Patia",
      category: "Residential", 
      location: "Patia, Bhubaneswar",
      area: "1800 sq ft",
      year: "2024",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern apartment interior design portfolio project in Patia Bhubaneswar"
    },
    {
      title: "Corporate Office Interior - Cuttack",
      category: "Commercial",
      location: "Cuttack Business District",
      area: "3200 sq ft", 
      year: "2024",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Commercial office interior design portfolio project in Bhubaneswar"
    },
    {
      title: "Premium Modular Kitchen - Sahid Nagar",
      category: "Kitchen",
      location: "Sahid Nagar, Bhubaneswar", 
      area: "280 sq ft",
      year: "2024",
      image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modular kitchen interior design portfolio project in Cuttack"
    }
  ];

  const neighborhoods = [
    { name: "Chandrasekharpur", projects: 12, type: "Luxury Villas & Apartments" },
    { name: "Patia", projects: 8, type: "Modern Apartments" },
    { name: "Jaydev Vihar", projects: 6, type: "Residential & Commercial" },
    { name: "Sahid Nagar", projects: 9, type: "Premium Interiors" },
    { name: "Cuttack", projects: 15, type: "Commercial & Residential" }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Interior Design Portfolio",
            "description": "Completed interior design projects by Kalakruti Associates",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Interior Design Projects",
              "numberOfItems": "50+"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Back to Home Link */}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 lg:py-20 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Interior Design Portfolio – Stunning Projects Across Bhubaneswar & Cuttack
            </h1>
            
            {/* TL;DR Summary Box */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 text-left max-w-4xl mx-auto">
              <p className="text-sm font-semibold text-orange-800 mb-2">TL;DR - Portfolio Summary:</p>
              <p className="text-orange-700">Our portfolio showcases 50+ completed interior projects across Bhubaneswar neighborhoods including luxury villas in Chandrasekharpur and modern apartments in Patia.</p>
            </div>
          </div>

          {/* Opening SEO Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Explore our comprehensive <strong>interior design portfolio Bhubaneswar</strong> featuring over 50 <strong>completed interior projects Cuttack</strong> and across Odisha. Our <strong>interior design gallery Odisha</strong> showcases stunning transformations in prestigious neighborhoods including <strong>luxury interior projects Chandrasekharpur</strong>, modern <strong>apartment interior design Patia</strong>, sophisticated spaces in Jaydev Vihar, and premium developments in Sahid Nagar. From elegant <strong>villa interior design Bhubaneswar</strong> to contemporary office spaces, our portfolio demonstrates our expertise in creating functional, aesthetically pleasing environments that respect local lifestyle preferences and climate considerations. Each project in our <strong>modular kitchen gallery</strong> and residential collection reflects our commitment to quality, innovation, and cultural sensitivity. Our <strong>before after interior design Bhubaneswar</strong> transformations highlight our ability to balance traditional Odisha aesthetics with modern functionality, creating spaces that truly resonate with our clients' vision while incorporating sustainable design practices and locally-sourced materials wherever possible.
            </p>
          </div>

          {/* Voice Search Callout */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">🏠 Neighborhood Portfolio</h3>
            <p className="text-green-700">Want to see our work in your neighborhood? We've completed projects in Patia, Chandrasekharpur, and Jaydev Vihar.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Interior Design Projects
            </h2>
            <p className="text-lg text-gray-600">
              Discover our latest residential and commercial transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Home className="w-4 h-4 mr-2" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="/contact" 
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    View Project Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Residential Interior Design Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Luxury Villa Interiors in Chandrasekharpur</h3>
              <p className="text-gray-600 mb-6">
                Our luxury villa projects in Chandrasekharpur showcase sophisticated design elements that blend contemporary aesthetics with traditional Odisha craftsmanship. Each villa interior is meticulously planned to maximize space utilization while maintaining elegant proportions.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Premium material selection and finishes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Vastu-compliant room layouts and orientations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Custom furniture and lighting solutions
                </li>
              </ul>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Explore Villa Projects →
              </a>
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury villa interior design portfolio project in Chandrasekharpur Bhubaneswar"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern apartment interior design portfolio project in Patia Bhubaneswar"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out" style={{transitionDelay: '200ms'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modern Apartment Transformations in Patia</h3>
              <p className="text-gray-600 mb-6">
                Our apartment interior projects in Patia focus on maximizing functionality within compact spaces. We specialize in creating open, airy environments that feel larger than their actual footprint through strategic design choices.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Space optimization and smart storage solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Modern color palettes and lighting design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Multi-functional furniture and layouts
                </li>
              </ul>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                View Apartment Projects →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Commercial Interior Design Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office & Retail Projects in Cuttack</h3>
              <p className="text-gray-600 mb-6">
                Our commercial interior projects in Cuttack and Bhubaneswar create productive work environments that enhance employee satisfaction and reflect brand identity. From corporate offices to retail showrooms, we design spaces that drive business success.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Office Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">8+</div>
                  <div className="text-sm text-gray-600">Retail Spaces</div>
                </div>
              </div>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Explore Commercial Projects →
              </a>
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial office interior design portfolio project in Bhubaneswar"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modular Kitchen Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Modular Kitchen Design Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modular kitchen interior design portfolio project in Cuttack"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Modular Kitchen Solutions</h3>
              <p className="text-gray-600 mb-6">
                Our modular kitchen designs combine functionality with aesthetic appeal, incorporating the latest in kitchen technology and storage solutions. Each kitchen is tailored to Indian cooking needs while maintaining contemporary design standards.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">German Hardware</span>
                  <ChefHat className="w-5 h-5 text-orange-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Smart Storage Solutions</span>
                  <Home className="w-5 h-5 text-orange-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Premium Countertops</span>
                  <Award className="w-5 h-5 text-orange-500" />
                </div>
              </div>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                View Kitchen Gallery →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Before & After Interior Transformations
          </h2>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 text-center scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dramatic Space Transformations</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Witness the incredible transformations we've achieved across Bhubaneswar and Cuttack. Our before and after gallery showcases how thoughtful design can completely reimagine any space.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600">Completed Transformations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">2 Years</div>
                <div className="text-gray-600">Warranty Coverage</div>
              </div>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Before & After Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects by Neighborhood */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Featured Projects by Neighborhood
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{neighborhood.name}</h3>
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-gray-600 mb-4">{neighborhood.type}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">{neighborhood.projects}</span>
                  <span className="text-sm text-gray-500">Projects Completed</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Find Projects in Your Area
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
            <p className="text-lg text-gray-600">Discover our complete range of services and resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8">
              <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600 mb-4">Explore our complete interior design services including residential, commercial, and specialized solutions.</p>
              <a 
                href="/services" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Explore Our Complete Interior Design Services →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '150ms'}}>
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Your Project</h3>
              <p className="text-gray-600 mb-4">Ready to transform your space? Get in touch for a free consultation and personalized design proposal.</p>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Start Your Interior Design Project Today →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
              <Eye className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design Inspiration</h3>
              <p className="text-gray-600 mb-4">Get inspired with our latest design trends, tips, and insights from our expert interior designers.</p>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    const event = new CustomEvent('navigate', { detail: 'blog' });
                    window.dispatchEvent(event);
                  }, 100);
                }}
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Read Our Interior Design Tips and Inspiration →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 50+ satisfied clients across Bhubaneswar and Cuttack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Consultation
              </a>
              <a 
                href="tel:+91-XXXXXXXXXX" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300"
              >
                Call Now: +91-XXXXXXXXXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />
    </div>
  );
};

export default PortfolioPage;