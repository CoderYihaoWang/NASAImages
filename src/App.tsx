import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import MediaGrid from './Components/MediaGrid/MediaGrid';
import { IUserInput } from './Common/interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Mars",
    StartDate: new Date('2014-08-18T21:11:54'),
    EndDate: new Date('2018-08-18T21:11:54'),
  });

  return (
    <div className="App" >
      <MuiThemeProvider theme={theme}>
          <SearchBar SetUserInput={setUserInput}/>
          <MediaGrid SearchQuery={UserInput.SearchQuery} StartDate={UserInput.StartDate} EndDate={UserInput.EndDate}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;