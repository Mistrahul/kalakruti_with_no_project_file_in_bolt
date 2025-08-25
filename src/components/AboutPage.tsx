import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ChevronDown,
  ChevronUp,
  Star,
  Target,
  Heart,
  Compass,
  Home,
  Eye,
  Briefcase
} from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';

interface FAQItem {
  question: string;
  answer: string;
}

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Update page title and meta description
    document.title = "About Kalakruti Associates | Interior Design Experts Bhubaneswar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Bhubaneswar's premier interior design firm. 15+ years experience, certified team, 500+ projects. Book free consultation today!");
    }
    
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
      question: "Do you provide vastu-compliant interior design in Bhubaneswar?",
      answer: "Yes, all our designs follow vastu principles—directional planning, energy flow, sacred geometry—while maintaining modern aesthetics."
    },
    {
      question: "What warranty do you provide on interior work?",
      answer: "We offer a comprehensive 2-year warranty on all materials and workmanship with free maintenance visits."
    },
    {
      question: "Can you work with existing furniture and fittings?",
      answer: "Absolutely—our team integrates your pieces into the new design to save cost and preserve your style."
    },
    {
      question: "Do you ensure quality control during project execution?",
      answer: "Yes, dedicated project managers, milestone approvals, site inspections, and client sign-offs guarantee quality."
    },
    {
      question: "Is virtual consultation available?",
      answer: "Yes, we offer online consultations, 3D walkthroughs, and digital mood boards for remote clients."
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Interior Designer",
      experience: "15+ Years",
      specialization: "Vastu-Compliant Design"
    },
    {
      name: "Priya Sharma",
      role: "Senior Interior Designer",
      experience: "10+ Years", 
      specialization: "Residential Interiors"
    },
    {
      name: "Amit Patel",
      role: "Commercial Design Specialist",
      experience: "8+ Years",
      specialization: "Office & Retail Spaces"
    }
  ];

  const awards = [
    {
      title: "Best Interior Design Firm 2024",
      organization: "Odisha Design Awards",
      year: "2024"
    },
    {
      title: "Top Vastu-Compliant Designer",
      organization: "Eastern India Interior Awards",
      year: "2023"
    },
    {
      title: "Excellence in Sustainable Design",
      organization: "Green Building Council Odisha",
      year: "2023"
    }
  ];

  const serviceHighlights = [
    {
      title: "Transparent Pricing & On-Time Guarantee",
      description: "Clear quotations with no hidden costs and guaranteed project completion within agreed timelines",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Design-to-Reality Assurance",
      description: "3D visualization accuracy guarantee - what you see is exactly what you get",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Bespoke, Personalized Designs",
      description: "Custom solutions tailored to your lifestyle, preferences, and cultural values",
      icon: <Heart className="w-8 h-8" />
    }
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
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Kalakruti Associates",
              "foundingDate": "2010",
              "numberOfEmployees": "10-15",
              "description": "Leading interior design company in Bhubaneswar, Odisha",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              },
              "award": [
                "Best Interior Design Firm 2024",
                "Top Vastu-Compliant Designer Odisha"
              ],
              "logo": "https://kalakrutiassociates.com/logo.jpg",
              "url": "https://kalakrutiassociates.com",
              "telephone": "+91-XXXXXXXXXX"
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
              About Kalakruti Associates – Bhubaneswar's Leading Interior Design Experts
            </h1>
            
            {/* TL;DR Summary Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 text-left max-w-4xl mx-auto">
              <p className="text-sm font-semibold text-amber-800 mb-2">TL;DR - About Us Summary:</p>
              <p className="text-amber-700">Our founder established Kalakruti Associates in 2010 with a vision to blend Odisha's rich cultural heritage and modern design. Today, our certified team delivers vastu-compliant, sustainable interiors across Bhubaneswar & Cuttack.</p>
            </div>
          </div>

          {/* Opening SEO Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to <strong>Kalakruti Associates</strong>, founded in 2010 with over 15 years of dedicated experience as Bhubaneswar's premier <strong>interior design company</strong>. Our journey began with a vision to create beautiful, functional spaces that honor Odisha's rich cultural heritage while embracing contemporary design principles. With <strong>500+ completed residential, commercial, luxury, and turnkey projects</strong> across Bhubaneswar and Cuttack, we have established ourselves as the <strong>best interior designers Odisha</strong> trusts for exceptional results. Our <strong>interior design experience Bhubaneswar</strong> spans prestigious neighborhoods including Patia, Chandrasekharpur, Jaydev Vihar, Sahid Nagar, Rasulgarh, Vani Vihar, and CDA Cuttack. We specialize in integrating deep <strong>Odisha cultural heritage</strong> elements such as traditional Pattachitra art, vibrant Sambalpuri textiles, and sacred temple motifs into modern interiors. As <strong>certified interior designers Odisha</strong>, our team of 15 skilled professionals includes <strong>vastu expert interior designers</strong>, project managers, and design consultants who ensure every project follows <strong>vastu-compliant planning</strong> principles. We are committed to <strong>sustainable interior design Bhubaneswar</strong> practices, utilizing locally-sourced Odisha sandstone, premium teak wood, and low-VOC paints to create environmentally responsible spaces that promote health and well-being while celebrating our regional identity.
            </p>
          </div>

          {/* Voice Search Callout */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">🎤 Voice Search Friendly</h3>
            <p className="text-green-700">Looking for trusted interior designers? Learn about our 15+ years of expertise in Bhubaneswar's top neighborhoods.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Your Free Interior Design Consultation
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

      {/* Our Journey Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Interior Design Journey in Bhubaneswar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Founded with a Vision for Beautiful, Functional Spaces</h3>
              <p className="text-gray-600 mb-6">
                <strong>Kalakruti Associates</strong> was established in 2010 by our founder with a clear mission: to transform the interior design landscape in Bhubaneswar by creating spaces that seamlessly blend traditional Odisha aesthetics with contemporary functionality. Our <strong>interior design company Bhubaneswar history</strong> is rooted in a deep appreciation for local craftsmanship and cultural heritage.
              </p>
              <p className="text-gray-600 mb-6">
                Over the past 15 years, we have grown from a small design studio to Bhubaneswar's most trusted interior design firm, completing over 500 projects across residential, commercial, and luxury segments. Our commitment to excellence, transparent pricing, and on-time delivery has earned us recognition as the <strong>best interior designers Odisha</strong> residents rely on for their dream spaces.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kalakruti Associates interior design team in Bhubaneswar office"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Interior Design Team
            </h2>
            <h3 className="text-xl text-orange-600 font-semibold mb-8">
              Certified Designers & Vastu Consultants
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of <strong>certified interior designers Odisha</strong> brings together diverse expertise in residential design, commercial spaces, vastu consultation, and project management to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-500">{member.specialization}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Founder of Kalakruti Associates interior design company Bhubaneswar"
              className="w-full max-w-4xl mx-auto h-64 md:h-80 object-cover rounded-lg shadow-lg scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kalakruti Associates?
            </h2>
            <p className="text-lg text-gray-600">
              Our core service highlights that set us apart in the interior design industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Design Philosophy: Blending Tradition with Innovation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior design philosophy and approach by Kalakruti Associates"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainable, Cultural, and Functional Design</h3>
              <p className="text-gray-600 mb-6">
                Our <strong>interior design philosophy</strong> is built on three fundamental pillars: sustainability, cultural authenticity, and functional excellence. We believe that great design should not only be beautiful but also environmentally responsible and deeply connected to local heritage.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Compass className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Vastu-Compliant Planning</h4>
                    <p className="text-gray-600 text-sm">Every design follows traditional Vastu principles for positive energy flow and harmony</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sustainable Materials</h4>
                    <p className="text-gray-600 text-sm">Locally-sourced Odisha sandstone, teak wood, and eco-friendly finishes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cultural Integration</h4>
                    <p className="text-gray-600 text-sm">Incorporating Pattachitra art, Sambalpuri textiles, and temple motifs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition in Interior Design Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-orange-200 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-1">{award.organization}</p>
                <p className="text-sm text-orange-600 font-semibold">{award.year}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Interior design awards received by Kalakruti Associates in Odisha"
              className="w-full max-w-4xl mx-auto h-64 md:h-80 object-cover rounded-lg shadow-lg scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Us – FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our interior design company and services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg bg-white scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out"
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

          <div className="text-center mt-8">
            <a 
              href="/frequently-asked-questions"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              View All FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
            <p className="text-lg text-gray-600">Discover our complete range of services and resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8">
              <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600 mb-4 text-sm">Complete interior design solutions for residential and commercial spaces.</p>
              <a 
                href="/services" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Explore our complete interior design services →
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '150ms'}}>
              <Eye className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600 mb-4 text-sm">Browse our gallery of completed interior design projects.</p>
              <a 
                href="/portfolio" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                View our completed projects →
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4 text-sm">Ready to start your interior design project? Get in touch today.</p>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Book your free interior design consultation →
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '450ms'}}>
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Design Blog</h3>
              <p className="text-gray-600 mb-4 text-sm">Get inspired with our latest design trends and expert tips.</p>
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
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Read expert design tips & trends →
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
              Ready to Work with Bhubaneswar's Leading Interior Designers?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ satisfied clients who trust Kalakruti Associates for their dream spaces
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

export default AboutPage;