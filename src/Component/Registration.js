import React,{Component} from 'react';
import '../Component/Registration.css';
import Dashboard from './Dashboard';
import Input from '../CustomComponent/Input';
class Registartion extends Component{
    DataArr=[];
    constructor(props)
    {
        
        super(props);
        this.state={
            FirstName:"",
            LastName:"",
            Password:"",
            Email:"",
            LoginComponent:false,
            RegistartionComponent:true,
            DashboardComponent:false,
            getArr:[]
        };
        this.addHandel =this.addHandel.bind(this);
        this.inputHandel=this.inputHandel.bind(this);
    }   
    inputHandel(event)
    {
        
        this.data=this.setState({[event.target.name] : event.target.value});
        console.log(event.target.value);
    }
    addHandel(event)
    {
        this.setState({LoginComponent:false});
        this.setState({RegistartionComponent:false});
        this.setState({DashboardComponent:true});
        var fname= this.refs.FirstName.value;
        var lname=this.refs.LastName.value;
        var password=this.refs.Password.value;
        var email= this.refs.Email.value;
        this.DataArr.push({FirstName:fname,LastName:lname,Password:password,Email:email});
        localStorage.setItem('data',JSON.stringify(this.DataArr));
        
    }
    
    
    render(){
        return(
            <div className="Registration" ref="RegisterForm">
            <h2>Registartion From</h2>
            <form className="RegistrationForm">
            FirstName
            <input type="text"name=" FirstName" value={this.state.value} onChange={this.inputHandel} ref="FirstName"/>
            <br/>
            Lastname
            <input type="text" name="LaseName" value={this.state.value} onChange={this.inputHandel} ref="LastName"/>
            <br/>
            Password
            <input type="password"name="Password" value={this.state.value} onChange={this.inputHandel} ref="Password"/>
            <br/>
            Email-Id
            <input type="email" name="Email" value={this.state.value} onChange={this.inputHandel} ref="Email"/>
            <br/>
            </form>
            <button onClick={this.addHandel}>Add</button>
            {this.state.DashboardComponent ? <Dashboard/>:null}
            </div>
        );
    }

}
export default Registartion;