import React from 'react';
import './Demo.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export default function BasicTextFields() {
  return (
    <Container className='Container--form'>
      <h1>
        Hey, good looking, first things first, how should I call you?
      </h1>
      <form className='Demo--form' noValidate autoComplete="off">
        <TextField
          id="standard-error-helper-text"
          label=""
          defaultValue="name"
          helperText=""
          variant="filled"
        />
      </form>
    </Container>
  );
}
