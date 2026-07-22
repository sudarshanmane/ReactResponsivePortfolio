import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigationItems, personalInfo } from "./portfolioData";

const SiteHeader = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">SM</span>
          <span className="brand-copy">
            <strong>{personalInfo.name}</strong>
            <small>Full-stack engineer</small>
          </span>
        </a>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"}>
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
