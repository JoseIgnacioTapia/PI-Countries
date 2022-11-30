import React from 'react';
import SearchBar from './ui/SearchBar';
import SectionCards from './ui/SectionCards';
import SelectByActivity from './ui/SelectByActivity';
import SelectByContinent from './ui/SelectByContinent';
import SelectByOrder from './ui/SelectByOrder';

function MainPage() {
  return (
    <div>
      <SearchBar />
      <SelectByContinent />
      <SelectByActivity />
      <SelectByOrder />
      <SectionCards />
    </div>
  );
}

export default MainPage;
