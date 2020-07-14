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

  return (
    <div>
      <SearchBar SetUserInput={setUserInput}></SearchBar>
    </div>
  );
}

export default App;
