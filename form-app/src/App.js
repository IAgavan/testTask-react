import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Aside from './components/Aside';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <main>
            <Form />
          </main>
          <Aside />
        </div>
      </div>
    )
  }
}

export default App

