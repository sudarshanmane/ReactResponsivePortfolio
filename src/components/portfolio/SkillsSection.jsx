import { Bot, BrainCircuit, Code2, Shapes } from "lucide-react";
import {
  SiAntdesign,
  SiExpress,
  SiGithubactions,
  SiGithubcopilot,
  SiGraphql,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "./portfolioData";

const skillIcons = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Redux: SiRedux,
  "TanStack Query": SiReactquery,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  "Ant Design": SiAntdesign,
  ShadCN: SiShadcnui,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  NestJS: SiNestjs,
  GraphQL: SiGraphql,
  JWT: SiJsonwebtokens,
  RabbitMQ: SiRabbitmq,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  "Prisma ORM": SiPrisma,
  "CI/CD": SiGithubactions,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  "OpenAI API": Bot,
  "LLM Integration": BrainCircuit,
  Jest: SiJest,
  "GitHub Copilot": SiGithubcopilot,
  Postman: SiPostman,
};

const skillAccents = ["#51d6ff", "#a78bfa", "#f6b84a", "#fb7185"];

const SkillsSection = () => (
  <section className="section section-tinted" id="skills">
    <div className="site-shell">
      <SectionHeading
        eyebrow="Capabilities"
        icon={Shapes}
        title="A practical stack for modern product teams."
        description="Tools are only useful when they help ship better software. These are the technologies I use to design, build, test, and operate production applications."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article
            className="skill-card"
            key={group.title}
            style={{ "--skill-accent": skillAccents[index] }}
          >
            <div className="skill-card-top">
              <span>0{index + 1}</span>
              <small>{group.eyebrow}</small>
            </div>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {(() => {
                    const SkillIcon = skillIcons[skill] || Code2;
                    return <SkillIcon size={14} />;
                  })()}
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
