import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Phone, 
  MessageCircle, 
  ChevronDown,
  ChevronUp,
  BookOpen,
  TrendingUp,
  Home,
  Compass,
  DollarSign,
  Palette,
  ArrowRight,
  Star
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
  featured?: boolean;
  pillar?: boolean;
  wordCount?: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

const BlogPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Update page title and meta description
    document.title = "Interior Design Blog Bhubaneswar | Tips & Trends | Kalakruti";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Expert interior design blog for Bhubaneswar homes—vastu tips, trends, cost guides, and cultural décor ideas by Kalakruti Associates.");
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
      question: "How much does interior design cost in Bhubaneswar?",
      answer: "Interior design costs in Bhubaneswar typically range from ₹80,000 for basic home interiors to ₹15+ lakhs for luxury projects, depending on space size, materials, and customization level."
    },
    {
      question: "What is the best time to start interior design work in Bhubaneswar?",
      answer: "Post-monsoon season (October to February) is ideal for interior design work in Bhubaneswar due to favorable weather conditions and better material availability."
    },
    {
      question: "Can you design small apartments and 1BHK homes?",
      answer: "Yes, we specialize in small-space interior design with smart storage solutions, multi-functional furniture, and space optimization techniques perfect for 1BHK and 2BHK homes."
    },
    {
      question: "How do you finance an interior project?",
      answer: "We offer flexible EMI options through partner banks for projects above ₹5 lakhs, along with milestone-based payment plans to make interior design affordable."
    },
    {
      question: "Do you provide vastu-compliant interior design services?",
      answer: "Yes, all our designs follow traditional Vastu Shastra principles while maintaining modern aesthetics, ensuring positive energy flow and harmony in your space."
    }
  ];

  const categories = ['All', 'Trends', 'Vastu', 'DIY', 'Cost', 'Culture'];

  // Upcoming Blog Posts (Sept 2025 - Feb 2026)
  const upcomingPosts: BlogPost[] = [
    // September 2025
    {
      id: 'complete-cost-guide',
      title: 'Complete Guide to Interior Design Costs in Bhubaneswar',
      excerpt: 'Comprehensive breakdown of interior design pricing, material costs, and budget planning for Bhubaneswar homes.',
      category: 'Cost',
      date: 'September 5, 2025',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interior design cost guide for Bhubaneswar homes',
      featured: true,
      pillar: true,
      wordCount: 4000
    },
    {
      id: 'monsoon-interior-prep',
      title: '5 Ways to Monsoon-Proof Your Interior Design',
      excerpt: 'Essential tips to protect your interiors during Odisha\'s monsoon season with humidity-resistant materials.',
      category: 'DIY',
      date: 'September 12, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Monsoon-proof interior design tips for Bhubaneswar'
    },
    {
      id: 'ganesh-chaturthi-decor',
      title: 'Ganesh Chaturthi Décor Ideas for Modern Homes',
      excerpt: 'Blend traditional festival décor with contemporary interiors for a beautiful Ganesh Chaturthi celebration.',
      category: 'Culture',
      date: 'September 19, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ganesh Chaturthi home décor ideas Bhubaneswar'
    },
    {
      id: 'small-kitchen-storage',
      title: 'Smart Storage Solutions for Small Kitchens in Patia',
      excerpt: 'Maximize your compact kitchen space with clever storage hacks perfect for Bhubaneswar apartments.',
      category: 'DIY',
      date: 'September 26, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Small kitchen storage solutions Patia Bhubaneswar'
    },
    // October 2025
    {
      id: 'modular-kitchen-masterclass',
      title: 'Modular Kitchen Masterclass for Odisha Homes',
      excerpt: 'Complete guide to designing, planning, and installing modular kitchens suited for Odia cooking styles.',
      category: 'Cost',
      date: 'October 3, 2025',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modular kitchen design guide for Odisha homes',
      featured: true,
      pillar: true,
      wordCount: 1800
    },
    {
      id: 'diwali-lighting-design',
      title: 'Diwali Lighting Design: Traditional Meets Modern',
      excerpt: 'Create stunning Diwali lighting schemes that complement your interior design year-round.',
      category: 'Culture',
      date: 'October 10, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Diwali lighting design ideas for modern homes'
    },
    {
      id: 'color-psychology-homes',
      title: 'Color Psychology in Interior Design for Bhubaneswar Homes',
      excerpt: 'How colors affect mood and energy in your home, with climate-appropriate palettes for Odisha.',
      category: 'Trends',
      date: 'October 17, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Color psychology interior design Bhubaneswar'
    },
    {
      id: 'bedroom-vastu-tips',
      title: 'Vastu-Compliant Bedroom Design: Sleep Better Tonight',
      excerpt: 'Essential Vastu principles for bedroom design to promote restful sleep and positive energy.',
      category: 'Vastu',
      date: 'October 24, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Vastu-compliant bedroom design tips'
    },
    // November 2025
    {
      id: 'vastu-handbook',
      title: 'Vastu-Compliant Interior Design Handbook',
      excerpt: 'Comprehensive guide to integrating Vastu Shastra principles with modern interior design aesthetics.',
      category: 'Vastu',
      date: 'November 7, 2025',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Vastu-compliant interior design handbook',
      featured: true,
      pillar: true,
      wordCount: 1600
    },
    {
      id: 'kali-puja-decor',
      title: 'Kali Puja Home Décor: Honoring Tradition in Style',
      excerpt: 'Respectful and beautiful ways to decorate your home for Kali Puja while maintaining modern aesthetics.',
      category: 'Culture',
      date: 'November 14, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kali Puja home décor ideas traditional modern'
    },
    {
      id: 'winter-interior-prep',
      title: 'Preparing Your Interiors for Bhubaneswar Winters',
      excerpt: 'Cozy up your home for the mild Odisha winter with warm textures, colors, and lighting.',
      category: 'Trends',
      date: 'November 21, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Winter interior design tips Bhubaneswar'
    },
    {
      id: 'budget-makeover-tips',
      title: '₹50,000 Home Makeover: Maximum Impact on Minimum Budget',
      excerpt: 'Transform your home with smart, budget-friendly interior design changes that deliver big results.',
      category: 'Cost',
      date: 'November 28, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Budget home makeover ideas Bhubaneswar'
    },
    // December 2025
    {
      id: 'sustainable-coastal-design',
      title: 'Sustainable Interior Design in Coastal Climates',
      excerpt: 'Eco-friendly interior design solutions perfect for Odisha\'s coastal climate and environmental conditions.',
      category: 'Trends',
      date: 'December 5, 2025',
      readTime: '13 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sustainable interior design coastal climate Odisha',
      featured: true,
      pillar: true,
      wordCount: 1900
    },
    {
      id: 'christmas-decor-indian-homes',
      title: 'Christmas Décor Ideas for Indian Homes',
      excerpt: 'Celebrate Christmas with décor that complements Indian interior design sensibilities.',
      category: 'Culture',
      date: 'December 12, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Christmas décor ideas Indian homes'
    },
    {
      id: 'year-end-interior-trends',
      title: '2025 Interior Design Trends: Year in Review',
      excerpt: 'The biggest interior design trends that shaped 2025 and what to expect in the coming year.',
      category: 'Trends',
      date: 'December 19, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: '2025 interior design trends review'
    },
    {
      id: 'new-year-home-refresh',
      title: 'New Year, New Home: 10 Quick Refresh Ideas',
      excerpt: 'Simple ways to refresh your home for the new year without major renovations or big expenses.',
      category: 'DIY',
      date: 'December 26, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'New Year home refresh ideas'
    },
    // January 2026
    {
      id: 'small-space-living-guide',
      title: 'Ultimate Guide to Small-Space Living in Bhubaneswar',
      excerpt: 'Master the art of small-space living with design strategies perfect for Bhubaneswar apartments.',
      category: 'DIY',
      date: 'January 9, 2026',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Small-space living guide Bhubaneswar apartments',
      featured: true,
      pillar: true,
      wordCount: 1500
    },
    {
      id: 'makar-sankranti-decor',
      title: 'Makar Sankranti Décor: Celebrating Harvest at Home',
      excerpt: 'Traditional Makar Sankranti decorations that blend beautifully with contemporary home interiors.',
      category: 'Culture',
      date: 'January 16, 2026',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Makar Sankranti home décor ideas'
    },
    {
      id: 'home-office-design-2026',
      title: 'Home Office Design Trends for 2026',
      excerpt: 'Create productive work-from-home spaces with the latest design trends and ergonomic solutions.',
      category: 'Trends',
      date: 'January 23, 2026',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Home office design trends 2026'
    },
    {
      id: 'republic-day-patriotic-decor',
      title: 'Republic Day: Patriotic Home Décor Ideas',
      excerpt: 'Celebrate Republic Day with tasteful patriotic décor that enhances your home\'s beauty.',
      category: 'Culture',
      date: 'January 30, 2026',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Republic Day patriotic home décor'
    },
    // February 2026
    {
      id: 'cultural-decor-playbook',
      title: 'Festive & Cultural Décor Playbook for Odia Homes',
      excerpt: 'Complete guide to incorporating Odia cultural elements and festival décor into modern home interiors.',
      category: 'Culture',
      date: 'February 6, 2026',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Odia cultural décor guide for modern homes',
      featured: true,
      pillar: true,
      wordCount: 1300
    },
    {
      id: 'valentine-romantic-interiors',
      title: 'Valentine\'s Day: Creating Romantic Interiors',
      excerpt: 'Design romantic spaces in your home perfect for Valentine\'s Day and year-round intimacy.',
      category: 'DIY',
      date: 'February 13, 2026',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Valentine Day romantic interior design ideas'
    },
    {
      id: 'spring-interior-refresh',
      title: 'Spring Interior Refresh: Welcoming the New Season',
      excerpt: 'Refresh your interiors for spring with light colors, natural elements, and seasonal décor.',
      category: 'Trends',
      date: 'February 20, 2026',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Spring interior refresh ideas'
    },
    {
      id: 'maha-shivratri-decor',
      title: 'Maha Shivratri: Sacred Spaces in Modern Homes',
      excerpt: 'Create beautiful prayer spaces and incorporate Shivratri décor in contemporary home settings.',
      category: 'Culture',
      date: 'February 27, 2026',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Maha Shivratri home décor prayer space'
    }
  ];

  // Recently Published Posts (Jan-Aug 2025)
  const recentPosts: BlogPost[] = [
    {
      id: 'monsoon-interior-care',
      title: 'Monsoon Interior Care: Protecting Your Investment',
      excerpt: 'Essential maintenance tips to keep your interiors looking fresh during Odisha\'s heavy monsoon season.',
      category: 'DIY',
      date: 'August 15, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Monsoon interior care tips Bhubaneswar'
    },
    {
      id: 'independence-day-decor',
      title: 'Independence Day Décor: Patriotic Home Styling',
      excerpt: 'Celebrate Independence Day with elegant patriotic décor that complements your interior design.',
      category: 'Culture',
      date: 'August 8, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Independence Day home décor ideas'
    },
    {
      id: 'raksha-bandhan-family-spaces',
      title: 'Raksha Bandhan: Designing Family-Centric Spaces',
      excerpt: 'Create warm, welcoming spaces perfect for family gatherings and Raksha Bandhan celebrations.',
      category: 'Culture',
      date: 'August 1, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Raksha Bandhan family space design'
    },
    {
      id: 'summer-cooling-interiors',
      title: '10 Ways to Cool Your Interiors This Summer',
      excerpt: 'Beat the Bhubaneswar heat with interior design tricks that naturally cool your home.',
      category: 'DIY',
      date: 'July 18, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Summer cooling interior design tips'
    },
    {
      id: 'guru-purnima-study-spaces',
      title: 'Guru Purnima: Creating Inspiring Study Spaces',
      excerpt: 'Design dedicated study and learning spaces that honor the spirit of Guru Purnima.',
      category: 'Culture',
      date: 'July 11, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Guru Purnima study space design'
    },
    {
      id: 'rath-yatra-decor',
      title: 'Rath Yatra Special: Jagannath-Inspired Home Décor',
      excerpt: 'Celebrate Rath Yatra with beautiful Jagannath-inspired décor elements in your modern home.',
      category: 'Culture',
      date: 'July 4, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Rath Yatra Jagannath home décor ideas'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredUpcomingPosts = upcomingPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Kalakruti Associates Interior Design Blog",
            "description": "Expert interior design tips, trends, and inspiration for Bhubaneswar and Odisha homes.",
            "url": "https://kalakrutiassociates.com/interior-design-blog-bhubaneswar",
            "publisher": {
              "@type": "Organization",
              "name": "Kalakruti Associates",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kalakrutiassociates.com/logo.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://kalakrutiassociates.com/interior-design-blog-bhubaneswar"
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
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a 
            href="/"
            className="inline-flex items-center text-[#5E60CE] font-medium hover:text-[#4C4FBD] hover:underline transition-colors duration-200"
            aria-label="Navigate back to home page"
          >
            ← Back to Home
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 lg:py-20 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Interior Design Blog | Expert Tips & Trends for Bhubaneswar Homes
            </h1>
            
            {/* TL;DR Summary Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-left max-w-4xl mx-auto">
              <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR - Blog Summary:</p>
              <p className="text-blue-700">Your go-to resource for interior design inspiration, cost guides, vastu tips, cultural décor ideas, and sustainable design solutions specifically for Bhubaneswar and Odisha homes.</p>
            </div>
          </div>

          {/* Opening SEO Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to Bhubaneswar's premier <strong>interior design blog</strong>, your comprehensive resource for transforming homes across Odisha with expert guidance and local insights. Our <strong>interior design blog Bhubaneswar</strong> covers everything from detailed <strong>interior design cost Bhubaneswar</strong> breakdowns and <strong>modular kitchen design ideas</strong> to <strong>vastu tips interior design</strong> and <strong>home decor ideas Bhubaneswar</strong> that celebrate our rich cultural heritage. Whether you're searching for <strong>small space interior design</strong> solutions for Patia apartments, <strong>interior design trends 2025</strong> perfect for Odisha's climate, or <strong>home renovation tips</strong> that respect traditional <strong>furniture placement vastu</strong> principles, our blog delivers actionable, voice-search-friendly content designed for easy discovery and practical application. From budget-friendly DIY projects to luxury design inspiration, seasonal <strong>color schemes Odisha homes</strong>, and comprehensive guides on sustainable materials like locally-sourced Odisha sandstone and eco-friendly finishes, we provide the <strong>interior design inspiration</strong> you need to create beautiful, functional spaces that truly feel like home while honoring the unique lifestyle and cultural preferences of our region.
            </p>
          </div>

          {/* Voice Search Callout */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">🎤 Voice Search Friendly</h3>
            <p className="text-green-700">"Hey Google, how much does interior design cost in Bhubaneswar?" or "What are the latest interior design trends for 2025?" - Find instant answers in our comprehensive guides!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#featured-posts" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Featured Guides
            </a>
            <a 
              href="/contact" 
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pillar Posts */}
      <section id="featured-posts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Comprehensive Guides
            </h2>
            <p className="text-lg text-gray-600">
              In-depth pillar posts covering essential interior design topics for Bhubaneswar homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingPosts.filter(post => post.pillar).slice(0, 6).map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Pillar Guide
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.wordCount} words
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <a 
                      href="/contact" 
                      className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
                    >
                      Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Interior Design Trends */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-12 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
            <p className="text-sm font-semibold text-orange-800 mb-2">TL;DR - Trends Summary:</p>
            <p className="text-orange-700">Stay updated with the latest interior design trends perfect for Bhubaneswar's climate, from sustainable materials to cultural fusion designs.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Latest Interior Design Trends for Odisha Homes
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2025 Design Trends Perfect for Bhubaneswar Climate</h3>
              <p className="text-gray-600 mb-6">
                Discover the hottest interior design trends for 2025 that are specifically curated for Odisha's coastal climate and cultural preferences. From sustainable materials to smart home integration, these trends will define modern Bhubaneswar homes.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-orange-500 mr-3" />
                  Sustainable coastal-friendly materials
                </li>
                <li className="flex items-center">
                  <Palette className="w-5 h-5 text-orange-500 mr-3" />
                  Earthy color palettes inspired by Odisha landscapes
                </li>
                <li className="flex items-center">
                  <Home className="w-5 h-5 text-orange-500 mr-3" />
                  Multi-functional furniture for compact spaces
                </li>
              </ul>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
              >
                Explore Trend-Based Designs <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="2025 interior design trends for Bhubaneswar homes"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Upcoming Blog Posts (September 2025 - February 2026)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpcomingPosts.slice(0, 12).map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <a 
                    href="/contact" 
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
                  >
                    Coming Soon <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredUpcomingPosts.length > 12 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                View All Upcoming Posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Vastu-Compliant Interior Design Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Vastu-Compliant Interior Design Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vastu-compliant interior design tips for Bhubaneswar homes"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Balancing Tradition with Modern Aesthetics</h3>
              <p className="text-gray-600 mb-6">
                Learn how to seamlessly integrate ancient Vastu Shastra principles with contemporary interior design. Our expert guides help you create harmonious spaces that promote positive energy while maintaining modern functionality and style.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Compass className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">Directional placement guidelines</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Palette className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">Vastu-approved color schemes</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">Furniture arrangement principles</span>
                </div>
              </div>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
              >
                Get Vastu Consultation <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Budget-Friendly Interior Design Ideas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Budget-Friendly Interior Design Ideas
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Affordable Solutions for Every Room</h3>
              <p className="text-gray-600 mb-6">
                Transform your home without breaking the bank. Our budget-friendly interior design ideas prove that style doesn't have to be expensive. Discover DIY projects, smart shopping tips, and cost-effective design solutions perfect for Bhubaneswar homes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">₹50K</div>
                  <div className="text-sm text-gray-600">Complete Makeover</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Home className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">DIY</div>
                  <div className="text-sm text-gray-600">Project Guides</div>
                </div>
              </div>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
              >
                Explore Budget Solutions <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Budget-friendly interior design ideas for Bhubaneswar homes"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recently Published Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Recently Published (January - August 2025)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Published
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <a 
                      href="/contact" 
                      className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal & Cultural Décor Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Seasonal & Cultural Décor Guides
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-700 ease-out">
              <img 
                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Seasonal and cultural décor guides for Odia homes"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Festive & Cultural Décor Playbook for Odia Homes</h3>
              <p className="text-gray-600 mb-6">
                Celebrate Odisha's rich cultural heritage with our comprehensive guides to festival and seasonal décor. From Rath Yatra to Kali Puja, learn how to beautifully incorporate traditional elements into your modern home interior.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Jagannath-inspired home décor</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Pattachitra art integration</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Sambalpuri textile accents</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Festival lighting schemes</span>
                </div>
              </div>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
              >
                Explore Cultural Designs <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-600 ease-out">
            Quick Answers - Interior Design FAQs
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

          <div className="text-center mt-8">
            <a 
              href="/frequently-asked-questions"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              View All Frequently Asked Questions →
            </a>
          </div>
        </div>
      </section>

      {/* Voice Search Callouts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Looking for interior design cost estimates?</h3>
              <p className="text-blue-700">Check out our comprehensive cost guide covering everything from basic makeovers to luxury transformations in Bhubaneswar.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 scroll-animate opacity-0 translate-x-8 transition-all duration-600 ease-out" style={{transitionDelay: '200ms'}}>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">🏠 Need vastu-compliant design ideas?</h3>
              <p className="text-purple-700">Discover how to blend traditional Vastu principles with modern interior design for harmonious, beautiful spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Widget Simulation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Blog Categories & Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8">
              <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trends</h3>
              <p className="text-gray-600 text-sm mb-4">Latest interior design trends for 2025 and beyond</p>
              <a href="#trends" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm">
                Explore Trends →
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '150ms'}}>
              <Compass className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vastu</h3>
              <p className="text-gray-600 text-sm mb-4">Traditional Vastu principles for modern homes</p>
              <a href="#vastu" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm">
                Learn Vastu →
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
              <DollarSign className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost</h3>
              <p className="text-gray-600 text-sm mb-4">Budget guides and cost-effective solutions</p>
              <a href="#cost" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm">
                View Cost Guides →
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '450ms'}}>
              <Palette className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Culture</h3>
              <p className="text-gray-600 text-sm mb-4">Odia cultural elements and festival décor</p>
              <a href="#culture" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm">
                Explore Culture →
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
              <Home className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600 mb-4 text-sm">Complete interior design solutions for residential and commercial spaces.</p>
              <a 
                href="/services" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Discover our service offerings →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '150ms'}}>
              <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600 mb-4 text-sm">Browse our gallery of completed interior design projects.</p>
              <a 
                href="/portfolio" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                View our completed projects →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
              <User className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600 mb-4 text-sm">Learn about our expert team and design philosophy.</p>
              <a 
                href="/about" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Meet our expert team →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8" style={{transitionDelay: '450ms'}}>
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600 mb-4 text-sm">Ready to start your interior design project? Get in touch today.</p>
              <a 
                href="/contact" 
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
              >
                Schedule your free consultation →
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get personalized interior design guidance from Bhubaneswar's leading experts
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
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hi! I'm interested in interior design tips and consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        
        <a
          href="tel:+91-XXXXXXXXXX"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default BlogPage;