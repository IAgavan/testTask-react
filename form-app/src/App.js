import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Aside from './components/Aside';

import './App.css';



function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <main>
          <Form />
        </main>
        <Aside />
      </div>
    </React.Fragment>
  )
}

export default App

