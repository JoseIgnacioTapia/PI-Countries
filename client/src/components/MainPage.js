import React from 'react';
import SearchForm from './ui/SearchForm';
import SectionCards from './ui/SectionCards';
import SelectByContinent from './ui/SelectByContinent';

function MainPage() {
  return (
    <div>
      <SearchForm />
      <SelectByContinent />
      <SectionCards />
    </div>
  );
}

export default MainPage;
