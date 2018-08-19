import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login';
import Registration from './Component/Registration.js';
import Dashboard from './Component/Dashboard';
class App extends Component {
  
  constructor(props)
  {
  
    super(props)
    this.state={
      LoginComponent:true,
      RegisterComponent:false,
      DashboardComponent:false
    }
    this.handelLogin=this.handelLogin.bind(this);
    this.handelRegister =this.handelRegister.bind(this);
    this.handelSubmit=this.handelSubmit.bind(this);
  }
  handelRegister(event)
  {
    this.setState({RegisterComponent:true});
    this.setState({LoginComponent:false});
    this.setState({DashboardComponent:false});
  }
  handelLogin(event)
  {
    this.setState({LoginComponent:true});
    this.setState({RegisterComponent:false});
    this.setState({DashboardComponent:false});

  }
  handelSubmit(event)
  {
    this.setState({DashboardComponent:true});
    this.setState({LoginComponent:false});
    this.setState({RegisterComponent:false});
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <button className="buttonLogin" onClick={this.handelLogin}>Login</button>
        <button className="buttonRegister" onClick={this.handelRegister}>Register</button>
        {this.state.LoginComponent ? <Login/>:null}
        {this.state.RegisterComponent ? <Registration/>:null}
        <button onClick={this.handelSubmit} className="Submit">Submit</button>
        {this.state.DashboardComponent ? <Dashboard/> : null}
        </div>
      
      </div>
    );
  }
}

export default App;
