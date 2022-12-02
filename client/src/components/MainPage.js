import React from 'react';
import SearchBar from './ui/SearchBar';
import SectionCards from './ui/SectionCards';
import SelectByActivity from './ui/SelectByActivity';
import SelectByContinent from './ui/SelectByContinent';

function MainPage() {
  return (
    <div>
      <SearchBar />
      <SelectByContinent />
      <SelectByActivity />
      <SectionCards />
    </div>
  );
}

export default MainPage;
