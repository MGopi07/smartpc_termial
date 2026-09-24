import React from "react";
import { FeaturedGameSection } from "./FeaturedGameSection";
import { SliderGameSection } from "./SliderGameSection";
import { CrashGameSection } from "./CrashGameSection";
import { HotGameSection } from "./HotGameSection";
import { CasinoGameSection } from "./CasinoGameSection";

export const GameSection = ({ section, games, onGameClick }) => {
  if (section.id === "live-dealers") {
    return (
      <FeaturedGameSection
        section={section}
        games={games}
        onGameClick={onGameClick}
      />
    );
  }

  if (section.id === "crash-games") {
    // return (
    //   <CrashGameSection
    //     section={section}
    //     games={games}
    //     onGameClick={onGameClick}
    //   />
    // );
    return null;
  }

  if (section.id === "hot-games") {
    return (
      <HotGameSection
        section={section}
        games={games}
        onGameClick={onGameClick}
      />
    );
  }

  if (section.id === "casino") {
    return (
      <CasinoGameSection
        section={section}
        games={games}
        onGameClick={onGameClick}
      />
    );
  }

  return (
    <SliderGameSection
      section={section}
      games={games}
      onGameClick={onGameClick}
    />
  );
};
