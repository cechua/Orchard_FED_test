import React from 'react';
import MainContent from './components/MainContent/MainContent';
import SecondaryContent from './components/SecondaryContent/SecondaryContent';
const App = () => {
  return (
    <main className="bg-bodyBG h-screen">
      <MainContent />
      <SecondaryContent />
    </main>
  );
};

export default App;
