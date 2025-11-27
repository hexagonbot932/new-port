import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Briefcase, Mail, ArrowDown, ExternalLink, Github, Linkedin, Send } from 'lucide-react';
import '@/App.css';
import profileImg from '@/assets/profile.jpg';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';

const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      data-testid="vertical-navbar"
    >
      <div className="bg-gradient-to-b from-emerald-400/20 via-teal-400/20 to-cyan-400/20 backdrop-blur-xl rounded-full px-4 py-6 border border-white/10 shadow-2xl">
        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group transition-all duration-300 ${
                  isActive ? 'scale-125' : 'scale-100 hover:scale-110'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`nav-${item.id}-btn`}
              >
                <div className={`p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/50' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    isActive ? 'text-white' : 'text-gray-300'
                  }`} />
                </div>
                
                <motion.div 
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ x: 10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-400/30 whitespace-nowrap">
                    <span className="text-sm text-emerald-300 font-medium">{item.label}</span>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }
            }
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 inline-block"
          data-testid="profile-image-container"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl relative z-10"
              data-testid="profile-image"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-7xl md:text-8xl font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }} data-testid="hero-name">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Jordan</span>
            <br />
            <span className="text-white">Mitchell</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl text-gray-300 font-light" style={{ fontFamily: 'Inter, sans-serif' }} data-testid="hero-subtitle">
            Creative Developer & UI/UX Designer
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
            Crafting beautiful digital experiences with modern technologies.
            Passionate about creating intuitive interfaces and seamless user journeys.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            data-testid="explore-work-btn"
          >
            <ExternalLink className="w-5 h-5" />
            Explore My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold flex items-center gap-2 border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300"
            data-testid="get-in-touch-btn"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-2"
          data-testid="scroll-indicator"
        >
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-emerald-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4" data-testid="about-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }} data-testid="about-title">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed" data-testid="about-text-1">
                I'm a passionate developer with 5+ years of experience building modern web applications.
                I specialize in creating beautiful, responsive interfaces that provide exceptional user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed" data-testid="about-text-2">
                My approach combines technical excellence with creative design thinking. I believe that great
                software should be both powerful and intuitive, solving real problems while delighting users.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed" data-testid="about-text-3">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/20"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-emerald-400 font-semibold mb-2 text-lg">Experience</h3>
                  <p className="text-white text-2xl font-bold">5+ Years</p>
                </div>
                <div>
                  <h3 className="text-emerald-400 font-semibold mb-2 text-lg">Projects Completed</h3>
                  <p className="text-white text-2xl font-bold">50+</p>
                </div>
                <div>
                  <h3 className="text-emerald-400 font-semibold mb-2 text-lg">Happy Clients</h3>
                  <p className="text-white text-2xl font-bold">30+</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'Figma', 'AWS', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4" data-testid="skills-section">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }} data-testid="skills-title">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}
                data-testid={`skill-category-${category.title.toLowerCase()}`}
              >
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + skillIdx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
      image: project1,
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Intelligent data visualization platform with predictive analytics and custom reporting.',
      image: project2,
      tags: ['Next.js', 'Python', 'TensorFlow'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Real-time social platform with live messaging, stories, and content discovery features.',
      image: project1,
      tags: ['React Native', 'Firebase', 'GraphQL'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4" data-testid="projects-section">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }} data-testid="projects-title">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}
                data-testid={`project-${idx}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4" data-testid="contact-section">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }} data-testid="contact-title">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
              data-testid="contact-form"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  required
                  data-testid="contact-name-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  required
                  data-testid="contact-email-input"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="6"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  required
                  data-testid="contact-message-input"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50"
                data-testid="contact-submit-btn"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:jordan@example.com" 
                    className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                    data-testid="contact-email-link"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span>jordan@example.com</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                    data-testid="contact-github-link"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <span>github.com/jordan</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                    data-testid="contact-linkedin-link"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span>linkedin.com/in/jordan</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionsRef = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        sectionsRef.current[section] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        if (sectionsRef.current[section]) {
          observer.unobserve(sectionsRef.current[section]);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;