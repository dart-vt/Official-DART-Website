export const site = {
  name: "DART Robotics",
  url: "https://dart-vt.github.io/Official-DART-Website/",
  email: "wewriggers@vt.edu",
  sponsorEmail: "DARTvtech@gmail.com",
  cro: "https://www.vtcro.org/",
  croDart: "https://www.vtcro.org/teams/crodart",
  croMetadata: {
    code: "DRT",
    type: "Design Team",
    division: "Combat Robotics",
    parentOrg: "Virginia Tech Competitive Robotics Organization",
    classes: "1lb Antweight & 3lb Beetleweight",
  },
};

export const awards = [
  {
    place: "3rd Place",
    division: "College Antweight Division",
    event: "Mixxer Makerspace",
    year: "2026",
  },
  {
    place: "3rd & 4th Place",
    division: "Royal Rumble",
    event: "Charlotte Royal Rumble · Charlotte",
    year: "2025",
  },
];

export const navigation = [
  { to: "/about", label: "About" },
  { to: "/robots", label: "Robots" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/sponsors", label: "Sponsors" },
];

export const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/vtdart/" },
  { label: "Discord", url: "https://discord.gg/GY4mx3Eb" },
  {
    label: "GobblerConnect",
    url: "https://gobblerconnect.vt.edu/dart/",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/destructive-arena-robotics-team-dart/",
  },
  { label: "YouTube", url: "https://www.youtube.com/@DARTatVirginiaTech" },
];

export const sponsorMailto = `mailto:${site.sponsorEmail}?subject=${encodeURIComponent("Sponsorship Inquiry — DART (Virginia Tech)")}&body=${encodeURIComponent("Hello DART Team,\n\nI'm interested in supporting the Destructive Arena Robotics Team. Could you share how we can collaborate?\n\nThanks,")}`;

export const pageMetadata = {
  "/": {
    title: "DART Robotics — Virginia Tech Combat Robotics",
    description:
      "Design. Build. Battle. Meet DART, Virginia Tech’s combat robotics team, represented within VT CRO as CroDart. Explore our robots and join the team.",
  },
  "/about": {
    title: "About DART | DART Robotics",
    description:
      "Our story, our engineering, and our place within VT CRO. Meet Virginia Tech’s Destructive Arena Robotics Team.",
  },
  "/robots": {
    title: "Our Robots | DART Robotics",
    description:
      "Explore the combat robots built by DART at Virginia Tech, from Pinhead Larry to CyclicalSubversion.",
  },
  "/team": {
    title: "The Team | DART Robotics",
    description:
      "Meet DART’s leadership, engineering and operations teams, web contributors, and alumni.",
  },
  "/events": {
    title: "Events | DART Robotics",
    description:
      "Explore DART combat robotics events, including schedules, weight classes, and archived competition information.",
  },
  "/sponsors": {
    title: "Sponsors & Supporters | DART Robotics",
    description:
      "Meet the sponsors and campus partners supporting DART Robotics, and learn how to support hands-on student engineering.",
  },
};
