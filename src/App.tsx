import React from 'react';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './components/ListaVagas';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  );
}

export default App;
