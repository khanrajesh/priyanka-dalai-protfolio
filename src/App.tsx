/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink,
  ChevronRight,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  X,
  Copy,
  Sparkles,
  Coffee,
  Rocket
} from 'lucide-react';
// --- Data ---
const PERSONAL_INFO = {
  name: "Priyanka Dalai",
  role: "Test Engineer",
  email: "priyankadalai24798@gmail.com",
  phone: "8249295500",
  location: "Bhubaneswar, India",
  linkedin: "https://www.linkedin.com/in/priyanka-dalai-2376b81b8",
  github: "https://github.com/dalaipriyanka",
  resume: "https://docs.google.com/document/d/1BULMMWW-kCpvA3pqRjssRqboK4UMEkHyKiszaKXSenc/edit?usp=sharing",
  photo: "https://firebasestorage.googleapis.com/v0/b/jewel-vault.firebasestorage.app/o/test%2Fpriyanka.jpeg?alt=media&token=e5e16356-eca1-4add-83f0-d407d52d7f48",
  summary: "Software Test Engineer with 4.8+ years of experience specializing in Python-based automation and manual testing for FinTech, Banking, and Healthcare. Expert in building scalable PyTest/Selenium frameworks, managing QA teams as a Lead/POC, and delivering high-quality enterprise applications with a focus on API and UI excellence. Proficient in Python with foundational knowledge in Java."
};

const SKILLS = [
  { category: "Testing & QA", items: ["Manual Testing", "UI Testing", "Functional Testing", "Regression Testing", "Sanity Testing", "Smoke Testing", "System Testing", "Cross-Browser Testing", "Root Cause Analysis"] },
  { category: "Automation & Tools", items: ["Python (Primary)", "Selenium WebDriver", "PyTest", "Postman", "Rest Assured", "SOAP API Testing", "Extent Reports", "JIRA", "Jenkins", "Docker"] },
  { category: "Tech Stack", items: ["Python", "Java", "SQL", "RESTful APIs", "JSON Parsing", "Agile/Scrum", "SDLC/STLC"] }
];

const EXPERIENCES = [
  {
    company: "Tech Mahindra",
    period: "Jan 2025 – Present",
    projects: [
      {
        name: "Meta (WhatsApp) Platform Testing",
        role: "Test Engineer / POC",
        details: [
          "Primary Point of Contact (POC) for the Meta engagement, overseeing quality for WhatsApp across Web, Android, and iOS platforms.",
          "Spearheaded a high-performing QA team of 5 engineers, providing technical leadership, mentoring, and ensuring high-quality delivery.",
          "Architected and implemented a Python-based Selenium automation framework for critical regression flows, improving execution speed by 40%.",
          "Led the automation of complex user journeys including end-to-end messaging, media sharing, and real-time notifications.",
          "Managed stakeholder communication and reported quality metrics directly to client leadership."
        ]
      }
    ]
  },
  {
    company: "Accenture Private Limited",
    period: "July 2024 – Jan 2025",
    projects: [
      {
        name: "Keytruda Healthcare Web Application",
        role: "Test Engineer",
        details: [
          "Performed comprehensive quality audits for high-stakes pharmaceutical web applications, ensuring 100% compliance with layout standards.",
          "Validated complex UI components, responsive behavior, and cross-browser compatibility using automated Python scripts.",
          "Collaborated with cross-functional teams to identify and resolve critical UI/UX defects early in the development cycle.",
          "Developed reusable Python utility scripts for layout validation, reducing manual audit time by 30%."
        ]
      }
    ]
  },
  {
    company: "iServeu Pvt. Ltd.",
    period: "Sep 2021 – July 2024",
    projects: [
      {
        name: "FinTech & Digital Banking Ecosystem",
        role: "Software Test Engineer",
        details: [
          "Owned the end-to-end testing lifecycle for critical banking modules including Payment Gateways, Wallet Top-ups, and DMT flows.",
          "Developed a Python-based automation suite for API validation and functional testing of core banking services.",
          "Identified and tracked over 200+ high-priority defects using JIRA, ensuring zero-leakage of critical bugs to production.",
          "Actively participated in sprint planning and provided technical insights for testability of new banking features."
        ]
      }
    ]
  }
];

const PROJECTS = [
  {
    title: "Python PyTest Automation Framework",
    domain: "Web Application Test Automation",
    description: "Designed and implemented a scalable Python-based automation framework using PyTest and Selenium. Features include Page Object Model (POM), data-driven testing, and automated HTML reporting.",
    tech: ["Python", "PyTest", "Selenium", "Allure Reports", "Jenkins", "Docker"]
  }
];

// --- Components ---

const SkillCard: React.FC<{ category: string, items: string[] }> = ({ category, items }) => (
  <div className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
    <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-[0.2em] mb-4">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span key={item} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-[11px] text-zinc-400 font-medium">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0] }> = ({ exp }) => (
  <div className="relative pl-8 pb-12 border-l border-zinc-800 last:pb-0 group">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-zinc-800 rounded-full group-hover:bg-emerald-500 transition-colors duration-500" />
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
      <h3 className="text-2xl font-black text-zinc-100 tracking-tight uppercase">{exp.company}</h3>
      <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">{exp.period}</span>
    </div>
    
    <div className="space-y-10">
      {exp.projects.map((proj, idx) => (
        <div key={idx} className="relative">
          <div className="flex flex-col gap-1 mb-4">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider">
              <Zap className="w-4 h-4" /> {proj.name}
            </div>
            <div className="text-zinc-400 text-xs font-medium bg-zinc-900/50 w-fit px-2 py-0.5 rounded border border-zinc-800/50">
              Role: {proj.role}
            </div>
          </div>
          <ul className="space-y-3">
            {proj.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                <ChevronRight className="w-4 h-4 mt-1 text-emerald-500/50 shrink-0" />
                <span>
                  {detail.includes("team") || detail.includes("Lead") || detail.includes("POC") || detail.includes("Spearheaded") ? (
                    <span className="text-zinc-200 font-medium">{detail}</span>
                  ) : detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const JugglingBubbles: React.FC<{ mousePos: { x: number; y: number }, isEnabled: boolean }> = ({ mousePos, isEnabled }) => {
  const { scrollY } = useScroll();
  
  const bubbles = React.useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      // Random factors for unique movement
      stiffness: Math.random() * 50 + 20,
      damping: Math.random() * 20 + 10,
      mass: Math.random() * 0.5 + 0.5,
      scrollSpeed: Math.random() * 0.5 + 0.2, // Parallax factor
    })), 
  []);

  if (!isEnabled) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <Bubble key={b.id} b={b} mousePos={mousePos} scrollY={scrollY} />
      ))}
    </div>
  );
};

const Bubble: React.FC<{ b: any, mousePos: { x: number, y: number }, scrollY: any }> = ({ b, mousePos, scrollY }) => {
  // Combine scroll parallax and mouse-reactive offset into a single vertical movement
  const scrollYOffset = useTransform(scrollY, [0, 2000], [0, -500 * b.scrollSpeed]);
  
  // Calculate mouse offset
  const mouseXOffset = (mousePos.x - (window.innerWidth / 2)) * (b.id % 5 / 10);
  const mouseYOffset = (mousePos.y - (window.innerHeight / 2)) * (b.id % 3 / 10);

  return (
    <motion.div
      className="absolute rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-[1px]"
      style={{
        width: b.size,
        height: b.size,
        left: `${b.x}%`,
        top: `${b.y}%`,
        y: scrollYOffset, // Scroll-based parallax
      }}
      animate={{
        // Mouse-based movement
        x: mouseXOffset,
        translateY: mouseYOffset, // Using translateY to avoid conflict with y (scroll)
        scale: [1, 1.1, 1],
      }}
      transition={{
        x: { type: 'spring', stiffness: b.stiffness, damping: b.damping, mass: b.mass },
        translateY: { type: 'spring', stiffness: b.stiffness, damping: b.damping, mass: b.mass },
        scale: {
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    />
  );
};

const ReactiveBackground: React.FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 2000], [0, -100]);

  React.useEffect(() => {
    if (!isEnabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isEnabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Unified Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
          backgroundSize: '80px 80px',
          y: gridY,
        }}
      />

      {/* Juggling Bubbles */}
      <JugglingBubbles mousePos={mousePos} isEnabled={isEnabled} />
    </div>
  );
};

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-emerald-500/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
      />
    </>
  );
};

const ContactModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl md:rounded-[2.5rem] overflow-y-auto max-h-[90vh] shadow-2xl"
          >
            <div className="p-6 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 md:top-8 md:right-8 p-2 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10">
                <h2 className="text-3xl font-black text-zinc-100 tracking-tighter mb-2">GET IN TOUCH</h2>
                <p className="text-zinc-500 text-sm">Let's build something bulletproof together.</p>
              </div>

              <div className="space-y-4 mb-8 md:mb-12">
                <div className="group p-4 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Mail className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-medium text-zinc-200">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 text-zinc-600 hover:text-emerald-500 transition-colors"
                  >
                    {copied === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="group p-4 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Phone className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Mobile</p>
                      <p className="text-sm font-medium text-zinc-200">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 text-zinc-600 hover:text-emerald-500 transition-colors"
                  >
                    {copied === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em]">Exciting Highlights</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1"><Sparkles className="w-4 h-4 text-emerald-500" /></div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <span className="text-zinc-200 font-bold">Bug Hunter:</span> Identified 200+ high-priority defects in FinTech modules with zero leakage to production.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1"><Coffee className="w-4 h-4 text-emerald-500" /></div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <span className="text-zinc-200 font-bold">Automation First:</span> Reduced regression execution time by 40% using custom Python frameworks.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1"><Rocket className="w-4 h-4 text-emerald-500" /></div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <span className="text-zinc-200 font-bold">Lead Mindset:</span> POC for Meta engagement, leading a team of 5 engineers for WhatsApp platform testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry from Portfolio&body=Hi Prashant,%0D%0A%0D%0AI saw your portfolio and would like to connect.`}
                  className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-2xl text-center transition-all shadow-lg shadow-emerald-900/20"
                >
                  SEND EMAIL
                </a>
                <a 
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-2xl text-center transition-all"
                >
                  VIEW RESUME
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [isEffectEnabled, setIsEffectEnabled] = React.useState(true);

  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 cursor-none ${isEffectEnabled ? 'fx-enabled' : ''}`}>
      <ReactiveBackground isEnabled={isEffectEnabled} />
      <CustomCursor />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      {/* Decorative Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.03),transparent_50%)] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Navigation / Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter text-zinc-100">PD<span className="text-emerald-500">.</span></span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 mr-2">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden sm:block">FX</span>
              <button 
                onClick={() => setIsEffectEnabled(!isEffectEnabled)}
                className={`w-10 h-5 rounded-full p-1 transition-colors duration-300 flex items-center ${isEffectEnabled ? 'bg-emerald-600' : 'bg-zinc-800'}`}
              >
                <motion.div 
                  animate={{ x: isEffectEnabled ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-3 h-3 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>
            <button onClick={() => setIsContactOpen(true)} className="text-zinc-500 hover:text-emerald-500 transition-colors"><Mail className="w-5 h-5" /></button>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-zinc-500 hover:text-emerald-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href={PERSONAL_INFO.github} target="_blank" className="text-zinc-500 hover:text-emerald-500 transition-colors"><Github className="w-5 h-5" /></a>
            <a href={PERSONAL_INFO.resume} target="_blank" className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-emerald-900/20">RESUME</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3 h-3" /> Automation Test Engineer
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800/50 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                <MapPin className="w-3 h-3 text-emerald-500/50" /> {PERSONAL_INFO.location}
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-zinc-100 mb-6 tracking-tighter leading-[0.9]">
              PRIYANKA <br /> <span className="text-zinc-800 outline-text">DALAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              Crafting <span className="text-emerald-500 font-medium">bulletproof</span> software through precision testing and automation. 4.8+ years of engineering excellence.
            </p>
          </div>
          <div className="order-1 md:order-2 relative flex justify-center md:block mb-12 md:mb-0">
            <div className="w-64 h-80 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src={PERSONAL_INFO.photo} 
                alt="Priyanka Dalai" 
                className="w-full h-full object-cover transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-6 p-6 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-xl">
              <div className="text-3xl font-black text-emerald-500">4.8+</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        {/* Summary Grid */}
        <div className="grid md:grid-cols-1 gap-8 mb-32">
          <div className="p-8 bg-zinc-900/20 border border-zinc-800/50 rounded-3xl">
            <h2 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-6">Professional Summary</h2>
            <p className="text-lg text-zinc-400 leading-relaxed font-serif italic">
              "{PERSONAL_INFO.summary}"
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-zinc-100 tracking-tight">TECHNICAL ARSENAL</h2>
            <div className="h-px flex-1 bg-zinc-900" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </div>
        </section>

        {/* Experience & Projects Split */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-20">
          {/* Experience */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-black text-zinc-100 tracking-tight">EXPERIENCE</h2>
              <div className="h-px flex-1 bg-zinc-900" />
            </div>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <ExperienceItem key={i} exp={exp} />
              ))}
            </div>
          </section>

          {/* Sidebar: Projects & Education */}
          <aside className="space-y-20">
            {/* Projects */}
            <section>
              <h2 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8">Featured Project</h2>
              {PROJECTS.map((project, i) => (
                <div key={i} className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl">
                  <h3 className="text-lg font-bold text-zinc-100 mb-2">{project.title}</h3>
                  <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-4">{project.domain}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono text-zinc-600">#{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Education & Certs */}
            <section className="space-y-12">
              <div>
                <h2 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-6">Education</h2>
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 h-fit">
                    <GraduationCap className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200">Master of Computer Applications</h4>
                    <p className="text-xs text-zinc-500">IMIT, Cuttack · 2018</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-6">Certifications</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 h-fit shrink-0">
                      <Award className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-zinc-200 leading-none">Python Automation</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Advanced Testing Frameworks</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 h-fit shrink-0">
                      <Award className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-zinc-200 leading-none">Java Foundations</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Java Technocrat</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left flex flex-col gap-3">
            <h2 className="text-2xl font-black text-zinc-100 tracking-tighter leading-none">LET'S CONNECT</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Available for roles in Software Test Engineering.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button onClick={() => setIsContactOpen(true)} className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-500 transition-colors group">
              <Mail className="w-6 h-6 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
            </button>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-500 transition-colors group">
              <Linkedin className="w-6 h-6 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-500 transition-colors group">
              <Github className="w-6 h-6 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-zinc-900/50 flex justify-between items-center text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
          <span>&copy; 2026 Priyanka Dalai</span>
          <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {PERSONAL_INFO.location}</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 1px #27272a;
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 2px #27272a;
          }
        }
        
        /* Interactive Text Jump Effect */
        .fx-enabled h1, 
        .fx-enabled h2, 
        .fx-enabled h3, 
        .fx-enabled h4, 
        .fx-enabled p, 
        .fx-enabled li,
        .fx-enabled nav a,
        .fx-enabled nav button:not(.w-10) {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
          width: fit-content;
        }
        
        /* Ensure transform works on these elements without breaking layout */
        .fx-enabled h1, .fx-enabled h2, .fx-enabled h3, .fx-enabled h4, .fx-enabled p {
          display: block;
        }
        
        .fx-enabled nav a, .fx-enabled nav button:not(.w-10) {
          display: inline-block;
        }
        
        .fx-enabled h1:hover, 
        .fx-enabled h2:hover, 
        .fx-enabled h3:hover, 
        .fx-enabled h4:hover, 
        .fx-enabled p:hover, 
        .fx-enabled li:hover,
        .fx-enabled nav a:hover,
        .fx-enabled nav button:not(.w-10):hover {
          transform: translateY(-4px) scale(1.01);
          color: #10b981; /* Emerald-500 */
        }
      `}} />
    </div>
  );
}
