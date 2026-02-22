import React from "react";
import FilterButton from '../FilterButton';

const ToneSelector = () => {
  return <section className="toneSelector-section">
    <section className="toneButtons-section">
      <button className="tone-buttons">Directo</button>
      <button className="tone-buttons">Neutral</button>
      <button className="tone-buttons">Diplomático</button>
    </section>
    <FilterButton />
  </section>;
};

export default ToneSelector;
