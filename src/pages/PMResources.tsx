import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, Video, FileText, Users, Target, TrendingUp, Presentation, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PMResources = () => {
  const navigate = useNavigate();
  const [hoveredResource, setHoveredResource] = useState<any>(null);

  const productDecks = [
    { 
      name: "Tata 1mg Campus Recruitment", 
      description: "Product case study for healthcare recruitment",
      driveLink: "#",
      hoverDescription: "Healthcare product strategy presentation for campus placements - focused on user acquisition and retention strategies for healthcare platform",
      logo: "/src/assets/1mg-logo.png"
    },
    { 
      name: "Flipkart Campus Recruitment", 
      description: "E-commerce product management case",
      driveLink: "#",
      hoverDescription: "Growth and marketplace strategy for India's leading e-commerce platform - analyzed supply chain optimization and seller onboarding",
      logo: "/lovable-uploads/flipkart-logo.png"
    },
    { 
      name: "Groww Campus Recruitment", 
      description: "Fintech product strategy presentation",
      driveLink: "#",
      hoverDescription: "Investment platform product development and user acquisition strategies - focused on democratizing investing for Indian users",
      logo: "/lovable-uploads/groww-logo.png"
    },
    { 
      name: "Business Mela Competition", 
      description: "Business strategy and product vision",
      driveLink: "#",
      hoverDescription: "Comprehensive business case for startup competition - developed go-to-market strategy and product roadmap for SME solutions",
      logo: "/lovable-uploads/863f0d2c-1199-46ce-ae8d-11dd50ff8c8f.png"
    },
    { 
      name: "Create 3.0", 
      description: "Innovation challenge presentation",
      driveLink: "#",
      hoverDescription: "Creative problem-solving approach for innovation challenges - designed user-centric solutions for emerging technology problems"
    },
    { 
      name: "Tryst Adobe Designathon", 
      description: "Design thinking and product strategy",
      driveLink: "#",
      hoverDescription: "User-centric design approach for Adobe's design challenge - integrated design thinking with product strategy for creative tools"
    }
  ];

  const sectionOneLiners = {
    decks: "Below are some examples of decks which I made as part of some competition or in recruiting rounds.",
    books: "While I'm not fond of reading books, these are some which I referred to and have strong word of mouth.",
    youtube: "The most useful content for me. I used them a lot—do look out for curated playlists instead of jumping across sources.",
    newsletters: "A mix of deep dives and quick reads that kept me updated and inspired.",
    communities: "These communities helped me network, discuss, and learn from real product managers.",
    interview: "A curated set of resources and frameworks that helped me prepare for PM interviews.",
    frameworks: "The practical guides and toolkits I still use for experimentation, analytics, and product strategy."
  };

  const resourceCategories = [
    {
      title: "Essential Books",
      icon: <BookOpen className="w-6 h-6" />,
      resources: [
        { 
          name: "Inspired by Marty Cagan", 
          type: "Book", 
          description: "The Bible of product management - strategy, discovery, and delivery", 
          link: "#",
          myLearning: "This book taught me the fundamental difference between feature teams and product teams. The concept of continuous discovery and the importance of outcome-based roadmaps completely changed how I approach product strategy.",
          hoverTooltip: "Essential read for understanding modern product management practices. Covers discovery, delivery, and organizational structure for product teams."
        },
        { 
          name: "The Lean Startup by Eric Ries", 
          type: "Book", 
          description: "Building products through validated learning and experimentation", 
          link: "#",
          myLearning: "The Build-Measure-Learn cycle became my go-to framework for product development. It helped me understand the importance of rapid iteration and customer validation before scaling features.",
          hoverTooltip: "Foundation of lean methodology for startups. Focuses on validated learning and pivot strategies for product development."
        },
        { 
          name: "Hooked by Nir Eyal", 
          type: "Book", 
          description: "Psychology of habit-forming products and user engagement", 
          link: "#",
          myLearning: "Understanding the Hook Model (Trigger-Action-Reward-Investment) was crucial for building engaging user experiences at 1mg. It helped me design features that create genuine user habits.",
          hoverTooltip: "Deep dive into behavioral psychology for product design. Explains the four-step process for building habit-forming products."
        },
        { 
          name: "Escaping the Build Trap by Melissa Perri", 
          type: "Book", 
          description: "Building products that create value, not just features", 
          link: "#",
          myLearning: "This book helped me shift from output-focused to outcome-focused thinking. The product kata framework is something I use regularly for continuous improvement.",
          hoverTooltip: "Focuses on outcome-based product management. Great for understanding product strategy and avoiding feature factory mentality."
        }
      ]
    },
    {
      title: "YouTube Channels",
      icon: <Video className="w-6 h-6" />,
      resources: [
        { 
          name: "Lenny's Podcast", 
          type: "Video", 
          description: "Deep dives with top PMs and founders", 
          link: "https://www.youtube.com/@LennysPodcast", 
          logo: "/lovable-uploads/youtube-logo.png",
          hoverTooltip: "Premium content with industry leaders. Deep tactical advice from experienced PMs at companies like Airbnb, Uber, and Stripe."
        },
        { 
          name: "Product School", 
          type: "Video", 
          description: "PM fundamentals, case studies, and career advice", 
          link: "https://www.youtube.com/@ProductSchool", 
          logo: "/lovable-uploads/youtube-logo.png",
          hoverTooltip: "Comprehensive PM education platform. Features interviews with PMs from FAANG companies and structured learning paths."
        },
        { 
          name: "Being Aakrshit", 
          type: "Video", 
          description: "Authentic PM stories and career insights", 
          link: "https://www.youtube.com/@beingaakrshit3036", 
          logo: "/lovable-uploads/youtube-logo.png",
          hoverTooltip: "Indian PM perspective with authentic career stories. Great for understanding PM roles in Indian tech ecosystem."
        },
        { 
          name: "Product Manager HQ", 
          type: "Video", 
          description: "Interview prep, frameworks, and real PM experiences", 
          link: "#", 
          logo: "/lovable-uploads/youtube-logo.png",
          hoverTooltip: "Focused on PM interview preparation and career advancement. Includes mock interviews and framework explanations."
        }
      ]
    },
    {
      title: "Newsletters & Blogs",
      icon: <FileText className="w-6 h-6" />,
      resources: [
        { 
          name: "Lenny's Newsletter", 
          type: "Newsletter", 
          description: "Weekly insights on product, growth, and career", 
          link: "https://www.lennysnewsletter.com/",
          hoverTooltip: "Must-read weekly newsletter with tactical advice. Covers growth strategies, product metrics, and career development for PMs."
        },
        { 
          name: "Product Hunt Daily", 
          type: "Newsletter", 
          description: "Daily dose of new products and trends", 
          link: "https://www.producthunt.com/newsletter",
          hoverTooltip: "Stay updated with latest product launches and trends. Great for understanding market dynamics and innovation patterns."
        },
        { 
          name: "First Round Review", 
          type: "Blog", 
          description: "In-depth articles on building and scaling products", 
          link: "https://review.firstround.com/",
          hoverTooltip: "High-quality tactical advice from startup founders and operators. Deep dives into product strategy and team building."
        },
        { 
          name: "Mind the Product", 
          type: "Blog", 
          description: "Community-driven insights and best practices", 
          link: "https://www.mindtheproduct.com/",
          hoverTooltip: "Global product management community insights. Features articles from practitioners across different industries and stages."
        }
      ]
    },
    {
      title: "Communities",
      icon: <Users className="w-6 h-6" />,
      resources: [
        { 
          name: "Product Manager HQ Slack", 
          type: "Community", 
          description: "Active community for PM discussions and networking", 
          link: "#", 
          platform: "slack",
          hoverTooltip: "Large Slack community with active discussions on PM topics. Great for networking and getting real-time advice from peers."
        },
        { 
          name: "Women in Product", 
          type: "Community", 
          description: "Supporting women in product management roles", 
          link: "https://www.womeninproduct.com/", 
          platform: "website",
          hoverTooltip: "Inclusive community focused on advancing women in product roles. Offers mentorship, networking, and career development resources."
        },
        { 
          name: "Product School Community", 
          type: "Community", 
          description: "Global network of product professionals", 
          link: "#", 
          platform: "linkedin",
          hoverTooltip: "Educational community with structured learning paths. Access to PM courses, workshops, and networking events."
        },
        { 
          name: "Reddit r/ProductManagement", 
          type: "Community", 
          description: "Daily discussions, advice, and job postings", 
          link: "https://www.reddit.com/r/ProductManagement/", 
          platform: "reddit",
          hoverTooltip: "Active Reddit community with daily discussions. Great for job postings, resume reviews, and getting diverse perspectives."
        }
      ]
    },
    {
      title: "Interview Prep",
      icon: <Target className="w-6 h-6" />,
      resources: [
        { 
          name: "Lewis Lin's PM Interview Questions", 
          type: "Book", 
          description: "Comprehensive guide to PM interview preparation", 
          link: "#", 
          icon: "📚",
          hoverTooltip: "Comprehensive collection of PM interview questions with detailed answers. Covers product design, strategy, and behavioral questions."
        },
        { 
          name: "Glassdoor PM Interview Questions", 
          type: "Resource", 
          description: "Real interview questions from top companies", 
          link: "https://www.glassdoor.com/", 
          icon: "🏢",
          hoverTooltip: "Real interview experiences and questions from candidates. Filter by company to see specific interview patterns and questions."
        },
        { 
          name: "Exponent PM Interview Course", 
          type: "Course", 
          description: "Mock interviews and framework practice", 
          link: "https://www.tryexponent.com/", 
          icon: "🎯",
          hoverTooltip: "Structured PM interview preparation with video courses. Includes mock interviews and framework practice sessions."
        },
        { 
          name: "PM Interview Database", 
          type: "Resource", 
          description: "Crowdsourced collection of interview experiences", 
          link: "#", 
          icon: "📊",
          hoverTooltip: "Community-driven database of PM interview experiences. Organized by company and role level with detailed feedback."
        }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <TrendingUp className="w-6 h-6" />,
      resources: [
        { 
          name: "CIRCLES Method", 
          type: "Framework", 
          description: "Product design interview framework", 
          link: "#",
          hoverTooltip: "Structured approach for product design questions in interviews. Covers Comprehend, Identify, Report, Cut, List, Evaluate, Summarize."
        },
        { 
          name: "Jobs-to-be-Done Framework", 
          type: "Framework", 
          description: "Understanding customer motivations and needs", 
          link: "#",
          hoverTooltip: "Customer research framework focusing on the 'job' customers hire products to do. Helps identify unmet needs and opportunities."
        },
        { 
          name: "Product Analytics Guide", 
          type: "Resource", 
          description: "Measuring what matters in product development", 
          link: "#",
          hoverTooltip: "Comprehensive guide to product metrics and analytics setup. Covers funnel analysis, cohort analysis, and A/B testing methodologies."
        },
        { 
          name: "A/B Testing Playbook", 
          type: "Resource", 
          description: "Statistical methods for product experimentation", 
          link: "#",
          hoverTooltip: "Practical guide to running product experiments. Covers statistical significance, sample sizes, and common pitfalls in A/B testing."
        }
      ]
    }
  ];

  const navigationItems = [
    { label: 'Product Decks', href: '#decks' },
    { label: 'Essential Books', href: '#essentialbooks' },
    { label: 'YouTube Channels', href: '#youtubechannels' },
    { label: 'Newsletters & Blogs', href: '#newslettersblogs' },
    { label: 'Communities', href: '#communities' },
    { label: 'Interview Prep', href: '#interviewprep' },
    { label: 'Frameworks & Tools', href: '#frameworkstools' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Glassmorphism Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 glass-navbar"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              Animesh Jhawar
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="nav-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-xs"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Back to Portfolio Button */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4">
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </motion.button>
        </div>
      </div>

      {/* Hero Section with Background Metrics */}
      <section className="w-full min-h-[60vh] pb-10 flex flex-col items-center justify-center bg-transparent relative overflow-hidden">
        {/* Background metrics/graphics */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 left-10 text-4xl font-bold text-blue-500">92% MAU</div>
          <div className="absolute top-32 right-20 text-3xl font-bold text-purple-500">15% CVR</div>
          <div className="absolute bottom-40 left-20 text-2xl font-bold text-green-500">A/B Tests</div>
          <div className="absolute bottom-20 right-10 text-3xl font-bold text-orange-500">1M+ Users</div>
          <div className="absolute top-40 left-1/2 text-2xl font-bold text-pink-500">Product Analytics</div>
          <div className="absolute top-60 right-1/3 text-xl font-bold text-cyan-500">Growth Metrics</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent text-center">
            My PM Resources
          </h1>
          
          {/* About Me - Better Presentation */}
          <div className="max-w-5xl mx-auto mb-12 px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">About Me</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Hey! I am Animesh. Currently working as an Associate Product Manager at Tata 1mg.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Background</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  B.Tech in Electrical Engineering from IIT Delhi, passionate about healthcare solutions.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Purpose</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Curated resources that I've used personally in my PM journey to help you.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* My Product Decks Section */}
        <section id="decks" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center justify-center gap-3">
              <Presentation className="w-8 h-8" />
              My Product Decks
            </h2>
            <div className="glass-card bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto border border-slate-200/50 dark:border-slate-700/50">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {sectionOneLiners.decks}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {productDecks.map((deck, index) => (
              <motion.a
                key={deck.name}
                href={deck.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                title={deck.hoverDescription}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    {deck.logo && (
                      <img src={deck.logo} alt={deck.name} className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
                    )}
                    {!deck.logo && (
                      <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">
                        {deck.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                      </div>
                    )}
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
                      {deck.name}
                    </h3>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs">
                  {deck.description}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => {
            const sectionKey = category.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            const oneLiners = {
              'essentialbooks': sectionOneLiners.books,
              'youtubechannels': sectionOneLiners.youtube,
              'newslettersblogs': sectionOneLiners.newsletters,
              'communities': sectionOneLiners.communities,
              'interviewprep': sectionOneLiners.interview,
              'frameworkstools': sectionOneLiners.frameworks
            };
            
            return (
              <section key={category.title} id={sectionKey} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center justify-center gap-3">
                    {category.icon}
                    {category.title}
                  </h2>
                  <div className="glass-card bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto border border-slate-200/50 dark:border-slate-700/50">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {oneLiners[sectionKey] || ''}
                    </p>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.resources.map((resource, index) => (
                    <motion.div
                      key={resource.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => {
                        if (resource.hoverTooltip || (category.title === "Essential Books" && resource.myLearning)) {
                          setHoveredResource(resource);
                        }
                      }}
                      onMouseLeave={() => {
                        if (resource.hoverTooltip || (category.title === "Essential Books" && resource.myLearning)) {
                          setHoveredResource(null);
                        }
                      }}
                      onClick={() => {
                        if (resource.link && resource.link !== '#') {
                          window.open(resource.link, '_blank');
                        }
                      }}
                      className="group glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative"
                    >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        {resource.logo && (
                          <img src={resource.logo} alt={resource.name} className="w-8 h-8 rounded-lg flex-shrink-0" />
                        )}
                        {!resource.logo && (
                          <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">
                            {resource.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {resource.name}
                          </h3>
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                            {resource.type}
                          </span>
                        </div>
                      </div>
                      {resource.link && resource.link !== '#' && (
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                      )}
                    </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {resource.description}
                      </p>
              
                      {/* Universal Hover Tooltip */}
                      {hoveredResource?.name === resource.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 mt-2 p-4 glass-card bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg z-50"
                        >
                          {category.title === "Essential Books" && resource.myLearning ? (
                            <>
                              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">My Key Learnings:</h4>
                              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{resource.myLearning}</p>
                            </>
                          ) : resource.hoverTooltip ? (
                            <>
                              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">About this resource:</h4>
                              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{resource.hoverTooltip}</p>
                            </>
                          ) : null}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-slate-200/50 dark:border-slate-700/50 mb-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Want to know a bit more about me? Here's my portfolio link.
            </p>
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              View My Portfolio
            </motion.button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="https://linkedin.com/in/animesh-jhawar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:animeshjhawar@gmail.com"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2025 Animesh Jhawar™ - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PMResources;