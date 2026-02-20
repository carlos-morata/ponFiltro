import React from "react";
import HeroSection from './HeroSection';
import FilterToolSection from './FilterToolSection';
import FilterImpactSection from './FilterImpactSection';

const Main = () => {
  return <main className="main-container">
    <HeroSection />
    <FilterToolSection />
    <FilterImpactSection />
  </main>;
};

export default Main;
