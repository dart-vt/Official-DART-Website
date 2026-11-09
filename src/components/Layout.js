import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigation, pageMetadata, site, socialLinks } from "../data/site";
import { asset } from "../utils/assets";
import { Arrow } from "./UI";

export function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1100px)");
    const closeOnDesktop = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);
  const escape = (event) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButton.current.focus();
    }
  };
  return (
    <header
      className="site-header"
      onKeyDown={escape}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="header-inner container">
        <Link
          to="/"
          className="brand"
          aria-label="DART Robotics home"
          onClick={() => setOpen(false)}
        >
          <img
            src={asset("images/DART-white.svg")}
            width="50"
            height="50"
            alt=""
          />
          <span>
            DART<span className="brand-caption">VIRGINIA TECH</span>
          </span>
        </Link>
        <nav
          id="primary-navigation"
          className={`primary-navigation ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="nav-join" href={`mailto:${site.email}`}>
            Join the Team <Arrow diagonal />
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {theme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
                </>
              ) : (
                <path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z" />
              )}
            </svg>
          </button>
          <button
            ref={menuButton}
            className="menu-toggle icon-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="footer-wordmark" to="/">
              DART<span className="orange-dot">.</span>
            </Link>
            <p>
              Destructive Arena Robotics Team
              <br />
              Virginia Tech · Blacksburg, VA
            </p>
            <p className="footer-affiliation">
              Represented as <a href={site.croDart}>CroDart</a> within{" "}
              <a href={site.cro}>
                VT CRO <Arrow diagonal />
              </a>
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              <ul>
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h2>Connect</h2>
            <ul>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.url}>
                    {item.label}
                    <Arrow diagonal />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Let’s build something.</h2>
            <a href={`mailto:${site.email}`}>
              {site.email}
              <Arrow diagonal />
            </a>
            <p>Interested in supporting the team?</p>
            <Link to="/sponsors">
              Become a sponsor
              <Arrow />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DART Robotics</span>
          <span className="eyebrow">Design. Build. Battle. Repeat.</span>
          <a href={site.cro}>Competitive Robotics Organization ↗</a>
        </div>
      </div>
    </footer>
  );
}

export function RouteEffects() {
  const { pathname } = useLocation();
  const previous = useRef(pathname);
  useEffect(() => {
    const meta = pageMetadata[pathname] || {
      title: "Page not found | DART Robotics",
      description: "Find your way back to DART Robotics at Virginia Tech.",
    };
    document.title = meta.title;
    [
      ["name", "description", meta.description],
      ["property", "og:title", meta.title],
      ["property", "og:description", meta.description],
    ].forEach(([attribute, key, value]) => {
      const element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (element) element.setAttribute("content", value);
    });
    if (previous.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
      previous.current = pathname;
    }
  }, [pathname]);
  return null;
}
