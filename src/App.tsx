import React from 'react';
import { Linkedin, Mail, Github, ExternalLink, ChevronDown, Menu, X, Briefcase, Zap, Layers, Database, Cloud, Cpu, BarChart2, AlertTriangle, GitBranch, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';
import yourImage from './assets/pro_pic.jpeg';
import hrvstImage from './assets/hrvst_thumb.png';
import bbImage from './assets/bb_thumb.png';
import jerin from './assets/jerin.jpeg';
import manoj from './assets/manoj.jpeg';
import peculiar from './assets/peculiar.jpeg';
import medium_post from './assets/medium_post.webp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + (window.innerHeight * 0.4);

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
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
    { id: 'notable-products', label: 'Products' },
    { id: 'articles', label: 'Articles' },
    { id: 'endorsements', label: 'Endorsements' }, // Contact form replaced by Endorsements
  ];

  const hrvstTechStack = [
    { name: 'Dart', icon: <Cpu className="tech-icon-minimal" /> },
    { name: 'Firebase', icon: <Database className="tech-icon-minimal" /> },
    { name: 'GraphQL', icon: <GitBranch className="tech-icon-minimal" /> },
    { name: 'AWS Amplify', icon: <Cloud className="tech-icon-minimal" /> },
    { name: 'BLoC', icon: <Layers className="tech-icon-minimal" /> },
    { name: 'Clean Arch.', icon: <Zap className="tech-icon-minimal" /> }
  ];

  const beastBurtTechStack = [
    { name: 'FB Analytics', icon: <BarChart2 className="tech-icon-minimal" /> },
    { name: 'Crashlytics', icon: <AlertTriangle className="tech-icon-minimal" /> },
    { name: 'RestAPI', icon: <Zap className="tech-icon-minimal" /> },
    { name: 'Clean Arch.', icon: <Layers className="tech-icon-minimal" /> },
    { name: 'BLoC', icon: <Brain className="tech-icon-minimal" /> }
  ];

  const endorsementsData = [
    { name: "Manoj Harisankar", title: "CEO, Fegno", quote: "An exceptional mobile developer who consistently delivers clean, maintainable code. Their expertise in Flutter has been invaluable to our team's success.", image: manoj },
    { name: "Jerin K", title: "Senior Software Engineer, IBM", quote: "Their deep understanding of mobile architecture and state management patterns has elevated our entire development team's capabilities.", image: jerin },
    { name: "Peculiar Ediomo", title: "Product Manager, The Zig", quote: "A collaborative team player with excellent problem-solving skills. Their contributions to our Flutter projects have consistently exceeded expectations.", image: peculiar }
  ];

  const certificationsData = [
    { title: "Azure AI Engineer Associate", description: "Microsoft Certified professional with expertise in Azure AI solutions." },
    { title: "Fabric Analytics Engineer Associate", description: "Certified in implementing and managing analytics solutions using Microsoft Fabric." }
  ];


  return (
    <div className="bg-background text-text selection:bg-accent selection:text-background">
      <nav className="fixed w-full bg-background/80 backdrop-blur-md z-40 border-b border-border-color/50">
        <div className="container-max">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <button onClick={() => scrollToSection('home')} className="text-lg font-semibold tracking-tight text-accent hover:opacity-75 transition-opacity">
              Savad M V
            </button>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm lg:text-base ${activeSection === link.id ? 'nav-link-active' : 'nav-link-inactive'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-text hover:text-accent p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border-color">
            <div className="container-max py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base ${activeSection === link.id ? 'bg-subtle-bg text-accent font-medium' : 'text-muted-text hover:text-accent hover:bg-subtle-bg'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16 md:pt-20">
        <section id="home" className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center section-padding bg-gradient-to-br from-background to-subtle-bg/30 relative">
          <div className="container-max text-center md:text-left">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6 !leading-tight tracking-tighter">
                  Crafting Mobile Experiences.
                </h1>
                <p className="text-lg lg:text-xl text-muted-text mb-10 max-w-xl mx-auto md:mx-0">
                  I'm Savad, a Mobile Developer specializing in Flutter, available for full-time and freelance opportunities. I turn ideas into performant, user-friendly applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button onClick={() => scrollToSection('endorsements')} className="btn-minimal"> {/* Updated to scroll to endorsements as it has contact info */}
                    Get in Touch
                  </button>
                  <button onClick={() => scrollToSection('notable-products')} className="btn-minimal-outline">
                    View Products
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-center md:justify-end order-first md:order-last">
                <img
                  src={yourImage}
                  alt="Savad M V"
                  className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover rounded-full shadow-2xl border-4 border-background"
                />
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-16">
              <button onClick={() => scrollToSection('notable-products')} aria-label="Scroll to products">
                <ChevronDown size={30} className="text-muted-text hover:text-accent animate-bounce transition-colors" />
              </button>
            </div>
          </div>
        </section>

        <section id="notable-products" className="section-padding bg-background">
          <div className="container-max">
            <header className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3 tracking-tight">Notable Products</h2>
              <p className="text-lg text-muted-text max-w-2xl mx-auto">A selection of products I've developed and contributed to.</p>
            </header>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: "Hrvst - E-commerce App", image: hrvstImage, description: "A comprehensive e-commerce solution for a US-based client, featuring seamless product Browse, cart management, and secure checkout.", tech: hrvstTechStack, liveLink: "https://www.hrvst.market/", status: "Under Development" },
                { title: "Beast Burst App", image: bbImage, description: "Rebuilt and optimized a Flutter application, improving performance and user experience. Over 10,000 global downloads.", tech: beastBurtTechStack, storeLink: "https://play.google.com/store/apps/details?id=com.beastburst.mobileapp" }
              ].map((product) => (
                <div key={product.title} className="bg-subtle-bg/50 rounded-lg overflow-hidden border border-border-color group hover:shadow-xl transition-shadow duration-300">
                  <a href={product.liveLink || product.storeLink} target="_blank" rel="noopener noreferrer" className="block overflow-hidden aspect-[16/10]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </a>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-text mb-2 tracking-tight group-hover:text-accent transition-colors">{product.title}</h3>
                    <p className="text-muted-text mb-5 text-sm leading-relaxed">{product.description}</p>
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-2.5">Technologies</h4>
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {product.tech.map(t => (
                          <span key={t.name} className="flex items-center text-xs text-muted-text group-hover:text-text transition-colors">
                            {t.icon} {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border-color/50">
                      {product.liveLink && (
                        <a href={product.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-accent hover:underline">
                          Visit Website <ExternalLink size={14} className="ml-1.5" />
                        </a>
                      )}
                      {product.storeLink && (
                        <a href={product.storeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-accent hover:underline">
                          View on Play Store <ExternalLink size={14} className="ml-1.5" />
                        </a>
                      )}
                      {product.status && <span className="text-xs text-muted-text opacity-80">{product.status}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="section-padding bg-subtle-bg/50">
          <div className="container-max">
            <header className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3 tracking-tight">Insights & Articles</h2>
              <p className="text-lg text-muted-text max-w-2xl mx-auto">Exploring ideas and sharing knowledge on mobile development and tech.</p>
            </header>
            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <a href="https://medium.com/p/4158391bcb7c" target="_blank" rel="noopener noreferrer" className="block bg-background p-6 md:p-8 rounded-lg border border-border-color hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img src={medium_post} alt="Medium Article Thumbnail" className="w-full sm:w-40 h-auto sm:h-28 object-cover rounded-md shadow-sm flex-shrink-0" />
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                      Resolving Image Loading Issues in Flutter Web Canvaskit Renderer...
                    </h3>
                    <p className="text-sm text-muted-text mb-3 leading-relaxed line-clamp-2">
                      A deep dive into troubleshooting and fixing common image loading problems when using Flutter's Canvaskit renderer for web applications.
                    </p>
                    <span className="text-xs text-accent font-medium inline-flex items-center">
                      Read on Medium <ExternalLink size={12} className="ml-1" />
                    </span>
                  </div>
                </div>
              </a>
              <div className="mt-8 pt-8 border-t border-border-color">
                <h4 className="text-center text-sm uppercase tracking-wider text-muted-text mb-6">From LinkedIn</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { text: "Onboarding Screen using ViewPager and Dots Indicator in Flutter...", link: 'https://www.linkedin.com/feed/update/urn:li:activity:6770272898402934784/' },
                    { text: "Satisfaction when your client’s app goes live on the Play Store...", link: 'https://www.linkedin.com/feed/update/urn:li:activity:6691707057978052608/' }
                  ].map(post => (
                    <a
                      key={post.link}
                      href={post.link} target="_blank" rel="noopener noreferrer"
                      className="block bg-background p-4 rounded-md border border-border-color hover:shadow-lg hover:border-accent/20 transition-all duration-200 group"
                    >
                      <p className="text-sm text-muted-text mb-2 group-hover:text-text transition-colors line-clamp-3">{post.text}</p>
                      <span className="text-xs text-accent font-medium inline-flex items-center">
                        View Post <ExternalLink size={12} className="ml-1" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="endorsements" className="section-padding bg-background"> {/* Formerly contact section */}
          <div className="container-max">
            <header className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3 tracking-tight">What Others Say</h2>
              <p className="text-lg text-muted-text max-w-xl mx-auto">Professional endorsements from colleagues and clients.</p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {endorsementsData.map(endorsement => (
                <div key={endorsement.name} className="bg-subtle-bg/50 p-6 md:p-8 rounded-lg border border-border-color text-center md:text-left hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row items-center mb-4">
                    <img
                      src={endorsement.image}
                      alt={endorsement.name}
                      className="w-16 h-16 object-cover rounded-full mr-0 md:mr-4 mb-3 md:mb-0 border-2 border-background shadow-sm"
                    />
                    <div>
                      <h3 className="font-semibold text-text text-md">{endorsement.name}</h3>
                      <p className="text-xs text-muted-text">{endorsement.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-text italic leading-relaxed">"{endorsement.quote}"</p>
                </div>
              ))}
            </div>

            {/* Certifications (Optional integration) */}
            {certificationsData.length > 0 && (
              <div className="mt-16 pt-12 border-t border-border-color">
                <h3 className="text-2xl font-semibold text-text mb-8 text-center tracking-tight">Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl mx-auto">
                  {certificationsData.map(cert => (
                    <div key={cert.title} className="bg-subtle-bg/50 p-5 rounded-lg border border-border-color">
                      <h4 className="font-semibold text-text mb-1">{cert.title}</h4>
                      <p className="text-xs text-muted-text">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Links */}
            <div className="mt-20 pt-12 border-t border-border-color text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-text mb-4 tracking-tight">Ready to collaborate?</h3>
              <p className="text-muted-text mb-8 max-w-md mx-auto">
                Let's discuss your project or idea. You can reach me via email or connect on my professional profiles.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
                <a href="mailto:savadmv333@gmail.com" className="btn-minimal-outline inline-flex items-center">
                  <Mail size={16} className="mr-2" /> Email Me
                </a>
                <a href="https://www.linkedin.com/in/savadmv333/" target="_blank" rel="noopener noreferrer" className="btn-minimal-outline inline-flex items-center">
                  <Linkedin size={16} className="mr-2" /> LinkedIn
                </a>
                <a href="https://github.com/savadmv" target="_blank" rel="noopener noreferrer" className="btn-minimal-outline inline-flex items-center">
                  <Github size={16} className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-border-color bg-subtle-bg/30">
        <div className="container-max text-center">
          <p className="text-xs text-muted-text">&copy; {new Date().getFullYear()} Savad M V. Freelance Mobile Developer.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;