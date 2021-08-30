import React, { useState } from 'react';
import 'views/App.css';
import MainTemplate from 'components/templates/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Form from './Form';

const initialFormState = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/" exact>
              <h1>O mnie</h1>
            </Route>
            <Route path="/gallery">
              <h2>Galeria</h2>
            </Route>
            <Route path="/contact" exact>
              <Form />
            </Route>
            <Route path="/calendar" exact>
              <h2>Kalendarz</h2>
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
