import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Send,
  User,
  Home,
  Briefcase,
  ChefHat,
  Wrench,
  MessageCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Update page title and meta description
    document.title = "Contact Kalakruti Associates | Interior Design Bhubaneswar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Contact Bhubaneswar's top interior designers. Free consultation & instant quotes. Call +91-98765-43210 or WhatsApp now!");
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

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      subtitle: "Speak directly with our design experts",
      details: "Mon-Sat: 9AM-7PM",
      action: (
        <a 
          href="tel:+919876543210" 
          className="call-button inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full text-center"
        >
          +91-98765-43210
        </a>
      )
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Chat",
      subtitle: "Instant responses & project photos",
      details: "Available 24/7",
      action: (
        <a 
          href="https://wa.me/919876543210?text=Hi%20Kalakruti%20Associates%2C%20I%20need%20interior%20design%20consultation" 
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full text-center"
        >
          Chat on WhatsApp
        </a>
      )
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      subtitle: "Detailed project discussions",
      details: "Response within 2 hours",
      action: (
        <a 
          href="mailto:info@kalakrutiassociates.com"
          className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full text-center"
        >
          info@kalakrutiassociates.com
        </a>
      )
    }
  ];

  const serviceAreas = [
    "Bhubaneswar",
    "Cuttack", 
    "Patia",
    "Chandrasekharpur",
    "Jaydev Vihar",
    "Sahid Nagar",
    "Rasulgarh",
    "Vani Vihar"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Kalakruti Associates",
              "telephone": "+919876543210",
              "email": "info@kalakrutiassociates.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Design Plaza, Saheed Nagar",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751007",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Sa 09:00-19:00",
              "url": "https://kalakrutiassociates.com/contact"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 lg:py-20 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us | Your Dream Interior Awaits
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Ready to Transform Your Space?
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your free consultation today - no obligations, just expert guidance
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Free Consultation Now
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-500 mb-1">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-500 mb-1">2 Years</div>
              <div className="text-sm text-gray-600">Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Interior Design Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with our interior design experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-2">{method.subtitle}</p>
                <p className="text-sm text-gray-500 mb-6">{method.details}</p>
                {method.action}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your inquiry and will contact you within 2 hours to discuss your interior design project.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name"
                        autoComplete="name"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        autoComplete="tel"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Select Service Type</option>
                        <option value="residential">Residential Interior</option>
                        <option value="commercial">Commercial Interior</option>
                        <option value="modular-kitchen">Modular Kitchen</option>
                        <option value="renovation">Home Renovation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Budget *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">₹</span>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Project Budget Range</option>
                        <option value="3-5lakhs">₹3-5 Lakhs</option>
                        <option value="5-10lakhs">₹5-10 Lakhs</option>
                        <option value="10-20lakhs">₹10-20 Lakhs</option>
                        <option value="20plus">₹20+ Lakhs</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get Free Consultation
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Design Studio
            </h2>
            <p className="text-lg text-gray-600">
              Come see our design studio and discuss your project in person
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Studio Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <address className="text-gray-600 not-italic">
                        Kalakruti Associates<br />
                        123 Design Plaza, Saheed Nagar<br />
                        Bhubaneswar, Odisha 751007
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                      <p className="text-gray-600">
                        <a href="tel:+919876543210" className="hover:text-orange-500 transition-colors">+91-98765-43210</a><br />
                        <a href="mailto:info@kalakrutiassociates.com" className="hover:text-orange-500 transition-colors">info@kalakrutiassociates.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://maps.google.com/?q=123+Design+Plaza+Saheed+Nagar+Bhubaneswar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <div className="map-container rounded-lg overflow-hidden shadow-lg h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8663837650934!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kalakruti Associates Office Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Areas Across Odisha
            </h2>
            <p className="text-lg text-gray-600">
              We provide interior design services across these locations
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                We serve across <strong>Bhubaneswar</strong>, <strong>Cuttack</strong>, and surrounding areas including 
                <strong> Patia</strong>, <strong>Chandrasekharpur</strong>, <strong>Jaydev Vihar</strong>, 
                <strong> Sahid Nagar</strong>, <strong>Rasulgarh</strong>, <strong>Vani Vihar</strong>, 
                and <strong>CDA Sectors</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We serve additional locations across Odisha.
            </p>
            <a 
              href="tel:+919876543210" 
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Call us to check if we serve your location →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Interior Design Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ satisfied clients who transformed their spaces with Kalakruti Associates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210" 
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ minHeight: '44px' }}
              >
                Call Now: +91-98765-43210
              </a>
              <a 
                href="https://wa.me/919876543210?text=Hi%20Kalakruti%20Associates%2C%20I%20need%20interior%20design%20consultation"
                target="_blank"
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
    </div>
  );
};

export default ContactPage;