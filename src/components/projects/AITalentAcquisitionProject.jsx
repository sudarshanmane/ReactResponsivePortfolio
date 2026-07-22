import ProjectImageCarousel from "./ProjectImageCarousel";

const projectImages = [
  {
    src: require("../../successiveImages/dashboard.png"),
    alt: "AI Talent Acquisition analytics dashboard",
  },
  {
    src: require("../../successiveImages/job.png"),
    alt: "AI-assisted job creation workflow",
  },
  {
    src: require("../../successiveImages/addCandidate.png"),
    alt: "Resume-based candidate onboarding workflow",
  },
  {
    src: require("../../successiveImages/jdMatch.png"),
    alt: "AI-powered candidate and job matching dashboard",
  },
  {
    src: require("../../successiveImages/interviews.png"),
    alt: "Interview scheduling calendar",
  },
];

const responsibilities = [
  "Integrated LLM and OpenAI APIs for resume parsing, job description parsing, candidate profile extraction, and structured data generation.",
  "Built candidate-to-job matching and AI-based ranking workflows using skills, experience, education, and hiring criteria.",
  "Designed reusable frontend components and custom hooks to improve maintainability and scalability.",
  "Used RabbitMQ and Redis for background processing, upload and parsing tasks, caching, and faster recruitment workflows.",
];

const AITalentAcquisitionProject = () => (
  <div data-aos="fade-right">
    <ProjectImageCarousel images={projectImages} />
    <div id="prdetails">
      <h1>AI Talent Acquisition Platform</h1>
      <div
        className="project-organization"
        style={{
          fontSize: "17px",
          textAlign: "end",
          width: "100%",
          color: "violet",
        }}
      >
        Organization: Successive Technologies
      </div>
      <p>
        Built a full-stack AI-powered recruitment platform for job management,
        candidate tracking, intelligent matching, automated screening,
        interview scheduling, and recruitment analytics.
      </p>
      <h3 className="pixel16" style={{ marginTop: 7 }}>
        Responsibilities:
      </h3>
      <ul type="circle" style={{ fontWeight: "lighter", marginLeft: 17 }}>
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
      <h4 className="pixel16" style={{ marginTop: 7 }}>
        React.js | Tailwind CSS | ShadCN | TanStack Query | Node.js | Express.js
        | MongoDB | Redis | RabbitMQ | OpenAI API
      </h4>
    </div>
  </div>
);

export default AITalentAcquisitionProject;
