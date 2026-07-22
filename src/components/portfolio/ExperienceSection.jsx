import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "./portfolioData";

const ExperienceSection = () => (
  <section className="section" id="experience">
    <div className="site-shell">
      <SectionHeading
        eyebrow="Experience"
        icon={BriefcaseBusiness}
        title="Nearly four years of building, learning, and shipping."
        description="A progression from workflow platforms to real-time public systems and AI-powered enterprise products."
      />
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-meta">
              <span><CalendarDays size={13} /> {experience.period}</span>
              <small><MapPin size={13} /> {experience.location}</small>
            </div>
            <div className="experience-content">
              <p className="experience-company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p className="experience-summary">{experience.summary}</p>
              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="compact-tags">
                {experience.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
