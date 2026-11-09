import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header, Footer, RouteEffects } from "../components/Layout";
import { Button, PageIntro } from "../components/UI";
import { useTheme } from "../utils/useTheme";
import { Land } from "./Land";
import { About } from "./About";
import { Robots } from "./Robots";
import { Team } from "./Team";
import { Events } from "./Events";
import { Sponsors } from "./Sponsors";
import "./GlobalStyles.css";

export function AppShell() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content").focus();
        }}
      >
        Skip to content
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <RouteEffects />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/about" element={<About />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route
            path="*"
            element={
              <>
                <PageIntro
                  number="404"
                  eyebrow="Outside the arena"
                  title="This page took a hit."
                >
                  The page you’re looking for isn’t here. Get back to the team
                  or explore our robots.
                </PageIntro>
                <div className="container not-found-actions">
                  <Button to="/">Back to Home</Button>
                  <Button to="/robots" secondary>
                    Explore Our Robots
                  </Button>
                </div>
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default function Home() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
