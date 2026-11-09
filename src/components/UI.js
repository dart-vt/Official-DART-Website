import React from "react";
import { Link } from "react-router-dom";
import { asset } from "../utils/assets";
import images from "../data/images.json";
import { site } from "../data/site";

export function Arrow({ diagonal = false }) {
  return (
    <svg
      className="arrow"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function Button({
  to,
  href,
  children,
  secondary = false,
  className = "",
  ...props
}) {
  const classes = `button ${secondary ? "button-secondary" : "button-primary"} ${className}`;
  return to ? (
    <Link to={to} className={classes} {...props}>
      {children}
      <Arrow />
    </Link>
  ) : (
    <a href={href} className={classes} {...props}>
      {children}
      <Arrow />
    </a>
  );
}

export function Photo({
  name,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, 50vw",
  eager = false,
  ...props
}) {
  const photo = images[name];
  return (
    <img
      className={className}
      src={asset(photo.variants[photo.variants.length - 1].src)}
      srcSet={photo.variants
        .map((v) => `${asset(v.src)} ${v.width}w`)
        .join(", ")}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      {...props}
    />
  );
}

export function SectionHeading({ eyebrow, title, children, to, linkLabel }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children && <p className="section-description">{children}</p>}
      </div>
      {to && (
        <Link className="text-link" to={to}>
          {linkLabel}
          <Arrow />
        </Link>
      )}
    </div>
  );
}

export function PageIntro({ number, eyebrow, title, children }) {
  return (
    <header className="page-intro container">
      <p className="eyebrow">
        <span className="index-label">{number}</span>
        {eyebrow}
      </p>
      <h1>{title}</h1>
      <p className="page-lead">{children}</p>
    </header>
  );
}

export function Affiliation({ compact = false }) {
  return (
    <div className={`affiliation ${compact ? "affiliation-compact" : ""}`}>
      <span className="affiliation-mark" aria-hidden="true">
        ↗
      </span>
      <div>
        <div className="affiliation-badge-row">
          <p className="eyebrow">Part of something bigger</p>
          <span className="org-pill">VT CRO // DESIGN TEAM · DRT</span>
        </div>
        <p>
          DART is represented as <a href={site.croDart}>CroDart</a> within{" "}
          <a href={site.cro}>VT CRO</a> (Competitive Robotics Organization at Virginia Tech).
        </p>
      </div>
    </div>
  );
}

export function Recruitment() {
  return (
    <section className="recruitment">
      <div className="container recruitment-grid">
        <div>
          <p className="eyebrow">Your next build starts here</p>
          <h2>
            Bring your curiosity.
            <br />
            Build something fierce.
          </h2>
        </div>
        <div>
          <p>
            All majors. All experience levels. Learn alongside a team that
            designs, builds, and battles together.
          </p>
          <Button href={`mailto:${site.email}`}>Join the Team</Button>
          <a className="recruitment-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
