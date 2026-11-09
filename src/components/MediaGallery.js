import React, { useState } from "react";
import { Photo } from "./UI";
import { asset } from "../utils/assets";

const slides = [
  {
    name: "workbench",
    title: "At the workbench",
    description: "Hands-on assembly, one connection at a time.",
  },
  {
    name: "electronics",
    title: "Inside the build",
    description: "A closer look at the team’s electronics and robot assembly.",
  },
  {
    video: true,
    title: "From the arena",
    description: "Combat footage from the DART media archive.",
  },
];

export function MediaGallery() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const move = (step) =>
    setCurrent((value) => (value + step + slides.length) % slides.length);
  return (
    <div
      className="media-gallery"
      role="region"
      aria-label="DART gallery"
      aria-roledescription="carousel"
    >
      <div className="gallery-visual">
        {slide.video ? (
          <video
            key="video"
            controls
            preload="none"
            aria-label="DART combat robotics footage"
          >
            <source src={asset("videos/IMG_9158.mp4")} type="video/mp4" />
            Your browser does not support video.{" "}
            <a href={asset("videos/IMG_9158.mp4")}>Download the video</a>.
          </video>
        ) : (
          <Photo
            key={slide.name}
            name={slide.name}
            alt={slide.title}
            sizes="(max-width: 760px) 90vw, 65vw"
          />
        )}
      </div>
      <div className="gallery-info">
        <div className="gallery-copy" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">
            Behind the build / {String(current + 1).padStart(2, "0")}
          </p>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
        <div className="gallery-controls">
          <button
            className="icon-button"
            onClick={() => move(-1)}
            aria-label="Previous media"
          >
            ←
          </button>
          <span aria-hidden="true">
            {current + 1} / {slides.length}
          </span>
          <button
            className="icon-button"
            onClick={() => move(1)}
            aria-label="Next media"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
