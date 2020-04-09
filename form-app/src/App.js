import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Aside from './components/Aside';

import './App.css';



export class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <main>
            <Form form={this.form}/>
          </main>
          <Aside />
        </div>
      </React.Fragment>
    )
  }
}

export default App

