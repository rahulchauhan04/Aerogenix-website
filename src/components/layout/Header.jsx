'use client';
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { createPortal } from 'react-dom';
import {
  FaRocket,
  FaArrowRight,
  FaPlay,
  FaChevronDown,
  FaBars,
  FaChevronRight,
  FaKeyboard,
  FaAccessibleIcon,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import logo from '../../assets/images/ai.png';
import agents2 from '../../assets/images/agents3.png';
import UseCases from '../../assets/images/UseCases.png';
import automation from '../../assets/images/automation.png';
import platform from '../../assets/images/platform1.png';
import docs from '../../assets/images/docs.png';
import Resources from '../../assets/images/Resources.png';
import Pricing from '../../assets/images/Pricing.png';
// Import proper logos for login dropdown
import controlLogo from '../../assets/images/control_logo.svg';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import aeroInsightLogo from '../../assets/images/aeroInsightLogo.svg';
import aeroChaosLogo from '../../assets/images/aeroChaosLogo.png';
import hexagonLogo from '../../assets/images/hexagon.png';

// ======== Enhanced Animation Presets & Constants =========

const TIMING = {
  hoverDelay: 200,
  exitDelay: 150,
  animationDuration: 0.3,
  staggerDelay: 0.05,
  fastAnimation: 0.15,
};

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Enhanced color palette following design system
const COLORS = {
  primary: '#0047AB',
  secondary: '#5C40A3',
  accent: '#3B82F6',
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
};

// Enhanced animation variants with accessibility support
const createAnimationVariants = (shouldReduceMotion) => ({
  fadeInUp: {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : 8, scale: shouldReduceMotion ? 1 : 0.96 },
    transition: { 
      duration: shouldReduceMotion ? 0.1 : TIMING.animationDuration, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  slideInFromRight: {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
    transition: { 
      duration: shouldReduceMotion ? 0.15 : 0.3, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  scaleIn: {
    initial: { scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.2 }
  },
  megaMenuContainer: {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : 5, scale: shouldReduceMotion ? 1 : 0.98 },
    transition: { 
      duration: shouldReduceMotion ? 0.1 : 0.25, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : TIMING.staggerDelay,
      }
    }
  }
});

// ======== Accessibility Hooks =========

const useKeyboardNavigation = (isActive, onClose, onNavigate) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose?.();
          break;
        case 'Tab':
          // Allow natural tab navigation
          break;
        case 'ArrowDown':
        case 'ArrowUp':
          e.preventDefault();
          onNavigate?.(e.key === 'ArrowDown' ? 'next' : 'prev');
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          const focusedElement = document.activeElement;
          if (focusedElement?.click) {
            focusedElement.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose, onNavigate]);
};

const useFocusTrap = (isActive, containerRef) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => container.removeEventListener('keydown', handleTabKey);
  }, [isActive, containerRef]);
};

// ======== Menu Data =========

const headerMenuData = [
  {
    title: 'Platform',
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
    image: {
      src: platform,
      alt: 'AeroGenix Platform Overview',
      title: 'AeroGenix Platform',
      description: 'Complete enterprise AI platform for building, deploying, and scaling intelligent agents',
      link: '/platform',
    },
  },
  {
    title: 'Agent Applications',
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
    image: {
      src: agents2,
      alt: 'Intelligent Agent Applications',
      title: 'Intelligent Agents',
      description: 'Pre-built enterprise solutions ready for deployment in your environment',
      link: '/agents',
    },
  },
  {
    title: 'Use Cases',
    links: [
      {
        text: 'Predictive Maintenance',
        href: '/use-cases/predictive-maintenance',
      },
      { 
        text: 'Chaos Engineering', 
        href: '/use-cases/chaos-engineering' 
      },
      { 
        text: 'AI Transformation', 
        href: '/use-cases/ai-transformation' 
      },
      { 
        text: 'Edge Autonomy', 
        href: '/use-cases/edge-autonomy' 
      },
      { 
        text: 'LLM Governance', 
        href: '/use-cases/llm-governance' 
      },
    ],
    image: {
      src: UseCases,
      alt: 'Enterprise Use Cases',
      title: 'Enterprise Use Cases',
      description: 'Real-world applications and industry-specific implementations',
      link: '/use-cases',
    },
  },
  {
    title: 'Docs',
    links: [
      { 
        text: 'Developer Docs', 
        href: '/docs/developer' 
      },
      { 
        text: 'API Reference', 
        href: '/docs/api' 
      },
    ],
    image: {
      src: docs,
      alt: 'Developer Documentation',
      title: 'Developer Resources',
      description: 'Complete documentation, APIs, and integration guides for developers',
      link: '/docs',
    },
  },
  {
    title: 'Resources',
    links: [
      { 
        text: 'Whitepapers', 
        href: '/resources/whitepapers' 
      },
      { 
        text: 'Case Studies', 
        href: '/resources/case-studies' 
      },
      { 
        text: 'Product Updates', 
        href: '/resources/updates' 
      },
      { 
        text: 'Engineering Blog', 
        href: '/resources/blog' 
      },
    ],
    image: {
      src: Resources,
      alt: 'Resources',
      title: 'Learning Resources',
      description: 'Stay informed and updated',
      link: '/resources',
    },
  },
  {
    title: 'Pricing',
    links: [
      { 
        text: 'Platform Pricing', 
        href: '/pricing/platform' 
      },
      { 
        text: 'Agent Pricing', 
        href: '/pricing/agents' 
      },
      { 
        text: 'Deployment Models', 
        href: '/pricing/deployment' 
      },
      { 
        text: 'Licensing FAQ', 
        href: '/pricing/faq' 
      },
    ],
    image: {
      src: Pricing,
      alt: 'Pricing',
      title: 'Flexible Pricing',
      description: 'Choose the right plan',
      link: '/pricing',
    },
  },
];

// ======== Enhanced Mobile Menu =========

const MobileMenu = ({ isSticky }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const mobileMenuRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const variants = createAnimationVariants(shouldReduceMotion);

  // Enhanced accessibility
  useKeyboardNavigation(isMenuOpen, () => setIsMenuOpen(false), (direction) => {
    const maxIndex = activeSubmenu ? activeSubmenu.links.length - 1 : headerMenuData.length - 1;
    if (direction === 'next') {
      setFocusedIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    } else {
      setFocusedIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    }
  });
  useFocusTrap(isMenuOpen, mobileMenuRef);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      
      // Handle body scroll lock
      if (newState) {
        // Opening menu - lock body scroll
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
      } else {
        // Closing menu - unlock body scroll
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
      
      return newState;
    });
    setFocusedIndex(-1);
    // Reset submenu when closing
    if (isMenuOpen) {
      setActiveSubmenu(null);
    }
  }, [isMenuOpen]);

  // Cleanup body scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  const openSubmenu = useCallback((menuItem) => {
    setActiveSubmenu(menuItem);
    setFocusedIndex(-1);
  }, []);

  const closeSubmenu = useCallback(() => {
    setActiveSubmenu(null);
    setFocusedIndex(-1);
  }, []);

  // Close menu on resize to desktop and handle orientation changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS.lg && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleOrientationChange = () => {
      // Small delay to allow for screen resize
      setTimeout(() => {
        if (window.innerWidth >= BREAKPOINTS.lg && isMenuOpen) {
          setIsMenuOpen(false);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMenuOpen]);

  // Enhanced menu button with better accessibility
  const MenuButton = () => (
    <motion.button
      onClick={toggleMenu}
      className="relative flex items-center justify-center p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group z-[99999]"
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      <div className="relative w-6 h-6">
        <motion.span
          className="absolute block h-0.5 w-6 bg-current rounded-full"
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 0 : -6
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute block h-0.5 w-6 bg-current rounded-full"
          animate={{
            opacity: isMenuOpen ? 0 : 1
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute block h-0.5 w-6 bg-current rounded-full"
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? 0 : 6
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </div>
    </motion.button>
  );

  return (
    <div className="relative">
      <MenuButton />

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Portal-rendered backdrop with highest z-index */}
            {createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.25 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                onClick={toggleMenu}
                aria-hidden="true"
                style={{ zIndex: 999998 }}
              />,
              document.body
            )}
            
            {/* Portal-rendered slide-in menu with highest z-index */}
            {createPortal(
              <motion.div
                ref={mobileMenuRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                initial={variants.slideInFromRight.initial}
                animate={variants.slideInFromRight.animate}
                exit={variants.slideInFromRight.exit}
                transition={variants.slideInFromRight.transition}
                className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm bg-white/98 backdrop-blur-xl shadow-2xl border-l border-gray-100/50 overflow-hidden"
                style={{ maxHeight: '100dvh', zIndex: 999999 }}
              >
                <div className="flex flex-col h-full">
                  {/* Enhanced header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-100/60 bg-gradient-to-r from-gray-50/80 to-gray-50/60 flex-shrink-0">
                    {activeSubmenu && (
                      <motion.button
                        onClick={closeSubmenu}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 -ml-2"
                        whileHover={shouldReduceMotion ? {} : { x: -3 }}
                        aria-label="Go back to previous menu"
                      >
                        <FaChevronRight className="transform rotate-180 mr-2 text-sm" />
                        <span className="text-sm font-medium">Back</span>
                      </motion.button>
                    )}
                    
                    <motion.h2
                      id="mobile-menu-title"
                      className="text-lg font-bold text-gray-900 tracking-tight"
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                    >
                      {activeSubmenu ? activeSubmenu.title : 'Menu'}
                    </motion.h2>

                    <motion.button
                      onClick={toggleMenu}
                      className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      aria-label="Close menu"
                    >
                      <FaXmark size={18} />
                    </motion.button>
                  </div>

                  {/* Enhanced scrollable content */}
                  <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-6">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={variants.stagger}
                    >
                      {/* Show submenu links if activeSubmenu is set */}
                      {activeSubmenu ? (
                        <div className="space-y-2">
                          {activeSubmenu.links.map((link, index) => (
                            <motion.a
                              key={index}
                              href={link.href}
                              variants={variants.fadeInUp}
                              className="flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white/40 hover:bg-blue-50/60 border-gray-100/40 hover:border-blue-200/60"
                              onClick={toggleMenu}
                              onFocus={() => setFocusedIndex(index)}
                              onBlur={() => setFocusedIndex(-1)}
                            >
                              <div className="flex-1">
                                <div className="text-base font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                                  {link.text}
                                </div>
                                {link.description && (
                                  <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                                    {link.description}
                                  </div>
                                )}
                              </div>
                              <motion.div
                                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FaArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200 ml-3" />
                              </motion.div>
                            </motion.a>
                          ))}
                        </div>
                      ) : (
                        /* Show main menu items */
                        <div className="space-y-2">
                          {headerMenuData.map((item, index) => (
                            <motion.div
                              key={index}
                              variants={variants.fadeInUp}
                              className="relative"
                            >
                              <button
                                onClick={() => openSubmenu(item)}
                                className="w-full flex items-center justify-between p-4 text-left rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group bg-white/60 hover:bg-blue-50/80 border-gray-100/60 hover:border-blue-200/60"
                                aria-describedby={`menu-item-${index}-desc`}
                                onFocus={() => setFocusedIndex(index)}
                                onBlur={() => setFocusedIndex(-1)}
                              >
                                <div>
                                  <span className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                                    {item.title}
                                  </span>
                                  <p id={`menu-item-${index}-desc`} className="text-sm text-gray-500 mt-0.5">
                                    Explore {item.title.toLowerCase()}
                                  </p>
                                </div>
                                <motion.div
                                  whileHover={shouldReduceMotion ? {} : { x: 3 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <FaChevronRight className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                                </motion.div>
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Enhanced footer with improved quick access */}
                  <div className="border-t border-gray-100/60 p-4 bg-gradient-to-r from-gray-50/40 to-gray-50/30 space-y-4 flex-shrink-0">
                    {/* Quick Access Grid */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100/60">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        <FaKeyboard className="mr-2 text-blue-600" size={14} />
                        Quick Access
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { href: "/login/studio", text: "Studio", color: "blue" },
                          { href: "/login/control", text: "Control", color: "green" },
                          { href: "/login/gpt", text: "GPT", color: "purple" },
                          { href: "/login/agents", text: "Agents", color: "orange" }
                        ].map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className={`p-3 text-center rounded-lg transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              item.color === 'blue' ? 'bg-blue-50/80 hover:bg-blue-100/80 text-blue-700 hover:text-blue-800 focus:ring-blue-500' :
                              item.color === 'green' ? 'bg-green-50/80 hover:bg-green-100/80 text-green-700 hover:text-green-800 focus:ring-green-500' :
                              item.color === 'purple' ? 'bg-purple-50/80 hover:bg-purple-100/80 text-purple-700 hover:text-purple-800 focus:ring-purple-500' :
                              'bg-orange-50/80 hover:bg-orange-100/80 text-orange-700 hover:text-orange-800 focus:ring-orange-500'
                            }`}
                            onClick={toggleMenu}
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-col space-y-3">
                      <motion.button
                        className="w-full py-3.5 rounded-xl font-semibold bg-gray-50/80 hover:bg-blue-50/80 text-blue-700 hover:text-blue-800 flex items-center justify-center transition-all duration-200 border border-gray-200/60 hover:border-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        whileHover={shouldReduceMotion ? {} : { y: -1 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      >
                        <FaRocket className="mr-2 text-sm" />
                        <span>Try AeroGenix Studio</span>
                      </motion.button>
                      <motion.button
                        className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        whileHover={shouldReduceMotion ? {} : { y: -1 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      >
                        <FaPlay className="mr-2 text-sm" />
                        <span>Request Demo</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>,
              document.body
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ======== Enhanced Desktop MegaMenu Item =========

const MegaMenuItem = ({ title, links, image, onHover, onLeave, isActive, index }) => {
  const menuRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);

  const handleInteraction = useCallback((e) => {
    if (!menuRef.current) return;
    const rect = menuRef.current.getBoundingClientRect();
    onHover({ title, links, image, rect, index });
  }, [title, links, image, onHover, index]);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleInteraction();
        break;
      case 'Escape':
        onLeave();
        break;
      case 'ArrowRight':
        // Focus next menu item
        const nextButton = menuRef.current?.parentNode?.nextElementSibling?.querySelector('button');
        nextButton?.focus();
        break;
      case 'ArrowLeft':
        // Focus previous menu item
        const prevButton = menuRef.current?.parentNode?.previousElementSibling?.querySelector('button');
        prevButton?.focus();
        break;
    }
  }, [handleInteraction, onLeave]);

  return (
    <div
      ref={menuRef}
      className="relative group"
      onMouseEnter={handleInteraction}
      onMouseLeave={onLeave}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <motion.button
        className={`relative flex items-center space-x-1 lg:space-x-1.5 px-2 lg:px-3 xl:px-4 py-2 lg:py-2.5 font-medium transition-all duration-200 text-sm rounded-xl h-9 lg:h-10 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-fit ${
          isActive || isFocused
            ? 'text-gray-900 bg-gray-50/80 shadow-sm' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/60'
        }`}
        whileHover={shouldReduceMotion ? {} : { y: -1 }}
        onKeyDown={handleKeyDown}
        onFocus={handleInteraction}
        aria-expanded={isActive}
        aria-haspopup="true"
        aria-describedby={`menu-${index}-description`}
      >
        <span className="whitespace-nowrap font-medium tracking-tight text-xs lg:text-sm">{title}</span>
        <motion.div
          animate={{ 
            rotate: isActive ? 180 : 0,
            scale: isActive ? 1.1 : 1 
          }}
          transition={{ 
            duration: shouldReduceMotion ? 0.1 : 0.2,
            ease: "easeOut" 
          }}
        >
          <FaChevronDown className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
        </motion.div>
        
        {/* Enhanced active indicator */}
        <motion.div
          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isActive ? 1 : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ 
            duration: shouldReduceMotion ? 0.1 : 0.25, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          style={{ transformOrigin: 'center' }}
        />
        
        {/* Focus indicator */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0"
          animate={{ opacity: isFocused ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        />
      </motion.button>

      {/* Invisible bridge area with better positioning */}
      {isActive && (
        <div 
          className="absolute top-full left-0 right-0 h-4 bg-transparent z-[1999]" 
          style={{ marginTop: '2px' }}
        />
      )}
      
      {/* Hidden description for screen readers */}
      <div id={`menu-${index}-description`} className="sr-only">
        Navigate to {title} section. Press Enter to open submenu, Escape to close, Arrow keys to navigate.
      </div>
    </div>
  );
};

// ======== Enhanced Main Header =========

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ left: 0, width: 720 });
  
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const focusTimeoutRef = useRef(null);
  
  const shouldReduceMotion = useReducedMotion();
  const variants = createAnimationVariants(shouldReduceMotion);

  // Enhanced scroll detection with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          setIsSticky(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
    };
  }, []);

  // Enhanced menu hover handlers with improved timing
  const handleMenuHover = useCallback((menu) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (focusTimeoutRef.current) {
      clearTimeout(focusTimeoutRef.current);
    }
    
    setActiveMenu(menu);
    setIsDropdownHovered(false);
  }, []);

  const handleMenuLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isDropdownHovered) {
        setActiveMenu(null);
      }
    }, TIMING.hoverDelay);
  }, [isDropdownHovered]);

  const handleDropdownEnter = useCallback(() => {
    setIsDropdownHovered(true);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setIsDropdownHovered(false);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, TIMING.exitDelay);
  }, []);

  // Enhanced keyboard navigation
  useKeyboardNavigation(!!activeMenu, () => setActiveMenu(null));

  // Advanced responsive dropdown positioning algorithm
  useLayoutEffect(() => {
    if (activeMenu?.rect && navRef.current && dropdownRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Responsive width calculation with better breakpoints
      const minWidth = 340;
      const maxWidth = 750;
      let width = Math.max(minWidth, Math.min(maxWidth, viewportWidth * 0.9));
      
      // Mobile full-width handling
      if (viewportWidth < BREAKPOINTS.lg) {
        width = viewportWidth - 24;
      }
      
      // Smart horizontal positioning with center alignment
      let left = activeMenu.rect.left - navRect.left + (activeMenu.rect.width / 2) - (width / 2);
      
      // Prevent right overflow with better margin
      if (left + width > viewportWidth - 16) {
        left = viewportWidth - width - 16;
      }
      
      // Prevent left overflow with consistent margin
      if (left < 16) {
        left = 16;
      }
      
      // Enhanced vertical positioning with viewport detection
      const estimatedDropdownHeight = 400;
      const spaceBelow = viewportHeight - (navRect.bottom + 20);
      const spaceAbove = navRect.top - 20;
      const shouldShowAbove = spaceBelow < estimatedDropdownHeight && spaceAbove > estimatedDropdownHeight;
      
      setDropdownPos({ 
        left, 
        width,
        preferTop: shouldShowAbove
      });
    }
  }, [activeMenu]);

  // Enhanced dropdown styles with improved positioning
  const dropdownStyle = useMemo(() => {
    if (!activeMenu?.rect || !navRef.current) {
      return { 
        opacity: 0, 
        pointerEvents: 'none',
        visibility: 'hidden'
      };
    }

    return {
      left: dropdownPos.left,
      top: dropdownPos.preferTop ? 'auto' : navRef.current.offsetHeight + 8,
      bottom: dropdownPos.preferTop ? navRef.current.offsetHeight + 8 : 'auto',
      width: dropdownPos.width,
      opacity: 1,
      pointerEvents: 'auto',
      visibility: 'visible',
      transition: shouldReduceMotion 
        ? 'opacity 0.15s ease' 
        : 'left 0.25s cubic-bezier(0.16, 1, 0.3, 1), width 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
    };
  }, [activeMenu, dropdownPos, shouldReduceMotion]);

  return (
    <motion.header
      className={`fixed w-full z-[99998] transition-all duration-300 ${
        isSticky 
          ? 'bg-white/99 backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-gray-900/5' 
          : 'bg-white/95 backdrop-blur-xl border-b border-gray-100/40'
      }`}
      animate={{
        height: isSticky ? '60px' : '64px',
        backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.99)' : 'rgba(255, 255, 255, 0.95)'
      }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)'
      }}
      role="banner"
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-3 xl:px-6 2xl:px-8 2xl:pl-24 2xl:pr-8 max-w-full lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1800px] h-full">
        <div className="flex items-center justify-between h-full lg:gap-1 xl:gap-2">
          {/* Enhanced Logo with fixed sizing and responsive design */}
          <motion.div
            className="flex items-center flex-shrink-0 min-w-0"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2 lg:space-x-2.5 xl:space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl p-1"
              aria-label="AeroGenix AI Homepage"
            >
              <motion.div
                className="relative flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { rotate: 3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Logo with fallback */}
                <div className="h-8 w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="AeroGenix AI Logo"
                    className="h-full w-full object-contain"
                    draggable={false}
                    onError={(e) => {
                      // Fallback to text logo if image fails
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <span 
                    className="hidden text-white font-bold text-sm lg:text-base"
                    style={{ display: 'none' }}
                  >
                    AI
                  </span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              {/* Responsive logo text: always visible, stacked on mobile, inline on md+ */}
              <div className="flex flex-col min-w-0 max-w-[120px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-none ml-2 md:ml-3">
                <span className="logo-text logo-text-shadow text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-none group-hover:logo-text-hover transition-all duration-500 truncate">
                  AeroGenix AI
                </span>
                <span className="logo-badge leading-none truncate mt-1">
                  Powered by AeroAegis
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation with optimized spacing for mid-range screens */}
          <nav 
            ref={navRef} 
            className="hidden lg:flex items-center lg:space-x-0.5 xl:space-x-1 2xl:space-x-2 relative"
            role="navigation"
            aria-label="Main navigation"
          >
            {headerMenuData.map((item, index) => (
              <MegaMenuItem
                key={index}
                index={index}
                title={item.title}
                links={item.links}
                image={item.image}
                onHover={handleMenuHover}
                onLeave={handleMenuLeave}
                isActive={activeMenu?.title === item.title}
              />
            ))}

            {/* Enhanced Stripe-style mega menu dropdown */}
            <motion.div
              ref={dropdownRef}
              className="absolute z-[99997] overflow-hidden"
              style={dropdownStyle}
              role="menu"
              aria-hidden={!activeMenu}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              {/* Enhanced invisible bridge */}
              <div 
                className="absolute -top-4 left-0 right-0 h-4 bg-transparent" 
                aria-hidden="true"
              />
              
              <AnimatePresence mode="wait">
                {activeMenu && (
                  <motion.div
                    key={activeMenu.title}
                    initial={variants.fadeInUp.initial}
                    animate={variants.fadeInUp.animate}
                    exit={variants.fadeInUp.exit}
                    transition={variants.fadeInUp.transition}
                  >
                    {/* Enhanced triangle pointer */}
                    <motion.div
                      className="absolute -top-2 z-20"
                      style={{
                        left: Math.max(16, Math.min(
                          (activeMenu.rect.left - dropdownPos.left + activeMenu.rect.width / 2 - 6),
                          dropdownPos.width - 32
                        ))
                      }}
                      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0.1 : 0.2, 
                        delay: shouldReduceMotion ? 0 : 0.05 
                      }}
                    >
                      <div 
                        className="w-3 h-3 bg-white transform rotate-45 border border-gray-100"
                        style={{ 
                          filter: 'drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.06))',
                        }}
                      />
                    </motion.div>
                    
                    {/* Enhanced main dropdown container */}
                    <motion.div
                      className="bg-white/98 backdrop-blur-xl rounded-2xl overflow-hidden relative border border-gray-100/80"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.04))'
                      }}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8, scale: shouldReduceMotion ? 1 : 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0.15 : 0.25, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                    >
                      {/* Enhanced header section */}
                      <div className="bg-gradient-to-r from-gray-50/80 to-gray-50/60 rounded-t-2xl px-6 py-4 border-b border-gray-100/80">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base tracking-tight mb-1">
                              {activeMenu.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Explore our {activeMenu.title.toLowerCase()} capabilities and solutions
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-400">
                            <FaKeyboard />
                            <span>ESC to close</span>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced content section */}
                      <div className="flex flex-col lg:flex-row gap-0">
                        {/* Enhanced menu content */}
                        <div className="flex-1 p-6 min-w-0">
                          <motion.div
                            initial="initial"
                            animate="animate"
                            variants={variants.stagger}
                          >
                            {activeMenu.links && (
                              <motion.div variants={variants.fadeInUp} className="mb-6 last:mb-0">
                                <div className="space-y-1">
                                  {activeMenu.links.map((link, linkIdx) => (
                                    <motion.a
                                      key={linkIdx}
                                      href={link.href}
                                      className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                      onClick={() => setActiveMenu(null)}
                                      whileHover={shouldReduceMotion ? {} : { x: 2 }}
                                      transition={{ duration: 0.2, ease: "easeOut" }}
                                      role="menuitem"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-gray-900 group-hover:text-blue-700 text-sm mb-1 transition-colors duration-200 truncate">
                                          {link.text}
                                        </div>
                                        {link.description && (
                                          <div className="text-xs text-gray-500 leading-relaxed">
                                            {link.description}
                                          </div>
                                        )}
                                      </div>
                                      <motion.div 
                                        className="text-gray-400 group-hover:text-blue-600 ml-4 flex-shrink-0"
                                        whileHover={shouldReduceMotion ? {} : { x: 2 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                      >
                                        <FaArrowRight className="text-xs" />
                                      </motion.div>
                                    </motion.a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        </div>

                        {/* Optimized image card for 1152×768 (3:2 aspect ratio) images, with overlayed text and better fit */}
                        {activeMenu.image && (
                          <div className="flex items-center justify-center lg:min-w-[380px] lg:max-w-[420px] xl:min-w-[420px] xl:max-w-[480px] p-4">
                            <motion.a
                              href={activeMenu.image.link}
                              className="block relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              onClick={() => setActiveMenu(null)}
                              whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              style={{ width: '100%' }}
                            >
                              <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl border border-gray-200/60 flex items-center justify-center overflow-hidden group">
                                <img
                                  src={activeMenu.image.src || '/api/placeholder/1152/768'}
                                  alt={activeMenu.image.alt}
                                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out"
                                  style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', objectFit: 'cover' }}
                                  onError={(e) => {
                                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                                      <svg xmlns='http://www.w3.org/2000/svg' width='1152' height='768' viewBox='0 0 1152 768'>
                                        <rect width='1152' height='768' rx='32' fill='#f3f4f6'/>
                                        <text x='576' y='384' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='600' fill='#64748b'>${activeMenu.image.title}</text>
                                      </svg>
                                    `)}`;
                                  }}
                                />
                                {/* Overlayed text on image, bottom left, with vignette */}
                                <motion.div
                                  initial={{ opacity: 0, y: 24 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                                  className="absolute left-0 bottom-0 w-full px-8 py-6 flex flex-col items-start z-20"
                                >
                                  <div className="absolute left-0 bottom-0 w-full h-full rounded-b-2xl pointer-events-none z-[-1]"
                                    style={{
                                      background: 'linear-gradient(to top, rgba(30,41,59,0.32) 0%, rgba(30,41,59,0.12) 60%, transparent 100%)',
                                      backdropFilter: 'blur(2px)',
                                      WebkitBackdropFilter: 'blur(2px)'
                                    }}
                                  />
                                  <motion.h4
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.22 }}
                                    className="text-white text-xl font-bold drop-shadow-lg mb-2"
                                    style={{textShadow:'0 2px 8px rgba(0,0,0,0.18)'}}
                                  >
                                    {activeMenu.image.title}
                                  </motion.h4>
                                  <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.32 }}
                                    className="text-white text-base font-medium drop-shadow-md opacity-90 max-w-[80%]"
                                    style={{textShadow:'0 1px 6px rgba(0,0,0,0.14)'}}
                                  >
                                    {activeMenu.image.description}
                                  </motion.p>
                                </motion.div>
                                {/* Arrow icon appears only on image hover */}
                                <motion.div
                                  initial={{ opacity: 0, y: -10, x: 10 }}
                                  animate={{ opacity: 0, y: -10, x: 10 }}
                                  whileHover={{ opacity: 1, y: 0, x: 0 }}
                                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
                                  className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20 cursor-pointer z-30 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300"
                                >
                                  <FaArrowRight className="text-blue-600 text-lg" />
                                </motion.div>
                                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.01) 60%, transparent 100%)'}} />
                              </div>
                            </motion.a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>
          {/* Enhanced Desktop Actions - Optimized for mid-range screens */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-1.5 xl:space-x-2">
            {/* Enhanced Login Dropdown with responsive sizing */}
            <div className="relative group">
              <motion.button
                className="flex items-center space-x-1.5 lg:space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 lg:px-2 lg:py-1.5 xl:px-3 xl:py-2 rounded-lg hover:bg-gray-50/80 lg:text-xs xl:text-sm lg:h-8 xl:h-9"
                whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Login options"
              >
                <span className="font-medium">Login</span>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: shouldReduceMotion ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
                </motion.div>
              </motion.button>
              
              {/* Enhanced invisible bridge */}
              <div className="absolute top-full right-0 w-full h-3 bg-transparent group-hover:block hidden" />
              
              {/* Premium dropdown menu */}
              <motion.div 
                className="absolute top-full right-0 mt-3 w-80 bg-white/98 backdrop-blur-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100/80"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.04))'
                }}
                initial={{ opacity: 0, y: 8, scale: shouldReduceMotion ? 1 : 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Enhanced triangle pointer */}
                <div 
                  className="absolute -top-2 right-8 w-3 h-3 bg-white transform rotate-45 border border-gray-100"
                  style={{ 
                    filter: 'drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.06))',
                  }}
                />
                
                <div className="p-5">
                  {/* Enhanced header */}
                  <div className="bg-gradient-to-r from-gray-50/80 to-gray-50/60 rounded-xl p-4 mb-5 border border-gray-100/60">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900 text-sm">Quick Access</h4>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <FaKeyboard size={12} />
                        <span>Choose platform</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Access your AeroGenix AI workspace
                    </p>
                  </div>
                  
                  {/* Enhanced platform links */}
                  <div className="space-y-1 mb-5">
                    {[
                      { to: "/login/studio", title: "Studio Login", icon: logo, desc: "Design & build intelligent agents", color: "blue" },
                      { to: "/login/control", title: "Control Center", icon: controlLogo, desc: "Manage agent fleet & operations", color: "green" },
                      { to: "/login/gpt", title: "AeroGenix GPT", icon: hexagonLogo, desc: "AI reasoning & understanding", color: "purple" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.to} 
                        className="flex items-center px-4 py-3.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 mr-4 group-hover:scale-105 transition-transform duration-200 p-1">
                          <img 
                            src={item.icon} 
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 group-hover:text-blue-700 text-sm transition-colors duration-200 truncate">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                        </div>
                        <motion.div
                          whileHover={shouldReduceMotion ? {} : { x: 2 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 ml-3"
                        >
                          <FaArrowRight className="text-gray-400 group-hover:text-blue-600 text-xs transition-colors duration-200" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Enhanced divider */}
                  <div className="border-t border-gray-100/80 my-5"></div>
                  
                  {/* Enhanced agent applications */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between mb-3 px-4">
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Agent Applications
                      </div>
                      <div className="text-xs text-gray-400">Production ready</div>
                    </div>
                    {[
                      { to: "/agents/aerochaos", title: "AeroChaos", icon: aeroChaosLogo, desc: "Resilience engineering", badge: "New" },
                      { to: "/agents/aeroedge", title: "AeroEdge", icon: runtimeLogo, desc: "Edge intelligence platform", badge: "Beta" },
                      { to: "/agents/aeroinsight", title: "AeroInsight", icon: aeroInsightLogo, desc: "AI maturity assessment", badge: "Pro" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.to} 
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mr-3 group-hover:scale-105 transition-transform duration-200 p-1">
                          <img 
                            src={item.icon} 
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-900 group-hover:text-blue-700 text-sm transition-colors duration-200 truncate">
                              {item.title}
                            </span>
                            <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-md">
                              {item.badge}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                        </div>
                        <motion.div
                          whileHover={shouldReduceMotion ? {} : { x: 2 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex-shrink-0 ml-3"
                        >
                          <FaArrowRight className="text-gray-400 group-hover:text-blue-600 text-xs transition-colors duration-200" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced CTA Buttons - Responsive for mid-range screens */}
            <div className="hidden lg:flex items-center lg:space-x-1 xl:space-x-2">
              {/* Primary CTA - Always visible on lg+ */}
              <motion.button
                className="lg:px-2 lg:py-1.5 xl:px-3 xl:py-2 lg:text-xs xl:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 flex items-center lg:space-x-1 xl:space-x-2 shadow-sm hover:shadow-md lg:h-8 xl:h-9 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                aria-label="Get a demo of AeroGenix AI platform"
              >
                <span>Get Demo</span>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPlay className="lg:text-xs xl:text-xs" />
                </motion.div>
              </motion.button>
              
              {/* Secondary CTA - Hidden on lg, shown on xl+ */}
              <motion.button
                className="hidden xl:flex lg:px-2 lg:py-1.5 xl:px-3 xl:py-2 lg:text-xs xl:text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 items-center lg:space-x-1 xl:space-x-2 lg:h-8 xl:h-9 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                aria-label="Try AeroGenix Studio for free"
              >
                <span>Try Studio</span>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaRocket className="lg:text-xs xl:text-xs" />
                </motion.div>
              </motion.button>
              
              {/* Compact secondary action for lg screens only */}
              <motion.button
                className="xl:hidden lg:flex lg:w-8 lg:h-8 items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                aria-label="Try AeroGenix Studio"
                title="Try Studio"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaRocket className="text-xs" />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile & Tablet Menu */}
          <div className="lg:hidden">
            <MobileMenu isSticky={isSticky} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
