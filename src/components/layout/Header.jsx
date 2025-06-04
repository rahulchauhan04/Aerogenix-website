'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import {
  FaRocket,
  FaArrowRight,
  FaPlay,
  FaChevronDown,
  FaBars,
  FaChevronRight,
} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import logo from '../../assets/images/logo2.png'


// Header Menu Data
const headerMenuData = [
  {
    title: 'Platform',
    items: [
      {
        title: 'Core Platform Components',
        links: [
          {
            text: 'AeroGenix Studio',
            href: '/platform/studio',
            description: 'Design & Build',
          },
          {
            text: 'AeroGenix Runtime',
            href: '/platform/runtime',
            description: 'Execute & Adapt',
          },
          {
            text: 'AeroGenix Control Center',
            href: '/platform/control-center',
            description: 'Manage & Govern',
          },
          {
            text: 'AeroGenix GPT',
            href: '/platform/gpt',
            description: 'Reason & Understand',
          },
        ],
      },
    ],
    image: {
      src: '/placeholder.svg?height=300&width=400&text=Platform+Overview',
      alt: 'Platform',
      title: 'AeroGenix Platform',
      description: 'Complete enterprise AI platform',
      link: '/platform',
    },
  },
  {
    title: 'Agent Applications',
    items: [
      {
        title: 'Production-Ready Agents',
        links: [
          {
            text: 'AeroChaos',
            href: '/agents/aerochaos',
            description: 'Resilience Engineering',
          },
          {
            text: 'AeroEdge',
            href: '/agents/aeroedge',
            description: 'Edge Intelligence',
          },
          {
            text: 'AeroInsight',
            href: '/agents/aeroinsight',
            description: 'AI Maturity Assessment',
          },
        ],
      },
    ],
    image: {
      src: '/placeholder.svg?height=300&width=400&text=Agent+Applications',
      alt: 'Agents',
      title: 'Intelligent Agents',
      description: 'Pre-built enterprise solutions',
      link: '/agents',
    },
  },
  {
    title: 'Use Cases',
    items: [
      {
        title: 'Enterprise Use Cases',
        links: [
          {
            text: 'Predictive Maintenance',
            href: '/use-cases/predictive-maintenance',
          },
          { text: 'Chaos Engineering', href: '/use-cases/chaos-engineering' },
          { text: 'AI Transformation', href: '/use-cases/ai-transformation' },
          { text: 'Edge Autonomy', href: '/use-cases/edge-autonomy' },
          { text: 'LLM Governance', href: '/use-cases/llm-governance' },
        ],
      },
    ],
    image: {
      src: '/placeholder.svg?height=300&width=400&text=Use+Cases',
      alt: 'Use Cases',
      title: 'Enterprise Use Cases',
      description: 'Real-world applications',
      link: '/use-cases',
    },
  },
  {
    title: 'Docs',
    items: [
      {
        title: 'Documentation',
        links: [
          { text: 'Developer Docs', href: '/docs/developer' },
          { text: 'API Reference', href: '/docs/api' },
        ],
      },
    ],
    image: {
      src: '/placeholder.svg?height=300&width=400&text=Documentation',
      alt: 'Documentation',
      title: 'Developer Resources',
      description: 'Complete documentation',
      link: '/docs',
    },
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Knowledge Base',
        links: [
          { text: 'Whitepapers', href: '/resources/whitepapers' },
          { text: 'Case Studies', href: '/resources/case-studies' },
          { text: 'Product Updates', href: '/resources/updates' },
          { text: 'Engineering Blog', href: '/resources/blog' },
        ],
      },
    ],
    image: {
      src: '/placeholder.svg?height=300&width=400&text=Resources',
      alt: 'Resources',
      title: 'Learning Resources',
      description: 'Stay informed and updated',
      link: '/resources',
    },
  },
  {
    title: 'Pricing',
    items: [
      {
        title: 'Pricing Options',
        links: [
          { text: 'Platform Pricing', href: '/pricing/platform' },
          { text: 'Agent Pricing', href: '/pricing/agents' },
          { text: 'Deployment Models', href: '/pricing/deployment' },
          { text: 'Licensing FAQ', href: '/pricing/faq' },
        ],
      },
    ],
    image: {
      src: '/placeholder.svg?height=300&width=400&text=Pricing',
      alt: 'Pricing',
      title: 'Flexible Pricing',
      description: 'Choose the right plan',
      link: '/pricing',
    },
  },
];

// Mobile Menu Component
const MobileMenu = ({ isSticky }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStack, setMenuStack] = useState([
    { title: 'Menu', items: headerMenuData },
  ]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navigateToSubMenu = (item) => {
    if (item.items || item.links) {
      setMenuStack((prevStack) => [
        ...prevStack,
        {
          title: item.title,
          items: item.items || [],
          links: item.links || [],
        },
      ]);
    }
  };

  const navigateBack = () => {
    setMenuStack((prevStack) =>
      prevStack.length > 1 ? prevStack.slice(0, -1) : prevStack
    );
  };

  const currentMenu = menuStack[menuStack.length - 1];

  return (
    <div className="relative">
      <motion.button
        onClick={toggleMenu}
        className="text-2xl p-2 focus:outline-none relative z-70 text-gray-800 hover:text-blue-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
      </motion.button>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 h-[100dvh] overflow-y-auto p-4"
        >
          <div className="h-full flex flex-col">
            <div className="flex-grow">
              <div className="mt-16">
                {menuStack.length > 1 && (
                  <motion.button
                    onClick={navigateBack}
                    className="mb-4 flex items-center text-blue-600 absolute top-2 left-2 text-lg"
                    whileHover={{ x: -5 }}
                  >
                    <FaChevronRight className="transform rotate-180 mr-2" />
                    Back
                  </motion.button>
                )}

                <motion.h2
                  className="text-3xl font-bold mb-8 text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {currentMenu.title}
                </motion.h2>

                {currentMenu.items && currentMenu.items.length > 0 && (
                  <div className="space-y-4">
                    {currentMenu.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="py-3"
                      >
                        <div
                          className="flex items-center justify-between cursor-pointer text-lg"
                          onClick={() => navigateToSubMenu(item)}
                        >
                          <span className="font-semibold text-gray-800">
                            {item.title}
                          </span>
                          <FaChevronRight className="text-gray-600" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {currentMenu.links && currentMenu.links.length > 0 && (
                  <div className="space-y-3">
                    {currentMenu.links.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        className="block py-3 text-blue-600 hover:text-blue-800 flex items-center justify-between group"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMenuStack([
                            { title: 'Menu', items: headerMenuData },
                          ]);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <div>
                          <div className="font-medium text-lg">{link.text}</div>
                          {link.description && (
                            <div className="text-sm text-gray-500">
                              {link.description}
                            </div>
                          )}
                        </div>
                        <FaArrowRight className="text-gray-400 group-hover:text-blue-600" />
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-8">
              {/* Login Options */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Quick Access
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a
                    href="/login/studio"
                    className="p-2 text-center bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100"
                  >
                    Studio
                  </a>
                  <a
                    href="/login/control"
                    className="p-2 text-center bg-green-50 rounded-lg text-green-600 hover:bg-green-100"
                  >
                    Control Center
                  </a>
                  <a
                    href="/login/gpt"
                    className="p-2 text-center bg-purple-50 rounded-lg text-purple-600 hover:bg-purple-100"
                  >
                    AeroGenix GPT
                  </a>
                  <a
                    href="/login/agents"
                    className="p-2 text-center bg-orange-50 rounded-lg text-orange-600 hover:bg-orange-100"
                  >
                    Agents
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-3">
                <Button className="w-full justify-center" icon={<FaRocket />}>
                  Try AeroGenix Studio
                </Button>
                <Button
                  primary
                  className="w-full justify-center"
                  icon={<FaPlay />}
                >
                  Request Enterprise Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Desktop Mega Menu Item
const MegaMenuItem = ({ title, items, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="flex items-center space-x-1 py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
        whileHover={{ y: -1 }}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className="text-xs" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 10,
          visibility: isOpen ? 'visible' : 'hidden',
        }}
        transition={{ duration: 0.2 }}
        className="absolute -left-1/3 -translate-x-1/3 top-full mt-2 min-w-[750px] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 z-[1100]"
      >
        <div className="p-6">
          <div className="flex gap-6">
            {/* Menu Content */}
            <div className="flex-grow">
              {items &&
                items.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-2">
                      {section.title}
                    </h3>

                    {section.links && (
                      <div className="space-y-2">
                        {section.links.map((link, linkIdx) => (
                          <motion.a
                            key={linkIdx}
                            href={link.href}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/80 transition-colors group"
                            whileHover={{ x: 5 }}
                            onClick={() => setIsOpen(false)}
                          >
                            <div>
                              <div className="font-medium text-gray-800 group-hover:text-blue-600">
                                {link.text}
                              </div>
                              {link.description && (
                                <div className="text-sm text-gray-500">
                                  {link.description}
                                </div>
                              )}
                            </div>
                            <FaArrowRight className="text-gray-400 group-hover:text-blue-600 text-sm" />
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Image Card */}
            {image && (
              <motion.a
                href={image.link}
                className="w-80 h-64 relative rounded-xl overflow-hidden shadow-lg group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                    <p className="text-gray-100 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Header Component
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full h-20 inline-flex items-center bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-300 z-[1000] ${
        isSticky ? 'bg-white/95' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="AeroAegis Logo"
                className="h-10 w-10 rounded-lg shadow-md"
              />
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-800">
                  AeroAegis
                </span>
                <div className="text-xs text-blue-600 font-medium">
                  AeroGenix™ Platform
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {headerMenuData.map((item, index) => (
              <MegaMenuItem
                key={index}
                title={item.title}
                items={item.items}
                image={item.image}
              />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Login Dropdown */}
            <div className="relative group">
              <motion.button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                <span>Login</span>
                <FaChevronDown className="text-xs" />
              </motion.button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-4 space-y-2">
                  <Link
                    to="/login/studio"
                    className="block p-3 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="font-medium text-gray-800 hover:text-blue-600">
                      Studio Login
                    </div>
                  </Link>
                  <Link
                    to="/login/control"
                    className="block p-3 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="font-medium text-gray-800 hover:text-blue-600">
                      Control Center
                    </div>
                  </Link>
                  <Link
                    to="/login/gpt"
                    className="block p-3 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="font-medium text-gray-800 hover:text-blue-600">
                      AeroGenix GPT
                    </div>
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    to="/agents/aerochaos"
                    className="block p-3 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="font-medium text-gray-800 hover:text-blue-600">
                      AeroChaos
                    </div>
                  </Link>
                  <Link
                    to="/agents/aeroedge"
                    className="block p-3 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="font-medium text-gray-800 hover:text-blue-600">
                      AeroEdge
                    </div>
                  </Link>
                  <Link
                    to="/agents/aeroinsight"
                    className="block p-3 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="font-medium text-gray-800 hover:text-blue-600">
                      AeroInsight
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button className="text-sm px-6 py-2" icon={<FaRocket />}>
                Try AeroGenix Studio
              </Button>
              <Button primary className="text-sm px-6 py-2" icon={<FaPlay />}>
                Request Enterprise Demo
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu isSticky={isSticky} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
