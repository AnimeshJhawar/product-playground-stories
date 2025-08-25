import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { ArrowLeft, ExternalLink, BookOpen, Video, FileText, Users, Target, TrendingUp, Presentation, Linkedin, Mail, Lightbulb, Brain, Trophy, Star, MessageSquare, Zap, Rocket, Search, BarChart, TrendingDown, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PMResources = () => {
  const navigate = useNavigate();
  const [hoveredResource, setHoveredResource] = useState<any>(null);

  // Step-wise PM Journey Resources
  const pmJourneySteps = [
    {
      id: 'intro-pm',
      title: 'Step 1: Intro to Product Management',
      subtitle: 'Understand what a PM actually does on a day-to-day basis.',
      icon: <Lightbulb className="w-6 h-6" />,
      description: "A Product Manager's role goes beyond \"just building features.\" It's about discovery, execution, analysis, and managing stakeholders.",
      cards: [
        {
          title: "Discovery",
          description: "Identifying user problems, market gaps, and crafting value propositions.",
          icon: <Search className="w-8 h-8" />,
          hoverTooltip: "Research user needs, analyze market opportunities, validate assumptions through interviews and data analysis."
        },
        {
          title: "Execution",
          description: "Collaborating with design for wireframes, grooming stories with engineers, aligning tech requirements.",
          icon: <Rocket className="w-8 h-8" />,
          hoverTooltip: "Translate strategy into actionable plans, coordinate cross-functional teams, manage delivery timelines."
        },
        {
          title: "Analysis",
          description: "Running A/B tests, validating impact metrics, reviewing cohorts, deciding rollouts.",
          icon: <BarChart className="w-8 h-8" />,
          hoverTooltip: "Measure product performance, design experiments, analyze user behavior, make data-driven decisions."
        },
        {
          title: "Stakeholder Management",
          description: "Balancing inputs from business, tech, and users, justifying costs vs. value.",
          icon: <Users className="w-8 h-8" />,
          hoverTooltip: "Align diverse stakeholder expectations, communicate product vision, manage competing priorities."
        }
      ],
      footer: "This stage is about developing a PM mindset — thinking holistically about both the why and the how."
    },
    {
      id: 'foundations',
      title: 'Step 2: Foundations',
      subtitle: 'Start with core PM thinking and frameworks to structure your approach.',
      icon: <Brain className="w-6 h-6" />,
      description: "Build the foundation with structured programs and practical learning:",
      resources: [
        { 
          name: "The PM School", 
          description: "structured modules that introduce product fundamentals",
          link: "#",
          hoverTooltip: "Comprehensive PM education with structured modules covering discovery, delivery, and growth frameworks."
        },
        { 
          name: "ProductMonk", 
          description: "blog & case studies explaining frameworks in real-world Indian context",
          link: "#",
          hoverTooltip: "Indian PM community with practical case studies and frameworks tailored for the Indian market context."
        },
        { 
          name: "Medium PM Basics", 
          description: "articles on PM basics (CIRCLES, JTBD)",
          link: "https://medium.com/@dee.busari/product-management-fundamentals-b4328a8e8a4e",
          hoverTooltip: "Essential PM fundamentals including CIRCLES framework and Jobs-to-be-Done methodology."
        },
        { 
          name: "McKinsey Forward", 
          description: "structured problem-solving and analytical storytelling",
          link: "#",
          hoverTooltip: "Professional development program focusing on structured thinking and analytical frameworks for business problems."
        }
      ],
      footer: "This stage ensures you know the frameworks and language that PMs use every day."
    },
    {
      id: 'case-studies',
      title: 'Step 3: Case Studies & Examples',
      subtitle: 'See how frameworks apply in real-world problem solving.',
      icon: <Trophy className="w-6 h-6" />,
      description: "Learn from practical applications through recruitment and competition case studies:",
      subsections: [
        {
          title: "Recruitment Decks",
          subtitle: "Campus recruitment decks to understand how PM cases are solved during placement processes:",
          resources: [
            { 
              name: "Flipkart", 
              description: "Made for campus recruitment",
              link: "#",
              logo: "/lovable-uploads/flipkart-logo.png",
              hoverTooltip: "E-commerce marketplace strategy and growth framework designed for campus recruitment process."
            },
            { 
              name: "Groww", 
              description: "Made for campus recruitment",
              link: "#",
              logo: "/lovable-uploads/groww-logo.png",
              hoverTooltip: "Fintech product strategy and user acquisition approach for investment platform recruitment case."
            },
            { 
              name: "Tata 1mg", 
              description: "Made for campus recruitment",
              link: "https://drive.google.com/file/d/16_l4Ec_nga0X_BlZDzW3lCQDJR_4jAdu/view?usp=sharing",
              logo: "/src/assets/1mg-logo.png",
              hoverTooltip: "Healthcare platform product strategy focusing on user personalization and retention for recruitment."
            }
          ]
        },
        {
          title: "Case Study Competitions",
          subtitle: "Winning & finalist decks from product competitions — showcasing structured approaches:",
          resources: [
            { 
              name: "Recruit Business Mela Contest", 
              description: "Business opportunities strategy",
              link: "https://drive.google.com/file/d/1XZP5LCEp8Geah5a-VYL3GJEx6z_F7Cen/view?usp=sharing",
              logo: "/lovable-uploads/recruit-logo.png",
              hoverTooltip: "SME business opportunities analysis and go-to-market strategy for Recruit's business competition."
            },
            { 
              name: "Experentia – Modern Day CRIME Tracking (Winner)", 
              description: "Crime tracking solution design",
              link: "https://drive.google.com/file/d/1ssoMcYYs6RDaQfW7Bn4R_jnYzJaFUvFp/view?usp=sharing",
              hoverTooltip: "Winning solution for crime tracking system - comprehensive product strategy and implementation roadmap."
            },
            { 
              name: "Create 3.0 – Doordarshan App, Virtual Tourism (Winner)", 
              description: "Virtual tourism platform design",
              link: "https://drive.google.com/file/d/1toW4F25mrwbfbmmlZxGSUzBZvMwCsNq0/view?usp=sharing",
              hoverTooltip: "First place virtual tourism solution for Doordarshan - innovative approach to digital content consumption."
            },
            { 
              name: "Create 2.0 – Samurai Clan Visualization (Second Runner Up)", 
              description: "Data visualization solution",
              link: "https://drive.google.com/file/d/1Nvk2NnM0BzlbA0Ysl8Q4Au0Dns7IW85j/view?usp=sharing",
              hoverTooltip: "Runner-up data visualization project with innovative approach to historical data presentation."
            },
            { 
              name: "Adobe Designathon – Sustainable Consumption (Second Runner Up)", 
              description: "Sustainable design solution",
              link: "https://drive.google.com/file/d/1JMmDS9iz32MYrXoMifMoSqRt28sSH-Ra/view?usp=sharing",
              hoverTooltip: "Runner-up sustainability-focused design solution for Adobe's design challenge competition."
            }
          ]
        }
      ],
      footer: "Here you learn how ideas are structured, pitched, and justified in competitive PM contexts."
    },
    {
      id: 'frameworks-tools',
      title: 'Step 4: Frameworks & Tools',
      subtitle: 'Get practical with frameworks and toolkits for structured thinking.',
      icon: <Zap className="w-6 h-6" />,
      description: "Hands-on frameworks and toolkits that you can apply directly in interviews and projects:",
      resources: [
        { 
          name: "CIRCLES Method", 
          description: "product design interview framework",
          link: "https://productschool.com/blog/skills/circles-framework-guide",
          hoverTooltip: "Structured framework for product design interviews: Comprehend, Identify, Report, Cut, List, Evaluate, Summarize."
        },
        { 
          name: "Jobs-to-be-Done (JTBD)", 
          description: "mapping user motivations",
          link: "https://www.userinterviews.com/ux-research-field-guide-chapter/jobs-to-be-done-jtbd-framework",
          hoverTooltip: "Customer research framework focusing on understanding the 'job' customers hire products to accomplish."
        },
        { 
          name: "Product Analysis Funnel", 
          description: "funnel metrics and user journey tracking",
          link: "https://userpilot.com/blog/product-management-funnel/",
          hoverTooltip: "Comprehensive guide to product funnel analysis and optimization strategies for user journey improvement."
        },
        { 
          name: "A/B Testing Playbook", 
          description: "how to experiment with confidence",
          link: "https://productschool.com/blog/skills/product-management-skills-a-b-testing",
          hoverTooltip: "Practical guide to designing, running, and analyzing A/B tests for product decision-making."
        }
      ],
      footer: "This section ensures you can structure your thinking systematically and validate your solutions."
    },
    {
      id: 'staying-updated',
      title: 'Step 5: Staying Updated',
      subtitle: 'Keep your PM instincts sharp by following trends and insights regularly.',
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Being a PM means staying close to trends, new tools, and community discussions. These are my go-to subscriptions:",
      resources: [
        { 
          name: "Lenny's Newsletter", 
          description: "weekly tactical advice",
          link: "https://www.lennysnewsletter.com/",
          hoverTooltip: "Premium weekly newsletter with tactical PM advice from industry experts and practitioners."
        },
        { 
          name: "Product Hunt Daily", 
          description: "discover new launches & innovation",
          link: "https://www.producthunt.com/newsletters",
          hoverTooltip: "Daily digest of new product launches and innovation trends to stay ahead of market developments."
        },
        { 
          name: "Product Manager Newsletter", 
          description: "insights & frameworks weekly",
          link: "https://theproductmanager.com/subscribe/",
          hoverTooltip: "Weekly newsletter focusing on practical PM frameworks and industry insights from experienced practitioners."
        },
        { 
          name: "Medium PM Fundamentals", 
          description: "community-driven PM articles",
          link: "https://medium.com/@dee.busari/product-management-fundamentals-b4328a8e8a4e",
          hoverTooltip: "Community-driven content with diverse perspectives on product management practices and strategies."
        }
      ],
      footer: "This keeps you in sync with the language, thinking, and direction of modern PMs."
    },
    {
      id: 'interview-prep',
      title: 'Step 6: Interview Preparation',
      subtitle: 'Practice structured problem-solving across the three common interview stages.',
      icon: <Target className="w-6 h-6" />,
      description: "Interviews test both thinking and execution structure:",
      cards: [
        {
          title: "Round 1",
          description: "Resume deep dive + product understanding.",
          icon: <FileText className="w-8 h-8" />,
          hoverTooltip: "Walk through your projects, demonstrate PM knowledge, explain your motivation for PM role."
        },
        {
          title: "Round 2", 
          description: "Case rounds (first-principles thinking, estimation, structured solutioning).",
          icon: <Brain className="w-8 h-8" />,
          hoverTooltip: "Product design, market sizing, root cause analysis using frameworks like CIRCLES and structured thinking."
        },
        {
          title: "Round 3",
          description: "Holistic PM test (end-to-end design, execution plan, bandwidth tradeoffs).",
          icon: <Activity className="w-8 h-8" />,
          hoverTooltip: "Complete product strategy, roadmap prioritization, stakeholder management, and go-to-market planning."
        },
        {
          title: "AI Awareness",
          description: "Be ready for AI-related product strategy questions in modern PM interviews.",
          icon: <Zap className="w-8 h-8" />,
          hoverTooltip: "Understanding AI product development, ethics, data strategy, and how AI transforms user experiences.",
          isSpecial: true
        }
      ],
      resources: [
        { 
          name: "How to do a PM interview", 
          description: "comprehensive interview guide",
          link: "https://gokulns.medium.com/really-cracking-the-product-minterview-1660fb6c74c4",
          hoverTooltip: "Step-by-step guide to PM interview preparation with frameworks and real examples."
        },
        { 
          name: "Cracking PM Interview Playlist", 
          description: "video interview preparation",
          link: "https://youtube.com/playlist?list=PLJE844cffEGOv8H6ukiC8C398DuZfjPt7&si=CEPyDfsdvrKzY_W9",
          hoverTooltip: "Comprehensive video playlist covering all aspects of PM interview preparation and mock interviews."
        },
        { 
          name: "Mock Interview with AI", 
          description: "AI-powered practice sessions",
          link: "https://www.toughtongueai.com/",
          hoverTooltip: "AI-powered platform for practicing PM interviews with instant feedback and improvement suggestions."
        },
        { 
          name: "PM Exercises – Interview Questions", 
          description: "curated practice questions",
          link: "https://www.productmanagementexercises.com/interview-questions",
          hoverTooltip: "Comprehensive collection of PM interview questions organized by category and difficulty level."
        },
        { 
          name: "Case Solving Guide (Product Folks)", 
          description: "structured case solving approach",
          link: "https://www.theproductfolks.com/product-management-blog/product-management-case-study-interview-preparation-guide",
          hoverTooltip: "Detailed guide to structuring and solving PM case study interviews with proven frameworks."
        }
      ],
      footer: "This stage simulates the real pressure of PM interviews and ensures you're not caught off-guard."
    },
    {
      id: 'books-deep-dives',
      title: 'Step 7: Books & Deep Dives',
      subtitle: 'Go beyond basics with foundational PM reads.',
      icon: <BookOpen className="w-6 h-6" />,
      description: "Books that shaped my thinking and gave me frameworks to lean on:",
      resources: [
        { 
          name: "The Product Manager Interview (Lewis Lin)", 
          description: "comprehensive interview preparation guide",
          link: "https://pdfcoffee.com/the-product-manager-interview-lewis-c-lin-teng-lupdf-pdf-free.html",
          hoverTooltip: "Definitive guide to PM interviews with 164 actual questions and detailed frameworks for answering them."
        },
        { 
          name: "Inspired (Marty Cagan)", 
          description: "modern product management practices",
          link: "https://nashnw.myqnapcloud.com:8083/download/86/pdf/86.pdf",
          hoverTooltip: "Essential read on how technology product companies create products customers love. Covers discovery, delivery, and organization."
        },
        { 
          name: "The Lean Product Playbook (Dan Olsen)", 
          description: "product-market fit methodology",
          link: "https://rudyct.com/Bis.Innov/16.The%20Lean%20Product%20Playbook%20How%20to%20Innovate%20with%20Minimum%20Viable%20Products%20...%20(Olsen,%20Dan)2015.pdf",
          hoverTooltip: "Actionable guide to building products that customers want using lean product process and MVP methodology."
        },
        { 
          name: "Decode and Conquer", 
          description: "PM interview question strategies",
          link: "https://dokumen.pub/download/decode-and-conquer-answers-to-product-management-interviews-2-ed.html",
          hoverTooltip: "Strategic approach to PM interview preparation with frameworks for product design, strategy, and analytical questions."
        }
      ],
      footer: "This is where you go deeper than prep — building intuition and maturity as a PM."
    }
  ];

  const navigationItems = [
    { label: 'Intro to PM', href: '#intro-pm' },
    { label: 'Foundations', href: '#foundations' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Frameworks', href: '#frameworks-tools' },
    { label: 'Staying Updated', href: '#staying-updated' },
    { label: 'Interview Prep', href: '#interview-prep' },
    { label: 'Books', href: '#books-deep-dives' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 90; // Fixed navbar height to align section titles properly
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ 
        top: elementPosition - navbarHeight, 
        behavior: 'smooth' 
      });
    }
  };

  export const ResourceCard = ({ resource, index, showLogo = false }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={(e) => {
        setIsHovered(true);
        setTooltipPos({ x: e.clientX, y: e.clientY - 10 });
      }}
      onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY - 10 })}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`cursor-pointer rounded-xl p-6 bg-white dark:bg-slate-800 transition-all shadow-sm hover:shadow-lg border border-transparent hover:border-blue-300 relative`}
        onClick={() => resource.link && window.open(resource.link, '_blank')}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {showLogo && resource.logo && (
              <img src={resource.logo} alt={resource.name} className="w-8 h-8 object-contain" />
            )}
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
              {resource.name}
            </h3>
          </div>
          {resource.link && (
            <ExternalLink className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {resource.description}
        </p>
      </div>

      {/* Floating Tooltip */}
      {isHovered && resource.hoverTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed z-[9999] p-3 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs rounded-lg shadow-xl w-64 pointer-events-none"
          style={{
            top: tooltipPos.y,
            left: tooltipPos.x,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {resource.hoverTooltip}
        </motion.div>
      )}
    </motion.div>
  );
};

export const StepCard = ({ card, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={(e) => {
        setIsHovered(true);
        setTooltipPos({ x: e.clientX, y: e.clientY - 10 });
      }}
      onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY - 10 })}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`rounded-xl p-6 transition-all relative cursor-pointer shadow-sm hover:shadow-lg border border-transparent hover:border-blue-300 ${
          card.isSpecial ? 'bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20' : 'bg-white dark:bg-slate-800'
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">{card.icon}</div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 transition-colors">
            {card.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
        {card.link && (
          <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Floating Tooltip */}
      {isHovered && card.hoverTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed z-[9999] p-3 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs rounded-lg shadow-xl w-64 pointer-events-none"
          style={{
            top: tooltipPos.y,
            left: tooltipPos.x,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {card.hoverTooltip}
        </motion.div>
      )}
    </motion.div>
  );
};
  const InterviewCard = ({ card, index }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`glass-card p-6 rounded-xl h-full transition-all duration-300 relative overflow-hidden ${
          isHovered ? 'border border-blue-300/30 shadow-lg shadow-blue-500/20' : ''
        } ${card.isSpecial ? 'bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20' : ''}`}>
          <div className="flex flex-col items-center text-center h-full">
            <div className={`mb-4 p-3 rounded-full ${
              card.isSpecial 
                ? 'bg-orange-100 dark:bg-orange-900/30' 
                : 'bg-blue-100 dark:bg-blue-900/30'
            }`}>
              {card.icon}
            </div>
            <h3 className={`font-semibold mb-3 transition-colors ${
              card.isSpecial 
                ? 'text-orange-900 dark:text-orange-100 group-hover:text-orange-600 dark:group-hover:text-orange-400'
                : 'text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400'
            }`}>
              {card.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
              {card.description}
            </p>
          </div>
          
          {/* Hover Tooltip */}
          {isHovered && card.hoverTooltip && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 text-xs py-2 px-3 rounded-lg shadow-lg z-50 w-64 text-center"
            >
              {card.hoverTooltip}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
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
      <section className="w-full min-h-[50vh] pb-2 flex flex-col items-center justify-center bg-transparent relative overflow-hidden">
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
          <div className="max-w-5xl mx-auto mb-6 px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Current Role</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Associate Product Manager at Tata 1mg, contributing to impactful healthcare solutions.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Education</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  B.Tech in Electrical Engineering from IIT Delhi with deep technical foundation.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Mission</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Passionate about curating resources that help aspiring PMs succeed in their journey.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PM Journey Steps */}
      <div className="container mx-auto px-4 space-y-20">
        {pmJourneySteps.map((step, stepIndex) => (
          <motion.section
            key={step.id}
            id={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
            className="relative"
          >
            {/* Section Title & Tagline - Center Aligned */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {step.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto">
                {step.subtitle}
              </p>
            </div>

            {/* Step Description - Center Aligned */}
            <div className="text-center mb-12">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
                {step.description}
              </p>
            </div>

            {/* Step 1 - Special layout with 4 cards */}
            {step.id === 'intro-pm' && step.cards && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {step.cards.map((card: any, index: number) => (
                  <StepCard key={index} card={card} index={index} />
                ))}
              </div>
            )}

            {/* Step 6 - Interview Prep with 4 cards */}
            {step.id === 'interview-prep' && step.cards && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {step.cards.slice(0, 3).map((card: any, index: number) => (
                    <InterviewCard key={index} card={card} index={index} />
                  ))}
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-full md:w-1/3">
                    <InterviewCard card={step.cards[3]} index={3} />
                  </div>
                </div>
              </>
            )}


            {/* Resources Grid */}
            {step.resources && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {step.resources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} index={index} />
                ))}
              </div>
            )}

            {/* Subsections (for Case Studies) */}
            {step.subsections && (
              <div className="space-y-16">
                {step.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                        {subsection.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        {subsection.subtitle}
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subsection.resources.map((resource, index) => (
                        <ResourceCard key={index} resource={resource} index={index} showLogo />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Section Footer - Center Aligned */}
            <div className="mt-12 text-center">
              <div className="max-w-4xl mx-auto p-6 bg-blue-50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-slate-700 dark:text-slate-300 italic text-lg">
                  {step.footer}
                </p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 py-12 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
              Want to know more about me?
            </h3>
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Check out my Portfolio
              <ExternalLink size={16} />
            </motion.button>
          </motion.div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-center">
              © 2025 Animesh Jhawar™ - All rights reserved
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/animesh-jhawar" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:animesh@example.com" 
                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PMResources;
