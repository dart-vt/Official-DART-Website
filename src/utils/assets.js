// PUBLIC_URL includes the GitHub Pages project path in production.
export const asset = (path) =>
  `${(process.env.PUBLIC_URL || "").replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
