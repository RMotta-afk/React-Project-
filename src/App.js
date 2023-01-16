import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';
import Roots from './routes';

function App() {
  return (
    <>
      <Header />
      <Roots />
      <GlobalStyle />
    </>
  );
}

export default App;
