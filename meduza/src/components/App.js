// import logo from './../logo.svg';
import logo from './../images/logo.svg';
import './App.css';

import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Demo from './demo';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* ---------------Demo------------------- */}
        <Container maxWidth="sm">
          <Demo />
        </Container>
        {/* ---------------Buttons------------------- */}
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        {/* ---------------Box------------------- */}
        <Box component="span" m={1}>
          <Button variant="contained" color="secondary">test</Button>
        </Box>

       



      </header>
    </div>
  );
}

export default App;