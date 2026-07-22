import {
  ArrowUpRight,
  Mail,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "./portfolioData";

const ContactSection = () => (
  <section className="section contact-section" id="contact">
    <div className="site-shell contact-grid">
      <div>
        <SectionHeading
          eyebrow="Contact"
          icon={MessageCircleMore}
          title="Have a product challenge worth solving?"
          description="I’m open to full-stack opportunities, ambitious product teams, and conversations about building reliable software with measurable impact."
        />
        <a className="contact-email" href={`mailto:${personalInfo.email}`}>
          <Mail size={22} /> {personalInfo.email} <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="contact-card surface-card">
        <span className="contact-status"><i /> Available to connect</span>
        <h3>Let’s build something useful.</h3>
        <p>
          Based in {personalInfo.location}. The fastest way to reach me is by
          email or LinkedIn.
        </p>
        <div className="contact-links">
          <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer">
            <span><FaLinkedinIn size={16} /> LinkedIn</span> <ArrowUpRight size={15} />
          </a>
          <a href={personalInfo.links.github} target="_blank" rel="noreferrer">
            <span><FaGithub size={16} /> GitHub</span> <ArrowUpRight size={15} />
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}>
            <span><Phone size={16} /> {personalInfo.phone}</span> <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
