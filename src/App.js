import React from 'react';
import logo from './logo.svg';
import './App.css';

//importing components
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

class App extends React.Component {
  constructor () {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
        <Header />
        <Form />
      </div>
    );

  }
}

export default App;
