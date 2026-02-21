import React from "react";
import HeroSection from './HeroSection';
import FilterToolSection from './FilterToolSection';
import FilterImpactSection from './FilterImpactSection';
import ToneEducationSection from "./ToneEducationSection";

const Main = () => {
  return <main className="main-container">
    <HeroSection />
    <FilterToolSection />
    <FilterImpactSection />
    <ToneEducationSection />
  </main>;
};

export default Main;
