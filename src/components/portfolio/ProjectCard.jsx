import { ArrowUpRight } from "lucide-react";
import ProjectGallery from "./ProjectGallery";

const projectAccents = ["#62e6b5", "#9b8cff", "#ffb454", "#51c8ff", "#ff7894"];

const ProjectCard = ({ project, index }) => (
  <article
    className={project.featured ? "project-card featured" : "project-card"}
    style={{ "--project-accent": projectAccents[index % projectAccents.length] }}
  >
    <ProjectGallery images={project.images} title={project.title} />
    <div className="project-content">
      <div className="project-meta">
        <span>0{index + 1}</span>
        <small>{project.organization}</small>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="compact-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {/* {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="text-link">
          Visit project <ArrowUpRight size={14} />
        </a>
      )} */}
    </div>
  </article>
);

export default ProjectCard;
