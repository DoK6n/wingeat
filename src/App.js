import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import theme from './components/theme';
import Home from './components/Home';
import Cart from './components/Cart';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding-bottom: 200px;
    &::-webkit-scrollbar {
      width: 8px;
      backgrount-color: #fffff;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: #acacacea;
      &:hover {
        background-color: #757575;
      }
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/wingeat'>
            <Home />
          </Route>
          <Route path='/wingeat/cart' component={Cart} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
