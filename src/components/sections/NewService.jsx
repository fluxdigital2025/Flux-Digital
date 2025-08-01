import React, { useState } from 'react';
import { Briefcase, Zap, BarChart2, Star, Code, Mail, Menu, X, Wind, Thermometer, EyeOff, Check, Package, Wrench, Globe, Settings, PieChart, ClipboardCheck, PhoneCall, Terminal, BookOpen, Cloud, Camera, Cctv, Layers, FileCode, EyeIcon, TrendingUpIcon, LayersIcon, ArrowRight, PaletteIcon, CodeIcon, LucideTrendingUp, LayoutIcon, UsersIcon, FileCheck, ChevronDown, CheckCheckIcon, ChevronUp, RocketIcon, ZapIcon, AwardIcon, FileCheck2Icon, CheckCircle2Icon, ArrowRightCircle, LucideRocket, LucideZap, LucideAward, CheckIcon, ArrowRightCircleIcon, Palette,  } from 'lucide-react';
 
import {
    Brush, Box, LayoutTemplate, Monitor,
  Code2, Smartphone, ShoppingCart, BrainCircuit,
  Server, Database, ShieldCheck, Search, Share2,
  TrendingUp, FileText, LayoutDashboard,
  SmartphoneNfc, ShoppingBag, Cpu, Users, Rocket, Film, Music,
} from 'lucide-react';

import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import { TbRocket, TbBolt, TbBuildingSkyscraper, TbCircleCheck, TbArrowRight } from 'react-icons/tb';
import Firespark from './Firespark';

// --- DATA CONSTANTS ---

 




  const serviceCategories = [
  {
    title: "Branding",
    icon: <Palette className="w-8 h-8" />,
    services: [
      { name: "Brand Consulting", icon: <Users className="w-5 h-5" /> },
      { name: "Logo Design", icon: <Brush className="w-5 h-5" /> },
      { name: "Industrial/Product Design", icon: <Box className="w-5 h-5" /> },
      { name: "Graphic Design", icon: <LayoutTemplate className="w-5 h-5" /> },
      { name: "2D/3D Visualisation", icon: <Monitor className="w-5 h-5" /> }
    ],
    
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Technology & Development",
    icon: <Code2 className="w-8 h-8" />,
    services: [
      { name: "Web Development", icon: <Globe className="w-5 h-5" /> },
      { name: "Frontend Development", icon: <LayoutTemplate className="w-5 h-5" /> },
      { name: "Backend Development", icon: <Server className="w-5 h-5" /> },
      { name: "Mobile App Development", icon: <Smartphone className="w-5 h-5" /> },
      { name: "E-commerce Solutions", icon: <ShoppingCart className="w-5 h-5" /> },
      { name: "AI & Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    services: [
      { name: "Search Engine Optimization", icon: <Search className="w-5 h-5" /> },
      { name: "Social Media Management", icon: <Share2 className="w-5 h-5" /> },
      { name: "Performance Marketing", icon: <BarChart2 className="w-5 h-5" /> },
      { name: "Content Marketing", icon: <FileText className="w-5 h-5" /> },
      { name: "Marketing Automation", icon: <Settings className="w-5 h-5" /> },
      { name: "Analytics", icon: <PieChart className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Experience Design",
    icon: <LayoutDashboard className="w-8 h-8" />,
    services: [
      { name: "UI/UX Design", icon: <Monitor className="w-5 h-5" /> },
      { name: "Website Design", icon: <Globe className="w-5 h-5" /> },
      { name: "Mobile Experience", icon: <SmartphoneNfc className="w-5 h-5" /> },
      { name: "Commerce Experience", icon: <ShoppingBag className="w-5 h-5" /> },
      { name: "Human Machine Interface", icon: <Cpu className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Strategic & Consulting",
    icon: <ClipboardCheck className="w-8 h-8" />,
    services: [
      { name: "Online Consultations", icon: <PhoneCall className="w-5 h-5" /> },
      { name: "Project Management", icon: <Settings className="w-5 h-5" /> },
      { name: "AI Automation Strategy", icon: <Terminal className="w-5 h-5" /> },
      { name: "Brand Building", icon: <BookOpen className="w-5 h-5" /> },
      { name: "Digital Transformation", icon: <Cloud className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Media Production",
    icon: <Camera className="w-8 h-8" />,
    services: [
      { name: "Photography", icon: <Camera className="w-5 h-5" /> },
      { name: "Videography", icon: <Film className="w-5 h-5" /> },
      { name: "Audio Production", icon: <Music className="w-5 h-5" /> },
      { name: "Motion Graphics", icon: <Monitor className="w-5 h-5" /> },
      { name: "Live Streaming", icon: <Cctv className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];


 

const services = [
  {
    title: "Branding",
    icon: <Layers className="w-6 h-6" />,
    items: [
      "Brand Consulting",
      "Logo Design",
      "Industrial / Product Design",
      "Graphic Design",
      "2D / 3D Visualisation"
    ],
    color: "from-cyan-100 to-teal-100"
  },
  {
    title: "Technology & Development",
   icon: <FileCode className="w-6 h-6" />,
    items: [
      "Web Development (React, Next.js, Python, HTML, WordPress, Shopify)",
      "Frontend Development",
      "Backend Development",
      "Interactive Development",
      "On-Demand 3D Website Creation",
      "AR Menu Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "AI & Machine Learning",
      "DevOps Consulting",
      "Data & Analytics",
      "Quality Assurance & Testing",
      "Cloud Services",
      "Cyber Security"
    ],
    color: "from-teal-100 to-cyan-100"
  },
  {
    title: "Digital Marketing",
    icon: <LucideTrendingUp className="w-5 h-5" />,
    items: [
      "Search Engine Optimisation (SEO)",
      "Social Media Management",
      "Performance Marketing (PPC & Paid Social)",
      "Content Marketing",
      "Marketing Automation",
      "Analytics",
      "Lead Generation",
      "CRM Solutions"
    ],
    color: "from-cyan-100 to-teal-100"
  },
  {
    title: "Experience Design",
    icon: <LayoutIcon className="w-5 h-5" />,
    items: [
      "UI/UX Design",
      "Website Design",
      "Mobile Experience",
      "Commerce Experience",
      "Human Machine Interface"
    ],
   color: "from-teal-100 to-cyan-100"
  },
  {
    title: "Strategic & Consulting",
    icon: <UsersIcon className="w-5 h-5" />,
    items: [
      "Online Consultations (all sorts)",
      "Project Management",
      "AI Automation Strategy & Implementation",
      "Brand Building from Scratch"
    ],
    color: "from-cyan-100 to-teal-100"
  }
];


const packages = [
  {
    title: "Launchpad",
    subtitle: "For new ventures",
    icon: <LucideRocket className="w-6 h-6" />,
    price: "$3,500+",
    note: "starting at",
    popular: false,
    features: [
      "Custom Website (5-7 Pages)",
      "Basic CMS & SEO",
      "Social Media Setup",
      "Monthly Performance Snapshot"
    ],
    color: "from-cyan-50 to-cyan-100/70",
    accent: "bg-gradient-to-r from-cyan-400 to-cyan-500"
  },
  {
    title: "Accelerator",
    subtitle: "For growing businesses",
    icon: <LucideZap className="w-6 h-6" />,
    price: "$7,000+",
    note: "starting at",
    popular: true,
    features: [
      "Everything in Launchpad",
      "Enhanced Website (10-15 Pages)",
      "Content Marketing (2 Blogs/mo)",
      "Basic Google Ads"
    ],
    color: "from-cyan-100/50 to-teal-100/60",
    accent: "bg-gradient-to-r from-cyan-500 to-teal-500"
  },
  {
    title: "Enterprise Impact",
    subtitle: "For market leaders",
    icon: <LucideAward className="w-6 h-6" />,
    price: "Custom",
    note: "Tailored solutions",
    popular: false,
    features: [
      "Everything in Accelerator",
      "Enterprise-Grade Platform",
      "Mobile App Development",
      "Advanced AI & DevOps"
    ],
    color: "from-teal-50/80 to-cyan-100/70",
    accent: "bg-gradient-to-r from-teal-400 to-cyan-500"
  }
];


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- MAIN PAGE COMPONENT ---

export default function FluxPremiumPage() {



  const [expandedServices, setExpandedServices] = useState({});

  const toggleService = (index) => {
    setExpandedServices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  const ArchitecturalDivider = ({ title, id }) => (
    <div id={id} className="relative h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-7xl mx-auto my-20 md:my-28">
      <h2 className="absolute left-1/2 -translate-x-1/2 -top-4 bg-slate-50 px-4 text-gray-500 text-lg font-semibold text-center md:text-2xl">
        {title}
      </h2>
    </div>
  );


  const colorConfigs = {
  launchpad: {
    primary: '#06b6d4', // cyan-500
    gradientFrom: '#06b6d4', // from-cyan-500
    gradientTo: '#0891b2', // to-cyan-600
    text: '#ffffff',
    hover: '#0e7490', // cyan-700
    iconBg: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.20)'
  },
  accelerator: {
    primary: '#0d9488', // teal-600
    gradientFrom: '#0d9488', // from-teal-600
    gradientTo: '#0f766e', // to-teal-700
    text: '#ffffff',
    hover: '#115e59', // teal-800
    iconBg: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.20)'
  },
  enterprise: {
    primary: '#7c3aed', // violet-600
    gradientFrom: '#7c3aed', // from-violet-600
    gradientTo: '#6d28d9', // to-violet-700
    text: '#ffffff',
    hover: '#5b21b6', // violet-800
    iconBg: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.20)'
  }
};


// --- Detailed Package Data ---
const packagesData = [
  {
    id: 'launchpad',
    title: "The Launchpad Package",
    idealFor: "Startups, small businesses, or new ventures looking to establish a professional online presence and kickstart their digital journey.",
    valueProp: "Get a professional, functional website and establish your initial digital footprint to connect with your audience.",
    icon: TbRocket,
    colorConfig: colorConfigs.launchpad,
    
     inclusions: [
      {
        category: "Web & Experience Design",
        details: [
          "Custom Website Design & Development (Up to 5-7 Pages): Responsive, modern UI/UX design.",
          "Basic Content Management System (CMS) Setup: Empowering clients to manage basic website content easily.",
          "Mobile Responsiveness: Ensuring the site looks great on all devices."
        ]
      },
      {
        category: "Digital Marketing & SEO",
        details: [
          "Initial SEO Integration: Basic on-page SEO setup for core pages.",
          "Google My Business Optimization: Setting up and optimizing local listings.",
          "Social Media Profile Setup (2 Platforms): Professional setup of profiles (e.g., Facebook, Instagram).",
          "Monthly Performance Snapshot: A concise report on website traffic and engagement."
        ]
      },
      {
        category: "Strategic & Account Management",
        details: ["Initial Consultation & Discovery Session", "Dedicated Account Coordinator", "Bi-monthly Check-in Calls"]
      }
    ]

    
  },
  {
    id: 'accelerator',
    title: "The Accelerator Package",
    idealFor: "Growing businesses that have an existing online presence but need to enhance their reach, engage more effectively, and drive conversions.",
    valueProp: "Boost your online visibility, attract qualified leads, and convert them into customers with integrated web and marketing efforts.",
    icon: TbBolt,
    colorConfig: colorConfigs.accelerator,
    inclusions: [
      {
        category: "Enhanced Web & Experience Design",
        details: [
            "All 'Launchpad' features, PLUS:",
            "Enhanced Custom Website (Up to 10-15 Pages / Blog): Complex layouts and interactive elements.",
            "E-commerce Basic Setup (up to 10 products, optional): Utilizing platforms like Shopify or WordPress.",
            "Website Maintenance & Security (Monthly): Updates, backups, and basic security monitoring."
        ]
      },
      {
        category: "Digital Marketing & Lead Generation",
        details: [
            "Comprehensive SEO Strategy (On-Page & Technical): In-depth keyword research and technical audit.",
            "Content Marketing (2 Blog Posts/Month): Strategically planned content to attract organic traffic.",
            "Social Media Management (3 Platforms): Regular posting and community engagement.",
            "Email Marketing Setup & Campaign: Lead nurturing, welcome series, or newsletter setup.",
            "Google Ads Basic Campaign Management (ad spend separate)."
        ]
      },
      {
        category: "Strategic & Account Management",
        details: [
            "In-depth Quarterly Strategy Review", "Dedicated Digital Marketing Manager", "Bi-weekly Performance Reports & Calls", "Access to basic data dashboards"
        ]
      }
    ]
  },
  {
    id: 'enterprise',
    title: "The Enterprise Impact Package",
    idealFor: "Established businesses and large enterprises seeking aggressive growth, market leadership, and a highly sophisticated, fully integrated digital ecosystem.",
    valueProp: "Achieve market dominance and maximize your digital ROI through a fully customized, continuously optimized, and data-driven digital ecosystem.",
    icon: TbBuildingSkyscraper,
    colorConfig: colorConfigs.enterprise,
      inclusions: [
      {
        category: "Web & Experience Design",
        details: [
          "All 'Accelerator' features, PLUS:",
          "Enterprise-Grade Custom Website/Platform Development: Complex functionalities, custom integrations (CRM, ERP), scalable architecture.",
          "On-Demand 3D Website Elements/Integration: Incorporating immersive 3D graphics and interactive experiences.",
          "AR Menu Development: Creation of interactive Augmented Reality menus for products/services.",
          "Advanced E-commerce Solutions: Multi-vendor, subscription models, complex product catalogs.",
          "Dedicated Web Development & Maintenance Team: Priority support and continuous feature development.",
          "Conversion Rate Optimization (CRO): A/B testing, user behavior analysis, heatmaps.",
          "Mobile App Development: Custom mobile application development for iOS/Android."
        ]
      },
      {
        category: "Digital Marketing & AI Automation",
        details: [
          "Full-Spectrum SEO (Local, Technical, Content, Link Building): Aggressive organic growth strategies.",
          "Extensive Content Marketing Strategy: High-volume content creation and distribution.",
          "Advanced Social Media Strategy & Advertising: Comprehensive campaign management.",
          "Sophisticated Email Marketing & Marketing Automation: Complex workflows and CRM integration.",
          "Multi-Channel Paid Advertising: Strategic budget allocation across all platforms.",
          "Advanced Lead Generation Systems: Robust lead capture funnels and nurturing strategies.",
          "Data Analysis & Attribution Modeling: Deep dives into customer journey and marketing effectiveness.",
          "AI Automation Implementation: Integrating AI & Machine Learning tools for efficiency."
        ]
      },
            {
        category: "Strategic & Account Management",
        details: [
          "Dedicated Senior Digital Marketing Manager: Strategic leadership and hands-on guidance.",
          "Monthly In-depth Performance Reviews: Comprehensive data analysis and strategic adjustments.",
          "Custom Data Dashboards & Predictive Analytics: Real-time insights and forecasting.",
          "Priority Support & Rapid Response.",
          "Regular Team Syncs & Client Workshops.",
          "Comprehensive Project Management: Dedicated project manager overseeing all initiatives.",
          "Unlimited Online Consultations: Ongoing strategic guidance and support.",
          "DevOps Consulting: CI/CD, infrastructure as code, and cloud optimization.",
          "Cloud Services & Cyber Security Consulting: Robust cloud infrastructure and security."
        ]
      }
    ],
  }
];



  return (
    <>

    <div className="   relative z-1 bg-transparent font-sans text-slate-800 antialiased">


      <main>
       
        {/* --- Hero Section --- */}


        {/* --- Core Services Section --- */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-cyan-50/20">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          {/* Header section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative z-10"
          >
            <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
              <LayersIcon className="mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-600">Core Capabilities</span>
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              A holistic suite of services designed to build, market, and elevate your brand in the digital landscape
            </p>
          </motion.div>


   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white  rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow h-full bg-gradient-to-br from-white to-gray-50   duration-300 hover:-translate-y-2"
 
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 flex items-center`}>
                  <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center text-cyan-600 shadow-sm mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.items.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-start">
                       <div className="bg-cyan-100/50 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-3 h-3 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence>
                    {expandedServices[index] && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 overflow-hidden"
                      >
                        {service.items.slice(5).map((item, i) => (
                          <motion.li
                            key={i + 5}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start"
                          >
                          <div className="bg-cyan-100/50 rounded-full p-1 mr-3 ">
                            <svg className="w-3 h-3 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                           <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {service.items.length > 5 && (
                    <button
                      onClick={() => toggleService(index)}
                      className="mt-4 flex items-center text-cyan-700 relative z-10 hover:text-cyan-600 text-sm font-medium"
                    >
                      {expandedServices[index] ? (
                        <>
                          <ChevronUp className="mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-1" />
                          View More ({service.items.length - 5} more)
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center relative z-10"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg transition-all flex items-center mx-auto group">
              Explore All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        
        </section>



      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-white to-cyan-50/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className=" text-2xl md:text-4xl  font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Tailored Packages
          </span> for Every Business Need
        </h2>
        <p className="md:text-md text-gray-600 max-w-3xl mx-auto">
          Strategic solutions designed to scale with your business from launch to market leadership
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-10 flex items-center">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Most Popular
              </div>
            )}
            
            <div className={`bg-gradient-to-br ${pkg.color} rounded-xl shadow-xl overflow-hidden border border-cyan-100/50 h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2`}>
              <div className="p-8 text-center">
                <div className={`w-14 h-14 ${pkg.accent} rounded-lg shadow-md flex items-center justify-center mx-auto mb-4 text-white`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.subtitle}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500 block text-sm mt-1">{pkg.note}</span>
                </div>
              </div>
              
              <div className="px-8 pb-8 flex-grow">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-cyan-100/50 rounded-full p-1 mr-3 mt-0.5">
                        <CheckIcon className="text-cyan-600 w-3 h-3" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8">
                <button className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:shadow-lg hover:-translate-y-0.5'
                    : 'bg-white text-gray-800 border border-cyan-200 hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50/50'
                }`}>
                  Get Started
                  <ArrowRightCircleIcon className={`ml-2 transition-transform ${
                    pkg.popular ? 'group-hover:translate-x-1' : ''
                  }`} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

 

 

        

      </main>

    </div>

    
 
        

    </>



  );
}
