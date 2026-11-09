import React from "react";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Home, { AppShell } from "./pages/Home";
import { MediaGallery } from "./components/MediaGallery";
import { asset } from "./utils/assets";
import { site } from "./data/site";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  document.head.innerHTML =
    '<meta name="description" content=""><meta property="og:title" content=""><meta property="og:description" content="">';
});

function renderRoute(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppShell />
    </MemoryRouter>,
  );
}

test.each([
  ["/", /built to take a hit/i],
  ["/about", /engineering with a fighting spirit/i],
  ["/robots", /meet the heavy hitters/i],
  ["/team", /great robots. even better teammates/i],
  ["/events", /built to compete. ready to connect/i],
  ["/sponsors", /in our corner. behind every build/i],
  ["/missing", /this page took a hit/i],
])(
  "renders %s with exactly one page heading and unique metadata",
  (route, title) => {
    renderRoute(route);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(title);
    expect(document.title).toContain("DART");
    // Metadata has no accessible role; inspect the document head directly.
    // eslint-disable-next-line testing-library/no-node-access
    expect(
      document.querySelector('meta[name="description"]').content.length,
    ).toBeGreaterThan(30);
  },
);

test("menu supports Escape, closes on navigation, and moves focus to content", () => {
  renderRoute();
  const toggle = screen.getByRole("button", { name: "Open navigation" });
  userEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(toggle, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  userEvent.click(toggle);
  const robots = within(
    screen.getByRole("navigation", { name: "Main navigation" }),
  ).getByRole("link", { name: "Robots" });
  userEvent.click(robots);
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(robots).toHaveAttribute("aria-current", "page");
  expect(screen.getByRole("main")).toHaveFocus();
  expect(document.title).toBe("Our Robots | DART Robotics");
});

test("the skip link focuses content without changing hash routing", () => {
  renderRoute("/robots");
  userEvent.click(screen.getByText("Skip to content"));
  expect(screen.getByRole("main")).toHaveFocus();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Meet the heavy hitters.",
  );
});

test("theme preference persists across navigation and remounts", () => {
  const view = renderRoute();
  userEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  expect(localStorage.getItem("theme")).toBe("dark");
  userEvent.click(
    within(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).getByText("About"),
  );
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  view.unmount();
  renderRoute("/team");
  expect(
    screen.getByRole("button", { name: "Switch to light theme" }),
  ).toBeInTheDocument();
});

test("system theme changes apply until an explicit preference is chosen", () => {
  const listeners = new Set();
  const darkQuery = {
    matches: true,
    addEventListener: (_, cb) => listeners.add(cb),
    removeEventListener: (_, cb) => listeners.delete(cb),
  };
  const original = window.matchMedia;
  window.matchMedia = (query) =>
    query.includes("prefers-color-scheme") ? darkQuery : original(query);
  const view = renderRoute();
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  act(() => {
    darkQuery.matches = false;
    listeners.forEach((cb) => cb());
  });
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  userEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
  act(() => {
    listeners.forEach((cb) => cb());
  });
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  view.unmount();
  window.matchMedia = original;
});

test("gallery wraps in both directions and loads video only on demand", () => {
  render(<MediaGallery />);
  expect(screen.queryByLabelText("DART combat robotics footage")).toBeNull();
  userEvent.click(screen.getByRole("button", { name: "Previous media" }));
  const video = screen.queryByLabelText("DART combat robotics footage");
  expect(video).toHaveAttribute("controls");
  expect(video).toHaveAttribute("preload", "none");
  expect(video).not.toHaveAttribute("autoplay");
  userEvent.click(screen.getByRole("button", { name: "Next media" }));
  expect(
    screen.getByRole("img", { name: "At the workbench" }),
  ).toBeInTheDocument();
  expect(screen.queryByLabelText("DART combat robotics footage")).toBeNull();
});

test("event archive preserves rules and does not solicit expired registration", () => {
  jest
    .spyOn(Date, "now")
    .mockReturnValue(new Date("2026-11-08T12:00:00-05:00").getTime());
  renderRoute("/events");
  expect(screen.getByText("Past event / Archive")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "View event details" }),
  ).toHaveAttribute("href", "https://www.robotcombatevents.com/events/7253");
  expect(
    screen.queryByRole("link", { name: /register|registration/i }),
  ).not.toBeInTheDocument();
  expect(screen.getByText("Follows SPARC V1.6 rules.")).toBeInTheDocument();
  expect(
    screen.getByText("TPU and all flexible materials are prohibited."),
  ).toBeInTheDocument();
  expect(screen.getByRole("table")).toBeInTheDocument();
  Date.now.mockRestore();
});

test("six robots, retained member groups, and no placeholder profile links", () => {
  const view = renderRoute("/robots");
  expect(within(screen.getByRole("main")).getAllByRole("article")).toHaveLength(
    6,
  );
  expect(
    screen.queryByText(/Compact drum-style spinner/),
  ).not.toBeInTheDocument();
  view.unmount();
  renderRoute("/team");
  expect(screen.getByRole("heading", { name: "Alumni" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Special thanks" }),
  ).toBeInTheDocument();
  screen
    .getAllByRole("link")
    .forEach((link) => expect(link).not.toHaveAttribute("href", "#"));
});

test("affiliation and sponsorship contact destinations remain distinct", () => {
  renderRoute("/sponsors");
  expect(
    screen.getByRole("link", { name: "Become a Sponsor" }),
  ).toHaveAttribute(
    "href",
    expect.stringContaining(`mailto:${site.sponsorEmail}?subject=`),
  );
  expect(screen.getByRole("link", { name: "CroDart" })).toHaveAttribute(
    "href",
    site.croDart,
  );
  expect(screen.getByRole("link", { name: "VT CRO" })).toHaveAttribute(
    "href",
    site.cro,
  );
  expect(
    screen.getByRole("link", { name: /Calders Coffee Cafe logo/i }),
  ).toHaveAttribute("href", "https://calderscoffeecafe.com/");
});

test("GitHub Pages base path and existing hash URLs remain usable", () => {
  const before = process.env.PUBLIC_URL;
  process.env.PUBLIC_URL = "/Official-DART-Website";
  expect(asset("/images/DART.svg")).toBe(
    "/Official-DART-Website/images/DART.svg",
  );
  if (before === undefined) delete process.env.PUBLIC_URL;
  else process.env.PUBLIC_URL = before;
  window.history.replaceState(null, "", "/Official-DART-Website/#/robots");
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Meet the heavy hitters.",
  );
  window.history.replaceState(null, "", "/");
});
