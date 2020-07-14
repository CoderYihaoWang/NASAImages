import React, { useState } from 'react';
import './App.css';
import { IUserInput } from './Common/interfaces';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Mars",
    StartDate: new Date('2014-08-18T21:11:54'),
    EndDate: new Date('2018-08-18T21:11:54'),
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  return (
    <div>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}></SearchBar>
    </div>
  );
}

export default App;
