import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-photo-view/dist/react-photo-view.css";
import "./App.css";
import AboutSection from "./components/portfolio/AboutSection";
import ContactSection from "./components/portfolio/ContactSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import HeroSection from "./components/portfolio/HeroSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import SiteFooter from "./components/portfolio/SiteFooter";
import SiteHeader from "./components/portfolio/SiteHeader";
import SkillsSection from "./components/portfolio/SkillsSection";

function App() {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="portfolio-app">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <SiteHeader
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
