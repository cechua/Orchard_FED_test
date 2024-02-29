import React from 'react';
const App = () => {
  const testFunction = () => {
    alert('function is working');
  };
  return (
    <>
      <h1 className="font-bold text-blue-500 ">Hello React</h1>
      <button className="w-24 bg-blue-400" onClick={() => testFunction()}>
        TEST ME
      </button>
    </>
  );
};

export default App;
