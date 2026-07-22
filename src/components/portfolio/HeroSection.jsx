import {
  ArrowUpRight,
  Boxes,
  FileText,
  Gauge,
  Mail,
  Sparkles,
  Timer,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { highlights, personalInfo } from "./portfolioData";

const highlightIcons = [Timer, Boxes, Gauge];

const HeroSection = () => (
  <section className="hero-section" id="top">
    <div className="hero-orb hero-orb-one" />
    <div className="hero-orb hero-orb-two" />
    <div className="site-shell hero-grid">
      <div className="hero-copy">
        <div className="availability-pill">
          <span /> Available for impactful full-stack opportunities
        </div>
        <p className="hero-kicker">
          <Sparkles size={15} /> Hello, I’m {personalInfo.name}.
        </p>
        <h1>
          I build scalable products where <em>engineering meets intelligence.</em>
        </h1>
        <p className="hero-summary">{personalInfo.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a
            className="button button-secondary"
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={16} /> View résumé
          </a>
        </div>
        <div className="hero-socials">
          <a href={`mailto:${personalInfo.email}`}>
            <Mail size={14} /> Email
          </a>
          <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={14} /> LinkedIn
          </a>
          <a href={personalInfo.links.github} target="_blank" rel="noreferrer">
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label={`${personalInfo.name}, ${personalInfo.role}`}>
        <div className="portrait-frame">
          <div className="portrait-grid" />
          <img src={personalInfo.profileImage} alt={personalInfo.name} />
          <div className="portrait-role">
            <span>Current focus</span>
            <strong>AI-powered product engineering</strong>
          </div>
        </div>
      </div>
    </div>

    <div className="site-shell hero-highlights">
      {highlights.map((item, index) => {
        const HighlightIcon = highlightIcons[index];
        return (
        <div className="highlight-item" key={item.label}>
          <div className="highlight-icon"><HighlightIcon size={18} /></div>
          <div>
            <strong>
              {item.value}<span>{item.suffix}</span>
            </strong>
            <p>{item.label}</p>
          </div>
        </div>
        );
      })}
      <div className="highlight-item highlight-wide">
        <div className="highlight-icon highlight-icon-secondary"><Sparkles size={18} /></div>
        <div>
          <strong>React · Node · AI</strong>
          <p>Product thinking from interface to infrastructure</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
