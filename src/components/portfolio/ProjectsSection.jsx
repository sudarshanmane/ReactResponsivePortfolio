import { PanelsTopLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "./portfolioData";

const ProjectsSection = () => (
  <section className="section section-tinted" id="projects">
    <div className="site-shell">
      <SectionHeading
        eyebrow="Selected work"
        icon={PanelsTopLeft}
        title="Products built around meaningful outcomes."
        description="A selection of AI, enterprise, and public-sector platforms. Click any project image to explore it full screen."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
