import React from "react";
import OriginalMessage from './OriginalMessage';
import FilteredMessage from './FilteredMessage';
import ToneSelector from './ToneSelector';
import FilterButton from './FilterButton';

const FilterToolSection = () => {
  return <section className="filterSection-container">
    <div className="checkbox-container">
    <span className="checkbox checkbox-red">&#11044;</span>
    <span className="checkbox checkbox-yellow">&#11044;</span>
    <span className="checkbox checkbox-green">&#11044;</span>
    <p className="text-refiner">Refinador de texto V1.0</p>
    </div>
    <OriginalMessage />
    <FilteredMessage />
    <ToneSelector />
    <FilterButton />
  </section>;
};

export default FilterToolSection;
