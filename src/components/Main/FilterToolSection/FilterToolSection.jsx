import React from "react";
import OriginalMessage from './OriginalMessage';
import FilteredMessage from './FilteredMessage';
import ToneSelector from './ToneSelector';
import FilterButton from './FilterButton';

const FilterToolSection = () => {
  return <section className="filterSection-container">
    <OriginalMessage />
    <FilteredMessage />
    <ToneSelector />
    <FilterButton />
  </section>;
};

export default FilterToolSection;
