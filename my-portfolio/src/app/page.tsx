"use client";
import React, { useState, useEffect } from 'react';

// --- SVG ICON COMPONENTS ---
// Using inline SVGs to avoid external dependencies for icons.

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 2.2-1.4 1.7-3.6 2.6-6.1 2.5-2.2.1-4.5-.5-6.6-1.6-2.5-1.3-4.5-3.3-5.9-5.6-1.4-2.3-2-5-1.7-7.6.3-2.6 1.5-5.1 3.5-7.1s4.5-3.2 7.1-3.5c.1 0 .2 0 .3 0 2.5 0 4.9.9 6.8 2.4.9-.1 1.7-.4 2.5-.8-.5 1.2-1.2 2.2-2.2 3 .9-.1 1.7-.3 2.5-.7Z" />
    </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);


// --- CONFIGURATION ---
// Personalize your portfolio here.
const portfolioConfig = {
    name: "Swarup",
    title: "Software Engineer",
    description: "I build elegant, responsive, and high-performance web applications from concept to completion.",
    email: "raj19092003@gmail.com",
    socials: {
        github: "https://github.com/GUNNERat19",
        linkedin: "https://www.linkedin.com/in/swarup-kumar-bhuyan-84758a225/",
        //twitter: "https://twitter.com/your-username",
    },
    projects: [
        {
            title: "Project Alpha",
            description: "An advanced e-commerce platform with real-time inventory management and a custom checkout experience.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
            imageUrl: "https://placehold.co/600x400/111827/ffffff?text=Project+Alpha",
            // liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Project Beta",
            description: "A collaborative project management tool designed to streamline team workflows and boost productivity.",
            tech: ["React", "Node.js", "GraphQL", "MongoDB", "Socket.io"],
            imageUrl: "https://placehold.co/600x400/111827/ffffff?text=Project+Beta",
            // liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Project Gamma",
            description: "A beautiful data visualization dashboard for analyzing complex datasets with interactive charts and graphs.",
            tech: ["Vue.js", "D3.js", "Python", "Flask", "PostgreSQL"],
            imageUrl: "https://placehold.co/600x400/111827/ffffff?text=Project+Gamma",
            // liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Project Delta",
            description: "A mobile-first social media application focused on content discovery and community engagement.",
            tech: ["React Native", "Firebase", "Redux", "Expo"],
            imageUrl: "https://placehold.co/600x400/111827/ffffff?text=Project+Delta",
            // liveUrl: "#",
            githubUrl: "#",
        },
    ],
    skills: [
        "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js",
        "Python", "GraphQL", "SQL & NoSQL", "Docker", "AWS", "CI/CD"
    ],
};


// --- SECTION COMPONENTS ---

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-wider hover:text-cyan-400 transition-colors">
                    {portfolioConfig.name}
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900/90 backdrop-blur-md`}>
                <div className="flex flex-col items-center py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                        Hi, I&apos;m <span className="text-cyan-400">{portfolioConfig.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                       {portfolioConfig.description}
                    </p>
                    <a href="#contact" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 text-lg">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-lg text-gray-300 space-y-4 leading-relaxed">
                        <p>
                            I am a passionate Full-Stack Developer with a knack for creating dynamic, user-friendly web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I enjoy turning complex problems into beautiful, intuitive solutions.
                        </p>
                        <p>
                            My experience spans across the entire development lifecycle, from conceptualization and design to deployment and maintenance. I thrive in collaborative environments and am always eager to learn new technologies and improve my craft.
                        </p>
                         <p>
                            Here are a few technologies I&apos;ve been working with recently:
                        </p>
                    </div>
                    <div className="md:w-1/2">
                       <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
                           {portfolioConfig.skills.map((skill) => (
                               <li key={skill} className="bg-gray-800 rounded-lg p-3 text-center transition-transform transform hover:scale-105 hover:bg-cyan-900/50">
                                   {skill}
                               </li>
                           ))}
                       </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {portfolioConfig.projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20 group">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-4 mt-6">
                                    {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        <ExternalLinkIcon className="w-5 h-5" />
                                        Live Demo
                                    </a> */}
                                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        <GithubIcon className="w-5 h-5" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    I&apos;m currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.
                </p>
                <a href={`mailto:${portfolioConfig.email}`} className="text-xl md:text-2xl font-semibold text-cyan-400 hover:text-cyan-500 transition-colors border-b-2 border-cyan-400/0 hover:border-cyan-500/100 pb-1">
                    {portfolioConfig.email}
                </a>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><GithubIcon className="w-6 h-6" /></a>
                    <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
                    {/* <a href={portfolioConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><TwitterIcon className="w-6 h-6" /></a> */}
                </div>
                <p>&copy; {new Date().getFullYear()} {portfolioConfig.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// --- MAIN APP COMPONENT ---

const PortfolioPage = () => {
  useEffect(() => {
    // This is for smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');
        if (href) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    anchors.forEach(anchor => {
        anchor.addEventListener('click', handleClick as EventListener);
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-tight">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;

