import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, Video, FileText, Users, Target, TrendingUp, Presentation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PMResourcesFooter from '../components/PMResourcesFooter';

const PMResources = () => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const productDecks = [
    { 
      name: "Tata 1mg Campus Recruitment", 
      description: "Product case study for healthcare recruitment",
      driveLink: "#",
      hoverDescription: "Healthcare product strategy presentation for campus placements",
      logo: "/src/assets/1mg-logo.png"
    },
    { 
      name: "Flipkart Campus Recruitment", 
      description: "E-commerce product management case",
      driveLink: "https://drive.google.com/file/d/1yY9feLpPM6FsWUZGxvlGUb8QgxwQY6zX/view?usp=sharing",
      hoverDescription: "Growth and marketplace strategy for India's leading e-commerce platform",
      logo: "/lovable-uploads/a107b915-9823-4083-b5d1-a5e562f21aa4.png"
    },
    { 
      name: "Groww Campus Recruitment", 
      description: "Fintech product strategy presentation",
      driveLink: "https://drive.google.com/file/d/1xFn2sjJgE8ww9UxzIsqiOP7rnGYxYkan/view?usp=sharing",
      hoverDescription: "Investment platform product development and user acquisition strategies",
      logo: "/lovable-uploads/f14548cb-bf53-4ded-a927-ddf895c3574e.png"
    },
    { 
      name: "Business Mela Competition", 
      description: "Business strategy and product vision",
      driveLink: "#",
      hoverDescription: "Comprehensive business case for startup competition",
      logo: "/lovable-uploads/863f0d2c-1199-46ce-ae8d-11dd50ff8c8f.png"
    },
    { 
      name: "Create 3.0", 
      description: "Innovation challenge presentation",
      driveLink: "#",
      hoverDescription: "Creative problem-solving approach for innovation challenges"
    },
    { 
      name: "Tryst Adobe Designathon", 
      description: "Design thinking and product strategy",
      driveLink: "#",
      hoverDescription: "User-centric design approach for Adobe's design challenge"
    }
  ];

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
          myLearning: "This book taught me the fundamental difference between feature teams and product teams. The concept of continuous discovery and the importance of outcome-based roadmaps completely changed how I approach product strategy."
        },
        { 
          name: "The Lean Startup by Eric Ries", 
          type: "Book", 
          description: "Building products through validated learning and experimentation", 
          link: "#",
          myLearning: "The Build-Measure-Learn cycle became my go-to framework for product development. It helped me understand the importance of rapid iteration and customer validation before scaling features."
        },
        { 
          name: "Hooked by Nir Eyal", 
          type: "Book", 
          description: "Psychology of habit-forming products and user engagement", 
          link: "#",
          myLearning: "Understanding the Hook Model (Trigger-Action-Reward-Investment) was crucial for building engaging user experiences at 1mg. It helped me design features that create genuine user habits."
        },
        { 
          name: "Escaping the Build Trap by Melissa Perri", 
          type: "Book", 
          description: "Building products that create value, not just features", 
          link: "#",
          myLearning: "This book helped me shift from output-focused to outcome-focused thinking. The product kata framework is something I use regularly for continuous improvement."
        }
      ]
    },
    {
      title: "YouTube Channels",
      icon: <Video className="w-6 h-6" />,
      resources: [
        { name: "Lenny's Podcast", type: "Video", description: "Deep dives with top PMs and founders", link: "https://www.youtube.com/@LennysPodcast", logo: "/lovable-uploads/youtube-logo.png" },
        { name: "Product School", type: "Video", description: "PM fundamentals, case studies, and career advice", link: "https://www.youtube.com/@ProductSchool", logo: "/lovable-uploads/youtube-logo.png" },
        { name: "Being Aakrshit", type: "Video", description: "Authentic PM stories and career insights", link: "https://www.youtube.com/@beingaakrshit3036", logo: "/lovable-uploads/youtube-logo.png" },
        { name: "Product Manager HQ", type: "Video", description: "Interview prep, frameworks, and real PM experiences", link: "#", logo: "/lovable-uploads/youtube-logo.png" }
      ]
    },
    {
      title: "Newsletters & Blogs",
      icon: <FileText className="w-6 h-6" />,
      resources: [
        { name: "Lenny's Newsletter", type: "Newsletter", description: "Weekly insights on product, growth, and career", link: "https://www.lennysnewsletter.com/" },
        { name: "Product Hunt Daily", type: "Newsletter", description: "Daily dose of new products and trends", link: "https://www.producthunt.com/newsletter" },
        { name: "First Round Review", type: "Blog", description: "In-depth articles on building and scaling products", link: "https://review.firstround.com/" },
        { name: "Mind the Product", type: "Blog", description: "Community-driven insights and best practices", link: "https://www.mindtheproduct.com/" }
      ]
    },
    {
      title: "Communities",
      icon: <Users className="w-6 h-6" />,
      resources: [
        { name: "Product Manager HQ Slack", type: "Community", description: "Active community for PM discussions and networking", link: "#", platform: "slack" },
        { name: "Women in Product", type: "Community", description: "Supporting women in product management roles", link: "https://www.womeninproduct.com/", platform: "website" },
        { name: "Product School Community", type: "Community", description: "Global network of product professionals", link: "#", platform: "linkedin" },
        { name: "Reddit r/ProductManagement", type: "Community", description: "Daily discussions, advice, and job postings", link: "https://www.reddit.com/r/ProductManagement/", platform: "reddit" }
      ]
    },
    {
      title: "Interview Prep",
      icon: <Target className="w-6 h-6" />,
      resources: [
        { name: "Lewis Lin's PM Interview Questions", type: "Book", description: "Comprehensive guide to PM interview preparation", link: "#", icon: "📚" },
        { name: "Glassdoor PM Interview Questions", type: "Resource", description: "Real interview questions from top companies", link: "https://www.glassdoor.com/", icon: "🏢" },
        { name: "Exponent PM Interview Course", type: "Course", description: "Mock interviews and framework practice", link: "https://www.tryexponent.com/", icon: "🎯" },
        { name: "PM Interview Database", type: "Resource", description: "Crowdsourced collection of interview experiences", link: "#", icon: "📊" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <TrendingUp className="w-6 h-6" />,
      resources: [
        { name: "CIRCLES Method", type: "Framework", description: "Product design interview framework", link: "#" },
        { name: "Jobs-to-be-Done Framework", type: "Framework", description: "Understanding customer motivations and needs", link: "#" },
        { name: "Product Analytics Guide", type: "Resource", description: "Measuring what matters in product development", link: "#" },
        { name: "A/B Testing Playbook", type: "Resource", description: "Statistical methods for product experimentation", link: "#" }
      ]
    }
  ];

  const navigationItems = [
    { label: 'My Product Decks', href: '#decks' },
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
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.button
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          My Portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            My PM Resources
          </h1>
          
          <div className="glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-slate-200 dark:border-slate-700 mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Hey! I am Animesh. I am currently working as an Associate Product Manager at Tata 1mg, where I contribute to building impactful healthcare solutions. I completed my B.Tech in Electrical Engineering from IIT Delhi. Passionate about the dynamic world of product management, I have curated a bunch of resources that I have used personally and am still using some of them which might help you.
            </p>
          </div>

          {/* Sticky Navigation */}
          <div className="sticky top-4 z-30 glass-navbar bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-slate-700 p-4 mb-8 shadow-lg">
            <nav className="flex flex-wrap justify-center gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

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
          {resourceCategories.map((category, categoryIndex) => (
            <section key={category.title} id={category.title.toLowerCase().replace(/[^a-z0-9]/g, '')} className="mb-16">
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
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.resources.map((resource, index) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      if (category.title === "Essential Books" && resource.myLearning) {
                        setSelectedBook(resource);
                      } else if (resource.link && resource.link !== '#') {
                        window.open(resource.link, '_blank');
                      }
                    }}
                    className="group glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <PMResourcesFooter />

      {/* Book Learning Modal */}
      {selectedBook && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelectedBook(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{selectedBook.name}</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">My Key Learnings:</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{selectedBook.myLearning}</p>
            </div>
            {selectedBook.link && selectedBook.link !== '#' && (
              <a
                href={selectedBook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={16} />
                Get this book
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PMResources;