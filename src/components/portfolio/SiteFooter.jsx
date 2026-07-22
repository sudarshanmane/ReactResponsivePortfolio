import { ArrowUp, Code2 } from "lucide-react";
import { personalInfo } from "./portfolioData";

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-shell footer-inner">
      <div>
        <span className="brand-mark">SM</span>
        <p><Code2 size={14} /> Designed and built with care by {personalInfo.name}.</p>
      </div>
      <a href="#top">Back to top <ArrowUp size={14} /></a>
    </div>
  </footer>
);

export default SiteFooter;
