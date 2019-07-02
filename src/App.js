import React from 'react';
import CountryProvider from './provider/context/CountryContext';
import CountryView from './components/CountryView';
import './App.css';

function App() {
  return (<>
    <CountryProvider>
      <div className="App">
        <CountryView />
      </div>
    </CountryProvider>
  </>);
}

export default App;
