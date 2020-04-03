import React from 'react';
import logo from './logo.svg';
import './App.css';

//importing components
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      inventoryList: []
    };
  }


  componentDidMount() {
    axios.get('api/products')
    .then(res => {
      this.setState({ inventoryList: res.data });
      console.log(this.state.inventoryList)
    })
    .catch(error => {
      console.log(error);
    })
  }

 












  render() {
    return (
      <div className="App">
        <Dashboard 
          inventoryList = {this.state.inventoryList}
        />
        <Header />
        <Form />
      </div>
    );

  }
}

export default App;
