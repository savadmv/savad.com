import React from 'react';
import { Menu, X, Linkedin, Mail, Github, ExternalLink, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import yourImage from './assets/pro_pic.jpeg'; // Add this line
import hrvstImage from './assets/hrvst_thumb.png'; // Add this line
import bbImage from './assets/bb_thumb.png'; // Add this line
import jerin from './assets/jerin.jpeg'; // Add this line
import manoj from './assets/manoj.jpeg'; // Add this line
import peculiar from './assets/peculiar.jpeg';
import medium_post from './assets/medium_post.webp' // Add this line
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'endorsements', label: 'Endorsements' },
    { id: 'articles', label: 'Articles' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Savad M V</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`${
                    activeSection === link.id
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-primary-700'
                  } px-1 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-primary-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`${
                    activeSection === link.id
                      ? 'text-primary-600 bg-gray-50'
                      : 'text-gray-500 hover:text-primary-700 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Crafting Exceptional Mobile Experiences
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Freelance Mobile Application Developer specializing in Flutter, 
                  turning innovative ideas into high-performance, user-friendly applications.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Get in Touch
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    View Projects
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gray-200 flex items-center justify-center">
                  <img src={yourImage} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hrvst App */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <img src={hrvstImage} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hrvst - E-commerce App</h3>
                  <p className="text-gray-600 mb-4">
                    Developed a comprehensive e-commerce solution for a US-based client, featuring seamless product browsing,
                    cart management, and secure checkout integration.
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://www.hrvst.market/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700"
                    >
                      Visit Website <ExternalLink size={16} className="ml-1" />
                    </a>
                    <span className="text-sm text-gray-500">Status: Under Development</span>
                  </div>
                </div>
              </div>

              {/* Beast Burst App */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <img src={bbImage} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Beast Burst App</h3>
                  <p className="text-gray-600 mb-4">
                    Rebuilt and optimized a Flutter application, resulting in improved performance
                    and user experience. Now boasting over 10,000 global downloads.
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.beastburst.mobileapp"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    View on Play Store <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endorsements Section */}
        <section id="endorsements" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Endorsements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <img src={manoj} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Manoj Harisankar</h3>
                    <p className="text-sm text-gray-500">Senior Software Engineer, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "An exceptional mobile developer who consistently delivers clean, maintainable code. Their expertise in Flutter has been invaluable to our team's success."
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <img src={jerin} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jerin K</h3>
                    <p className="text-sm text-gray-500">Lead Developer, InnovateTech</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Their deep understanding of mobile architecture and state management patterns has elevated our entire development team's capabilities."
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <img src={peculiar} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Peculiar Ediomo</h3>
                    <p className="text-sm text-gray-500">Technical Lead, MobileFirst</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "A collaborative team player with excellent problem-solving skills. Their contributions to our Flutter projects have consistently exceeded expectations."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles & Posts Section */}
        <section id="articles" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Articles & Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Medium Article */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest on Medium</h3>
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg">
                  <img src={medium_post} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <p className="text-gray-600 mb-4">Resolving Image Loading Issues in...</p>
                <a href="https://medium.com/p/4158391bcb7c" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
                  Read on Medium <ExternalLink size={16} className="ml-1" />
                </a>
              </div>

              {/* LinkedIn Posts */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trending on LinkedIn</h3>
                <div 
                  className="bg-gray-50 rounded-xl p-6 cursor-pointer"
                  onClick={() => window.open('https://www.linkedin.com/feed/update/urn:li:activity:6770272898402934784/', '_blank')}
                >
                  <p className="text-gray-600 mb-4">Onboarding Screen ...</p>
                  <div className="flex items-center text-sm text-gray-500">
                  <span>933 Reactions</span>
                  <span className="mx-2">•</span>
                  <span>79 Comments</span>
                  </div>
                </div>
                <div
                  className="bg-gray-50 rounded-xl p-6 cursor-pointer"
                  onClick={() => window.open('https://www.linkedin.com/feed/update/urn:li:activity:6691707057978052608/', '_blank')}
                >
                  <p className="text-gray-600 mb-4">Satisfaction is ...</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>27 Reactions</span>
                    <span className="mx-2">•</span>
                    <span>7 Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Azure AI Engineer Associate</h3>
                <p className="text-gray-600">
                  Microsoft Certified professional with expertise in Azure AI solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fabric Analytics Engineer Associate
                </h3>
                <p className="text-gray-600">
                  Certified in implementing and managing analytics solutions using Microsoft Fabric.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Let's Connect</h3>
                <p className="text-gray-600 mb-6">
                  Looking for a mobile app developer? I'd love to hear about your project and discuss
                  how we can work together.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/savadmv333/"
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                  <a
                    href="mailto:savadmv333@gmail.com"
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    your.email@example.com
                  </a>
                  <a
                    href="https://github.com/savadmv"
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub Profile
                  </a>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </button>
    </div>
  );
}

export default App;