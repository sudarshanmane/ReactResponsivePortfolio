import {
  Award,
  BrainCircuit,
  Gauge,
  GraduationCap,
  Layers3,
  UserRound,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const focusAreas = [
  {
    number: "01",
    icon: Layers3,
    title: "Full-stack ownership",
    copy: "I move comfortably from polished React interfaces to API design, data modeling, authentication, and production debugging.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI product workflows",
    copy: "I turn LLM capabilities into dependable product experiences through structured outputs, validation, matching, and automation.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Systems that scale",
    copy: "I focus on maintainable components, efficient queries, caching, asynchronous jobs, and clear engineering collaboration.",
  },
];

const AboutSection = () => (
  <section className="section" id="about">
    <div className="site-shell">
      <SectionHeading
        eyebrow="About"
        icon={UserRound}
        title="Building thoughtful software for real-world complexity."
        description="My work spans enterprise platforms, AI-assisted workflows, and high-traffic public systems—with an emphasis on clarity, reliability, and measurable outcomes."
      />

      <div className="about-grid">
        <div className="about-story surface-card">
          <p className="lead-copy">
            I’m a MERN Stack Developer who enjoys transforming complex
            operational problems into products people can use with confidence.
          </p>
          <p>
            Across recruitment technology, marketing platforms, and public
            event systems, I’ve worked with cross-functional teams to ship
            secure applications, optimize performance, and improve day-to-day
            workflows. I care about the details users feel and the architecture
            teams depend on.
          </p>
          <div className="education-row">
            <div>
              <span><GraduationCap size={14} /> Education</span>
              <strong>B.E. · Pune University</strong>
              <small>2017 — 2021 · CGPA 7.81</small>
            </div>
            <div>
              <span><Award size={14} /> Certification</span>
              <strong>Masai School</strong>
              <small>Full Stack Web Development</small>
            </div>
          </div>
        </div>

        <div className="focus-list">
          {focusAreas.map((area) => {
            const FocusIcon = area.icon;
            return (
            <article className="focus-card" key={area.number}>
              <span className="focus-icon"><FocusIcon size={20} /></span>
              <div>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
