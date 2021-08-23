import React from 'react';
import 'views/App.css';
import MainTemplate from 'components/templates/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const App = () => {
  return (
    <Router>
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
            <h2>Contact</h2>
          </Route>
          <Route path="/calendar" exact>
            <h2>Kalendarz</h2>
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default App;
