import React from 'react';
import Router from './Router';
import './assets/reset.css';
import './assets/style.css';
import { Header } from './components/Header';

const App = () => {
  return(
    <>
     <Header />
     <div className="module-spacer--small"></div>
      <main className="c-main">
        <Router />
      </main>
    </>
  )
}

export default App;