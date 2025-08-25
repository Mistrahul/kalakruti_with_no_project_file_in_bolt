import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Home,
  Briefcase,
  ChefHat,
  Clock,
  DollarSign,
  Shield,
  HelpCircle
} from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: React.ReactNode;
  faqs: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "General Interior Design Questions",
    icon: <HelpCircle className="w-6 h-6" />,
    faqs: [
      {
        question: "How much does interior design cost in Bhubaneswar?",
        answer: "Interior design costs in Bhubaneswar range from ₹1,500-3,000 per sq ft for basic packages to ₹3,000-6,000 per sq ft for premium designs, with complete home projects typically costing ₹8-25 lakhs."
      },
      {
        question: "What is the timeline for complete home interior design?",
        answer: "Complete home interior design takes 45-90 days from design approval to project completion, including 15 days for design development, 60 days for execution, and 15 days for finishing touches."
      },
      {
        question: "Which areas do you serve for interior design in Odisha?",
        answer: "We serve Bhubaneswar, Cuttack, and expanding across Odisha including neighborhoods like Patia, Chandrasekharpur, Jaydev Vihar, Sahid Nagar, Rasulgarh, Vani Vihar, and CDA Cuttack."
      },
      {
        question: "Is free consultation available for interior design projects?",
        answer: "Yes, we provide complimentary initial consultation, site visits, and basic design concepts for all interior design projects in Bhubaneswar and Cuttack with no obligation."
      },
      {
        question: "What is the best time to start interior design work in Bhubaneswar?",
        answer: "Post-monsoon months (October to February) are ideal for interior work in Bhubaneswar due to favorable weather conditions, faster material delivery, and optimal working conditions."
      }
    ]
  },
  {
    title: "Residential Interior Design FAQs",
    icon: <Home className="w-6 h-6" />,
    faqs: [
      {
        question: "Do you provide vastu-compliant interior design in Bhubaneswar?",
        answer: "Yes, all our interior designs follow vastu principles including proper directional placement, energy flow optimization, and sacred geometry while maintaining modern aesthetics and functionality."
      },
      {
        question: "Can you design small apartments and 1BHK homes in Bhubaneswar?",
        answer: "Yes, we specialize in space-efficient designs for small apartments, 1BHK/2BHK homes with smart storage solutions, multi-functional furniture, and optimal space utilization starting from ₹3-5 lakhs."
      },
      {
        question: "Do you handle turnkey interior design projects?",
        answer: "Yes, we provide complete turnkey interior solutions covering design, civil work, electrical, plumbing, painting, furniture, and installation with single-point responsibility from start to finish."
      },
      {
        question: "Can you work with existing furniture and fittings?",
        answer: "Yes, we can redesign spaces incorporating your existing furniture, fittings, and decor items to reduce project costs while achieving a cohesive new look."
      },
      {
        question: "Can you renovate homes without major structural changes?",
        answer: "Yes, we offer cosmetic renovations including painting, furniture updates, lighting changes, and decor makeovers without touching walls or major structures."
      },
      {
        question: "Can you help with interior design for rental properties?",
        answer: "Yes, we offer cost-effective, reversible interior solutions perfect for rental apartments including removable fixtures, modular furniture, and tenant-friendly designs."
      },
      {
        question: "What materials do you use for monsoon-resistant interiors?",
        answer: "We use moisture-resistant materials like marine plywood, anti-fungal paints, waterproof laminates, and proper ventilation systems suitable for Bhubaneswar's humid climate."
      },
      {
        question: "How do you incorporate Odia culture in modern interior design?",
        answer: "We integrate traditional Odisha elements like Pattachitra motifs, Sambalpuri textiles, brass work, stone carvings, and temple-inspired designs in contemporary settings."
      }
    ]
  },
  {
    title: "Commercial Interior Design Questions",
    icon: <Briefcase className="w-6 h-6" />,
    faqs: [
      {
        question: "Do you design commercial offices and retail spaces?",
        answer: "Yes, we design corporate offices, retail stores, restaurants, clinics, showrooms, and commercial spaces with focus on functionality, brand identity, and customer experience."
      },
      {
        question: "What sustainable practices do you follow in interior design?",
        answer: "We use eco-friendly materials, energy-efficient lighting, local sourcing, waste reduction, VOC-free paints, and sustainable design practices for environmental responsibility."
      },
      {
        question: "Do you design interiors for specific room types only?",
        answer: "Yes, we offer room-specific interior design including kitchen-only, bedroom-only, living room-only, or bathroom-only makeovers with focused design solutions."
      }
    ]
  },
  {
    title: "Modular Kitchen & Wardrobe FAQs",
    icon: <ChefHat className="w-6 h-6" />,
    faqs: [
      {
        question: "How much does a modular kitchen cost in Bhubaneswar?",
        answer: "Modular kitchen costs in Bhubaneswar range from ₹2.5-8 lakhs depending on size, materials, and brand selection, with basic packages starting at ₹1,500 per sq ft and premium options at ₹4,000+ per sq ft."
      },
      {
        question: "What brands do you partner with for modular kitchens?",
        answer: "We partner with premium brands like Hettich, Blum, Ebco, Hafele, Sleek, and Godrej Interio along with certified local manufacturers for diverse budget options."
      },
      {
        question: "How do you maintain modular kitchens in coastal climate?",
        answer: "We provide maintenance schedules including daily care routines, monthly hardware checks, seasonal deep cleaning, and specific warranty guidelines for coastal climate protection."
      },
      {
        question: "What is the minimum project size you handle?",
        answer: "We handle projects from single-room makeovers starting at ₹50,000 to complete luxury villa interiors worth ₹50+ lakhs with equal attention to quality."
      }
    ]
  },
  {
    title: "Project Process & Timeline Questions",
    icon: <Clock className="w-6 h-6" />,
    faqs: [
      {
        question: "Do you provide 3D design visualization and walkthroughs?",
        answer: "Yes, we create detailed 3D visualizations, virtual walkthroughs, and photorealistic renders for all projects before execution to help clients visualize the final outcome."
      },
      {
        question: "How do you ensure quality control during interior execution?",
        answer: "We ensure quality through dedicated project managers, regular site inspections, milestone-based approvals, quality checklists, and client sign-offs at each project phase."
      },
      {
        question: "How do you handle project delays and timeline issues?",
        answer: "We provide realistic timelines with buffer periods, maintain transparent communication, offer alternative solutions, and compensate for delays beyond our control."
      },
      {
        question: "Do you provide virtual interior design consultations?",
        answer: "Yes, we offer online consultations, virtual site visits using video calls, digital mood boards, and remote design presentations for clients across Odisha."
      },
      {
        question: "How experienced is your interior design team in Bhubaneswar?",
        answer: "Our team has 15+ years combined experience in Bhubaneswar market with 50+ completed projects, certified designers, and deep local market knowledge."
      }
    ]
  },
  {
    title: "Pricing & Payment FAQs",
    icon: <DollarSign className="w-6 h-6" />,
    faqs: [
      {
        question: "What payment structure do you follow for interior projects?",
        answer: "We follow milestone-based payments: 20% advance booking, 30% on design approval, 40% during material procurement and execution, 10% on project completion and handover."
      },
      {
        question: "Is EMI financing available for interior design projects?",
        answer: "Yes, we offer flexible EMI options and financing solutions through partner banks for interior design projects above ₹5 lakhs with easy approval process."
      },
      {
        question: "Can you match interior design to existing home architecture?",
        answer: "Yes, we specialize in creating interior designs that complement existing architectural styles whether traditional Odia, colonial, contemporary, or modern structures."
      }
    ]
  },
  {
    title: "Warranty & Support Questions",
    icon: <Shield className="w-6 h-6" />,
    faqs: [
      {
        question: "What warranty do you provide on interior design work?",
        answer: "We offer comprehensive 2-year warranty covering all interior work, materials, fittings, and workmanship with free maintenance and repair services during the warranty period."
      },
      {
        question: "Do you provide after-sales service and maintenance?",
        answer: "Yes, we offer comprehensive after-sales service including periodic maintenance, repair support, and annual check-ups for 2 years post-project completion."
      }
    ]
  }
];

const FAQPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openSections, setOpenSections] = useState<{[key: string]: number | null}>({});
  const [filteredSections, setFilteredSections] = useState<FAQSection[]>(faqSections);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Update page title and meta description
    document.title = "Interior Design FAQ Bhubaneswar | Kalakruti Associates";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Interior design FAQ Bhubaneswar - costs, timelines, vastu compliance & warranties. Get expert answers from Kalakruti Associates.");
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

  // Filter FAQs based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSections(faqSections);
    } else {
      const filtered = faqSections.map(section => ({
        ...section,
        faqs: section.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(section => section.faqs.length > 0);
      setFilteredSections(filtered);
    }
  }, [searchTerm, faqSections]);

  const toggleFAQ = (sectionTitle: string, index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionTitle]: prev[sectionTitle] === index ? null : index
    }));
  };

  // Generate all FAQs for JSON-LD schema
  const allFAQs = faqSections.flatMap(section => section.faqs);

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does interior design cost in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interior design costs in Bhubaneswar range from ₹1,500-3,000 per sq ft for basic packages to ₹3,000-6,000 per sq ft for premium designs, with complete home projects typically costing ₹8-25 lakhs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the timeline for complete home interior design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complete home interior design takes 45-90 days from design approval to project completion, including 15 days for design development, 60 days for execution, and 15 days for finishing touches."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve for interior design in Odisha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Bhubaneswar, Cuttack, and expanding across Odisha including neighborhoods like Patia, Chandrasekharpur, Jaydev Vihar, Sahid Nagar, Rasulgarh, Vani Vihar, and CDA Cuttack."
      }
    },
    {
      "@type": "Question",
      "name": "Is free consultation available for interior design projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide complimentary initial consultation, site visits, and basic design concepts for all interior design projects in Bhubaneswar and Cuttack with no obligation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best time to start interior design work in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Post-monsoon months (October to February) are ideal for interior work in Bhubaneswar due to favorable weather conditions, faster material delivery, and optimal working conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide vastu-compliant interior design in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our interior designs follow vastu principles including proper directional placement, energy flow optimization, and sacred geometry while maintaining modern aesthetics and functionality."
      }
    },
    {
      "@type": "Question",
      "name": "Can you design small apartments and 1BHK homes in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in space-efficient designs for small apartments, 1BHK/2BHK homes with smart storage solutions, multi-functional furniture, and optimal space utilization starting from ₹3-5 lakhs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle turnkey interior design projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide complete turnkey interior solutions covering design, civil work, electrical, plumbing, painting, furniture, and installation with single-point responsibility from start to finish."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with existing furniture and fittings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can redesign spaces incorporating your existing furniture, fittings, and decor items to reduce project costs while achieving a cohesive new look."
      }
    },
    {
      "@type": "Question",
      "name": "Can you renovate homes without major structural changes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer cosmetic renovations including painting, furniture updates, lighting changes, and decor makeovers without touching walls or major structures."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with interior design for rental properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer cost-effective, reversible interior solutions perfect for rental apartments including removable fixtures, modular furniture, and tenant-friendly designs."
      }
    },
    {
      "@type": "Question",
      "name": "What materials do you use for monsoon-resistant interiors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use moisture-resistant materials like marine plywood, anti-fungal paints, waterproof laminates, and proper ventilation systems suitable for Bhubaneswar's humid climate."
      }
    },
    {
      "@type": "Question",
      "name": "How do you incorporate Odia culture in modern interior design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate traditional Odisha elements like Pattachitra motifs, Sambalpuri textiles, brass work, stone carvings, and temple-inspired designs in contemporary settings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you design commercial offices and retail spaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we design corporate offices, retail stores, restaurants, clinics, showrooms, and commercial spaces with focus on functionality, brand identity, and customer experience."
      }
    },
    {
      "@type": "Question",
      "name": "What sustainable practices do you follow in interior design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use eco-friendly materials, energy-efficient lighting, local sourcing, waste reduction, VOC-free paints, and sustainable design practices for environmental responsibility."
      }
    },
    {
      "@type": "Question",
      "name": "Do you design interiors for specific room types only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer room-specific interior design including kitchen-only, bedroom-only, living room-only, or bathroom-only makeovers with focused design solutions."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a modular kitchen cost in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modular kitchen costs in Bhubaneswar range from ₹2.5-8 lakhs depending on size, materials, and brand selection, with basic packages starting at ₹1,500 per sq ft and premium options at ₹4,000+ per sq ft."
      }
    },
    {
      "@type": "Question",
      "name": "What brands do you partner with for modular kitchens?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We partner with premium brands like Hettich, Blum, Ebco, Hafele, Sleek, and Godrej Interio along with certified local manufacturers for diverse budget options."
      }
    },
    {
      "@type": "Question",
      "name": "How do you maintain modular kitchens in coastal climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide maintenance schedules including daily care routines, monthly hardware checks, seasonal deep cleaning, and specific warranty guidelines for coastal climate protection."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum project size you handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle projects from single-room makeovers starting at ₹50,000 to complete luxury villa interiors worth ₹50+ lakhs with equal attention to quality."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide 3D design visualization and walkthroughs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we create detailed 3D visualizations, virtual walkthroughs, and photorealistic renders for all projects before execution to help clients visualize the final outcome."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure quality control during interior execution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We ensure quality through dedicated project managers, regular site inspections, milestone-based approvals, quality checklists, and client sign-offs at each project phase."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle project delays and timeline issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide realistic timelines with buffer periods, maintain transparent communication, offer alternative solutions, and compensate for delays beyond our control."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide virtual interior design consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer online consultations, virtual site visits using video calls, digital mood boards, and remote design presentations for clients across Odisha."
      }
    },
    {
      "@type": "Question",
      "name": "How experienced is your interior design team in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team has 15+ years combined experience in Bhubaneswar market with 50+ completed projects, certified designers, and deep local market knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "What payment structure do you follow for interior projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We follow milestone-based payments: 20% advance booking, 30% on design approval, 40% during material procurement and execution, 10% on project completion and handover."
      }
    },
    {
      "@type": "Question",
      "name": "Is EMI financing available for interior design projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer flexible EMI options and financing solutions through partner banks for interior design projects above ₹5 lakhs with easy approval process."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match interior design to existing home architecture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in creating interior designs that complement existing architectural styles whether traditional Odia, colonial, contemporary, or modern structures."
      }
    },
    {
      "@type": "Question",
      "name": "What warranty do you provide on interior design work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive 2-year warranty covering all interior work, materials, fittings, and workmanship with free maintenance and repair services during the warranty period."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide after-sales service and maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive after-sales service including periodic maintenance, repair support, and annual check-ups for 2 years post-project completion."
      }
    }
  ]
})
        }}
      />

      {/* Back to Home Link */}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 lg:py-20 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions | Interior Design in Bhubaneswar & Odisha
            </h1>
            
            {/* TL;DR Summary Box */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 text-left max-w-4xl mx-auto">
              <p className="text-sm font-semibold text-green-800 mb-2">Quick Answers:</p>
              <p className="text-green-700">Interior design costs ₹1,500-6,000 per sq ft. Complete projects take 45-90 days. We provide 2-year warranty. Free consultations available across Bhubaneswar & Cuttack.</p>
            </div>
          </div>

          {/* Opening SEO Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to our comprehensive <strong>interior design FAQ Bhubaneswar</strong> resource, addressing the most common <strong>interior design questions answered</strong> by our expert team at Kalakruti Associates. Drawing from over 15 years of client interactions across Bhubaneswar, Cuttack, and Odisha, we've compiled detailed answers covering <strong>interior design pricing</strong>, project timelines, <strong>vastu compliant interior design</strong> principles, material selections, warranty coverage, and local considerations specific to our region\'s climate and cultural preferences. Whether you\'re planning a complete home makeover, seeking <strong>modular kitchen cost Bhubaneswar</strong> information, understanding <strong>interior design timeline</strong> expectations, or exploring <strong>warranty interior work</strong> coverage, this FAQ guide provides transparent, detailed information to help homeowners make informed decisions. Our responses reflect real project experiences from neighborhoods including Patia, Chandrasekharpur, Jaydev Vihar, and Sahid Nagar, ensuring practical, locally-relevant guidance. We also offer <strong>free consultation Bhubaneswar</strong> services to discuss your specific requirements in detail, providing personalized answers beyond these general guidelines.
            </p>
          </div>

          {/* Voice Search Callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">🎤 Voice Search Friendly</h3>
            <p className="text-blue-700">Looking for quick answers about interior design costs, timelines, or vastu compliance? Find everything you need to know below.</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs... (e.g., 'cost', 'timeline', 'vastu')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No FAQs found matching your search. Try different keywords or browse all categories below.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredSections.map((section, sectionIndex) => (
                <div 
                  key={section.title}
                  className="scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out"
                  style={{transitionDelay: `${sectionIndex * 100}ms`}}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-orange-500 mr-3">{section.icon}</span>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => (
                      <div 
                        key={faqIndex}
                        className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <button
                          onClick={() => toggleFAQ(section.title, faqIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          {openSections[section.title] === faqIndex ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {openSections[section.title] === faqIndex && (
                          <div className="px-6 pb-4 border-t border-gray-100">
                            <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 scale-95 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-bold text-white mb-4">
              Didn't Find Your Answer?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our interior design experts are here to help. Schedule your free consultation today or call us directly for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Free Consultation
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

      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
            <p className="text-lg text-gray-600">Discover our complete range of services and resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8">
              <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600 mb-4 text-sm">Complete interior design solutions for residential and commercial spaces.</p>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    const event = new CustomEvent('navigate', { detail: 'services' });
                    window.dispatchEvent(event);
                  }, 100);
                }}
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Explore our interior design services →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '150ms'}}>
              <Home className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600 mb-4 text-sm">Browse our gallery of completed interior design projects.</p>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    const event = new CustomEvent('navigate', { detail: 'portfolio' });
                    window.dispatchEvent(event);
                  }, 100);
                }}
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                View our completed projects →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4 text-sm">Ready to start your interior design project? Get in touch today.</p>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Book your free consultation →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '450ms'}}>
              <HelpCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
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
                Read our design tips and trends →
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

export default FAQPage;