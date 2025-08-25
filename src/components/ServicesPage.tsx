import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  ChefHat, 
  Compass, 
  CheckCircle, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Award,
  Users,
  HelpCircle
} from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';

interface FAQItem {
  question: string;
  answer: string;
}

const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openServiceFAQ, setOpenServiceFAQ] = useState<{[key: string]: number | null}>({
    residential: null,
    commercial: null,
    kitchen: null
  });
  const [openFooterFAQ, setOpenFooterFAQ] = useState<number | null>(null);

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

  const fadeInClass = `transition-all duration-700 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  const faqData: FAQItem[] = [
    {
      question: "What interior design services do you offer in Bhubaneswar?",
      answer: "We offer comprehensive interior design services including residential home interiors, commercial office design, modular kitchen installation, vastu-compliant planning, false ceiling design, wardrobe solutions, and complete turnkey interior projects across Bhubaneswar and Cuttack."
    },
    {
      question: "How much do interior design services cost in Bhubaneswar?",
      answer: "Our interior design packages start from ₹80,000 for basic home interiors. Costs vary based on space size, design complexity, and material selection. We provide transparent pricing with detailed quotations and no hidden charges for all projects in Bhubaneswar and Odisha."
    },
    {
      question: "Do you provide vastu-compliant interior design services?",
      answer: "Yes, we specialize in vastu-compliant interior design following traditional Vastu Shastra principles. Our designs ensure proper room placement, color schemes, and furniture arrangement to promote positive energy flow and harmony in your space."
    },
    {
      question: "What is included in your turnkey interior design projects?",
      answer: "Our turnkey interior projects include complete design consultation, 3D visualization, material procurement, civil work coordination, furniture installation, electrical fittings, and project management from concept to completion with guaranteed timelines."
    },
    {
      question: "How long does a complete home interior project take?",
      answer: "Typical residential interior projects take 45-90 days depending on scope and size. We provide detailed project timelines during consultation and ensure on-time delivery with regular progress updates throughout the interior design process."
    }
  ];

  const services = [
    {
      title: "Complete Home Interior Design Packages",
      description: "Transform your entire home with our comprehensive residential interior design services in Bhubaneswar. From living rooms to bedrooms, we create cohesive designs that reflect your lifestyle while incorporating Odisha's cultural elements and modern aesthetics.",
      icon: <Home className="w-8 h-8" />,
      features: ["3D Design Visualization", "Vastu-Compliant Planning", "Premium Material Selection", "Complete Furnishing"]
    },
    {
      title: "Modular Kitchen Design & Installation",
      description: "Experience the perfect blend of functionality and style with our modular kitchen design services in Bhubaneswar. We use premium brands like Hettich hardware and incorporate efficient storage solutions tailored to Indian cooking needs.",
      icon: <ChefHat className="w-8 h-8" />,
      features: ["German Hardware", "Smart Storage Solutions", "Granite & Quartz Countertops", "Chimney & Appliance Integration"]
    },
    {
      title: "Office Interior Design & Space Planning",
      description: "Boost productivity with our commercial interior design services in Cuttack and Bhubaneswar. We create inspiring work environments that enhance employee satisfaction while reflecting your brand identity and corporate values.",
      icon: <Briefcase className="w-8 h-8" />,
      features: ["Ergonomic Workstations", "Meeting Room Design", "Reception Area Planning", "Lighting & Acoustics"]
    },
    {
      title: "Vastu-Compliant Interior Planning",
      description: "Harmonize traditional Vastu Shastra principles with contemporary design aesthetics. Our vastu-compliant interior design ensures proper energy flow, room placement, and color coordination for prosperity and well-being.",
      icon: <Compass className="w-8 h-8" />,
      features: ["Traditional Vastu Principles", "Modern Design Integration", "Positive Energy Flow", "Prosperity Enhancement"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Free Consultation & Site Visit",
      description: "Initial discussion of requirements, space assessment, and design brief preparation"
    },
    {
      step: "2", 
      title: "3D Design & Visualization",
      description: "Detailed 3D renderings, material selection, and design approval process"
    },
    {
      step: "3",
      title: "Project Planning & Execution",
      description: "Timeline creation, material procurement, and coordinated implementation"
    },
    {
      step: "4",
      title: "Quality Check & Handover",
      description: "Final inspection, touch-ups, and complete project delivery with warranty"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleServiceFAQ = (category: string, index: number) => {
    setOpenServiceFAQ(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  const toggleFooterFAQ = (index: number) => {
    setOpenFooterFAQ(openFooterFAQ === index ? null : index);
  };

  const footerFAQs = [
    "How much does interior design cost in Bhubaneswar?",
    "What is the timeline for complete home interior design?",
    "Do you provide vastu-compliant interior design in Bhubaneswar?"
  ];

  const serviceFAQs = {
    residential: [
      {
        question: "How much does interior design cost in Bhubaneswar?",
        answer: "Complete home interior design typically costs ₹8–15 lakhs based on scope and materials."
      },
      {
        question: "Can you design small apartments and 1BHK homes in Bhubaneswar?",
        answer: "Yes, we create space-efficient, stylish interiors for 1BHK/2BHK homes with smart storage solutions."
      },
      {
        question: "What warranty do you provide on interior design work?",
        answer: "We offer a 2-year comprehensive warranty covering materials, workmanship, and maintenance support."
      },
      {
        question: "Do you handle turnkey interior design projects?",
        answer: "Yes, we manage everything from design and civil work to final installation and handover."
      },
      {
        question: "Is EMI financing available for interior design projects?",
        answer: "Yes, we provide flexible EMI options for projects above ₹5 lakhs through partner banks."
      }
    ],
    commercial: [
      {
        question: "Do you design commercial offices and retail spaces?",
        answer: "Yes, we specialize in offices, showrooms, and retail stores across Bhubaneswar and Cuttack."
      },
      {
        question: "What payment structure do you follow for interior projects?",
        answer: "Payments are milestone-based: 20% advance, 30% on design approval, 40% during execution, 10% on completion."
      },
      {
        question: "Which areas do you serve for interior design in Odisha?",
        answer: "We serve Bhubaneswar, Cuttack, Patia, Chandrasekharpur, Jaydev Vihar, Sahid Nagar, Rasulgarh, Vani Vihar, and CDA."
      },
      {
        question: "What is the best time to start interior design work in Bhubaneswar?",
        answer: "Post-monsoon (October–February) is ideal for timely material delivery and comfortable working conditions."
      },
      {
        question: "Can you renovate homes without major structural changes?",
        answer: "Yes, we offer cosmetic renovations focusing on finishes, furniture, and decor without structural work."
      }
    ],
    kitchen: [
      {
        question: "How much does a modular kitchen cost in Bhubaneswar?",
        answer: "Prices range from ₹2.5–8 lakhs depending on size, materials, and brand."
      },
      {
        question: "What brands do you partner with for modular kitchens?",
        answer: "We use Hettich, Blum, Ebco, Hafele, and select local manufacturers."
      },
      {
        question: "Do you provide after-sales service and maintenance for kitchens?",
        answer: "Yes, we offer a 2-year maintenance warranty and free service calls."
      },
      {
        question: "Can you work with existing furniture and fittings?",
        answer: "Yes, we integrate your current fittings to reduce costs and maintain design continuity."
      },
      {
        question: "Do you provide virtual interior design consultations?",
        answer: "Yes, we conduct online consultations with 3D walkthroughs and digital mood boards."
      }
    ]
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Interior Design Services Bhubaneswar",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Kalakruti Associates",
              "url": "https://kalakrutiassociates.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Interior Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Interior Design"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Interior Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Modular Kitchen Design"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 lg:py-20 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Interior Design Services in Bhubaneswar & Cuttack
            </h1>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-left max-w-4xl mx-auto">
              <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR - Hero Summary:</p>
              <p className="text-blue-700">Kalakruti Associates offers complete interior design services across Bhubaneswar and Cuttack, including residential home interiors, commercial office design, modular kitchens, and vastu-compliant planning with transparent pricing and guaranteed timelines.</p>
            </div>
          </div>

          {/* Opening SEO Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to Kalakruti Associates, your premier destination for comprehensive <strong>interior design services Bhubaneswar</strong> and surrounding areas. As leading specialists in <strong>residential interior design Bhubaneswar</strong> and <strong>commercial interior design Cuttack</strong>, we transform spaces into stunning, functional environments that reflect your unique style and needs. Our expertise spans <strong>modular kitchen design Bhubaneswar</strong>, <strong>office interior design Bhubaneswar</strong>, and <strong>luxury interior design Odisha</strong> projects, all incorporating <strong>vastu compliant interior design</strong> principles for optimal energy flow. We offer complete <strong>turnkey interior projects</strong> and specialized <strong>home renovation services Bhubaneswar</strong>, including custom <strong>wardrobe design Bhubaneswar</strong>, elegant <strong>false ceiling design</strong>, and comprehensive <strong>interior design packages Bhubaneswar</strong> tailored to every budget. From Patia to Chandrasekharpur, our designs seamlessly blend modern aesthetics with traditional Odisha elements, incorporating locally-sourced Odisha sandstone and beautiful Sambalpuri textiles to create spaces that truly represent the cultural richness of our region while meeting contemporary lifestyle demands.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Request a Free Quote
            </a>
            <a 
              href="/portfolio" 
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              View Our Completed Projects
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-12 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-green-800 mb-2">TL;DR - Services Summary:</p>
            <p className="text-green-700">We provide end-to-end interior design solutions including residential home interiors, commercial office spaces, modular kitchens, vastu-compliant designs, and specialized services like false ceiling and wardrobe design across Bhubaneswar, Cuttack, and Odisha.</p>
          </div>

          {/* Voice Search Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">🎤 Voice Search Friendly</h3>
            <p className="text-amber-700">"Hey Google, find the best interior designer near me in Bhubaneswar" - We're here to help transform your space with professional interior design services!</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">Residential Interior Design Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.slice(0, 2).map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-animate opacity-0 translate-x-8"
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
                >
                  Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>

          {/* Service Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Residential interior design services by Kalakruti Associates Bhubaneswar"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out" style={{transitionDelay: '200ms'}}>
              <img 
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modular kitchen design and installation services Bhubaneswar"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">Commercial Interior Design Services</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.slice(2, 4).map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-animate opacity-0 translate-x-8"
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
                >
                  Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>

          {/* Commercial Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial office interior design in Cuttack by Kalakruti Associates"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out" style={{transitionDelay: '200ms'}}>
              <img 
                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vastu-compliant interior design services in Odisha by Kalakruti Associates"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">Specialized Interior Design Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vastu-Compliant Interior Planning</h3>
              <p className="text-gray-600 mb-4">Traditional Vastu Shastra principles integrated with modern design for positive energy flow and prosperity.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Proper room placement and orientation</li>
                <li>• Color schemes for positive energy</li>
                <li>• Furniture arrangement optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '150ms'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">False Ceiling Design</h3>
              <p className="text-gray-600 mb-4">Elegant false ceiling solutions with integrated lighting and modern aesthetics for enhanced ambiance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• POP and Gypsum ceiling designs</li>
                <li>• LED lighting integration</li>
                <li>• Acoustic ceiling solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wardrobe Design Solutions</h3>
              <p className="text-gray-600 mb-4">Custom wardrobe designs with smart storage solutions and premium finishes for organized living.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Walk-in closet designs</li>
                <li>• Sliding door wardrobes</li>
                <li>• Modular storage systems</li>
              </ul>
            </div>
          </div>

          {/* Voice Search Callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">🔍 Looking for specific services?</h3>
            <p className="text-blue-700">"What is the cost of modular kitchen in Bhubaneswar?" or "Best vastu consultant for home interiors near me" - We provide transparent pricing and expert vastu guidance!</p>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Service-Specific FAQs
          </h2>

          {/* Residential FAQs */}
          <div className="mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Home className="w-6 h-6 text-orange-500 mr-3" />
              Residential FAQs
            </h3>
            <div className="space-y-4">
              {serviceFAQs.residential.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleServiceFAQ('residential', index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openServiceFAQ.residential === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openServiceFAQ.residential === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Commercial FAQs */}
          <div className="mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out" style={{transitionDelay: '200ms'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 text-orange-500 mr-3" />
              Commercial FAQs
            </h3>
            <div className="space-y-4">
              {serviceFAQs.commercial.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleServiceFAQ('commercial', index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openServiceFAQ.commercial === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openServiceFAQ.commercial === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Modular Kitchen FAQs */}
          <div className="mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out" style={{transitionDelay: '400ms'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ChefHat className="w-6 h-6 text-orange-500 mr-3" />
              Modular Kitchen FAQs
            </h3>
            <div className="space-y-4">
              {serviceFAQs.kitchen.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleServiceFAQ('kitchen', index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openServiceFAQ.kitchen === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openServiceFAQ.kitchen === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-12 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-purple-800 mb-2">TL;DR - Process Summary:</p>
            <p className="text-purple-700">Our turnkey interior design process includes free consultation, 3D visualization, project planning, and quality handover with warranty - ensuring seamless execution from concept to completion.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">Turnkey Interior Design Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="text-center scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Interior Design Journey
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">Why Choose Kalakruti Associates?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out">
              <div className="text-orange-500 mb-4 flex justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Design Team</h3>
              <p className="text-gray-600">Experienced interior designers with deep knowledge of local preferences and international design trends.</p>
            </div>
            
            <div className="text-center p-6 scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out" style={{transitionDelay: '150ms'}}>
              <div className="text-orange-500 mb-4 flex justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Guaranteed project completion within agreed timelines with regular progress updates and quality checks.</p>
            </div>
            
            <div className="text-center p-6 scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out" style={{transitionDelay: '300ms'}}>
              <div className="text-orange-500 mb-4 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with detailed quotations and no hidden costs for all interior design services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">Frequently Asked Questions</h2>
          
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

          {/* Voice Search Callout */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h3 className="text-lg font-semibold text-green-800 mb-2">💬 Have more questions?</h3>
            <p className="text-green-700">Ask us "How much does interior design cost in Bhubaneswar?" or "Which is the best interior designer in Cuttack?" - We're here to help with personalized answers!</p>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-12 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-orange-800 mb-2">TL;DR - Portfolio Summary:</p>
            <p className="text-orange-700">View our completed interior design projects across Bhubaneswar and Cuttack showcasing residential homes, commercial offices, modular kitchens, and vastu-compliant designs with before-after transformations.</p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Interior Design Work</h2>
            <p className="text-lg text-gray-600">Explore our portfolio of completed projects across Bhubaneswar, Cuttack, and Odisha</p>
          </div>

          <div className="text-center">
            <a 
              href="/portfolio" 
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Completed Projects
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Also <a href="#" onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
                setTimeout(() => {
                  const event = new CustomEvent('navigate', { detail: 'blog' });
                  window.dispatchEvent(event);
                }, 100);
              }} className="text-orange-500 hover:text-orange-600 font-medium">read design tips & trends</a> on our blog
            </p>
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
                      href="/frequently-asked-questions"
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
              href="/frequently-asked-questions"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              View All Frequently Asked Questions →
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free consultation and personalized interior design quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Request a Free Quote
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

export default ServicesPage;