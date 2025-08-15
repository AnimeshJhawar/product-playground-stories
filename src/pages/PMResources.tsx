import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, Video, FileText, Users, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PMResources = () => {
  const navigate = useNavigate();

  const resourceCategories = [
    {
      title: "📚 Essential Books",
      icon: <BookOpen className="w-6 h-6" />,
      resources: [
        { name: "Inspired by Marty Cagan", type: "Book", description: "The Bible of product management - strategy, discovery, and delivery", link: "#" },
        { name: "The Lean Startup by Eric Ries", type: "Book", description: "Building products through validated learning and experimentation", link: "#" },
        { name: "Hooked by Nir Eyal", type: "Book", description: "Psychology of habit-forming products and user engagement", link: "#" },
        { name: "Escaping the Build Trap by Melissa Perri", type: "Book", description: "Building products that create value, not just features", link: "#" }
      ]
    },
    {
      title: "🎥 YouTube Channels",
      icon: <Video className="w-6 h-6" />,
      resources: [
        { name: "Lenny's Podcast", type: "Video", description: "Deep dives with top PMs and founders", link: "https://www.youtube.com/@LennysPodcast" },
        { name: "Product School", type: "Video", description: "PM fundamentals, case studies, and career advice", link: "https://www.youtube.com/@ProductSchool" },
        { name: "Being Aakrshit", type: "Video", description: "My own channel - authentic PM stories and career insights", link: "https://www.youtube.com/@beingaakrshit3036" },
        { name: "Product Manager HQ", type: "Video", description: "Interview prep, frameworks, and real PM experiences", link: "#" }
      ]
    },
    {
      title: "📰 Newsletters & Blogs",
      icon: <FileText className="w-6 h-6" />,
      resources: [
        { name: "Lenny's Newsletter", type: "Newsletter", description: "Weekly insights on product, growth, and career", link: "https://www.lennysnewsletter.com/" },
        { name: "Product Hunt Daily", type: "Newsletter", description: "Daily dose of new products and trends", link: "https://www.producthunt.com/newsletter" },
        { name: "First Round Review", type: "Blog", description: "In-depth articles on building and scaling products", link: "https://review.firstround.com/" },
        { name: "Mind the Product", type: "Blog", description: "Community-driven insights and best practices", link: "https://www.mindtheproduct.com/" }
      ]
    },
    {
      title: "🤝 Communities",
      icon: <Users className="w-6 h-6" />,
      resources: [
        { name: "Product Manager HQ Slack", type: "Community", description: "Active community for PM discussions and networking", link: "#" },
        { name: "Women in Product", type: "Community", description: "Supporting women in product management roles", link: "https://www.womeninproduct.com/" },
        { name: "Product School Community", type: "Community", description: "Global network of product professionals", link: "#" },
        { name: "Reddit r/ProductManagement", type: "Community", description: "Daily discussions, advice, and job postings", link: "https://www.reddit.com/r/ProductManagement/" }
      ]
    },
    {
      title: "🎯 Interview Prep",
      icon: <Target className="w-6 h-6" />,
      resources: [
        { name: "Lewis Lin's PM Interview Questions", type: "Book", description: "Comprehensive guide to PM interview preparation", link: "#" },
        { name: "Glassdoor PM Interview Questions", type: "Resource", description: "Real interview questions from top companies", link: "https://www.glassdoor.com/" },
        { name: "Exponent PM Interview Course", type: "Course", description: "Mock interviews and framework practice", link: "https://www.tryexponent.com/" },
        { name: "PM Interview Database", type: "Resource", description: "Crowdsourced collection of interview experiences", link: "#" }
      ]
    },
    {
      title: "📊 Frameworks & Tools",
      icon: <TrendingUp className="w-6 h-6" />,
      resources: [
        { name: "CIRCLES Method", type: "Framework", description: "Product design interview framework", link: "#" },
        { name: "Jobs-to-be-Done Framework", type: "Framework", description: "Understanding customer motivations and needs", link: "#" },
        { name: "Product Analytics Guide", type: "Resource", description: "Measuring what matters in product development", link: "#" },
        { name: "A/B Testing Playbook", type: "Resource", description: "Statistical methods for product experimentation", link: "#" }
      ]
    }
  ];

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
          Back to Portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            🚀 PM Resource Hub
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Curated resources to help you break into product management or level up your PM skills. 
            From books to communities, everything you need is here.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + resourceIndex * 0.05 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {resource.name}
                        </h3>
                        <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs font-medium mt-1">
                          {resource.type}
                        </span>
                      </div>
                      {resource.link !== "#" && (
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your PM Journey?</h2>
          <p className="mb-6 opacity-90">
            These resources got me from curious student to APM at a unicorn. Your turn! 🚀
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
          >
            Explore My Story
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PMResources;