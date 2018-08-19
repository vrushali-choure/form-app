import React,{Component} from 'react';
import Dashboard from '../Component/Dashboard';
import '../Component/Login.css';
import Input from '../CustomComponent/Input';

class Login  extends Component {
    
    constructor (props)
    {
        super(props);
       this.state={
           FirstName:"",
           Password:"",
           DashboardComponent:false,
           LoginComponent:true
        }
       this.inputHandel =this.inputHandel.bind(this);
    
    };
    
    inputHandel(event)
    {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.name,event.target.value );
        
    }
    
    validateUser(event)
    {
        var data = localStorage.getItem('data');
        console.log(data);
        
    }
    render()
    {
        const DashboardComponent=this.state.DashboardComponent;
        return(

            <div className="Container">
            <p>Login Form</p>
            <form>
             FirstName
             <Input
              className="Input"
              type="text"
              name="FirstName"
              value={this.state.FirstName} 
              inputHandel={this.inputHandel}
               />
             <br/>
             Password
             <Input 
             type="password" 
             name="Password" 
             placeholder="Enter password" 
             value={this.state.Password} 
             inputHandel={this.inputHandel}
             /> 
             <br/>  
             <br/>
            </form>
            <button onClick={this.validateUser}>Login</button>
            </div>
        );
    }
}

export default Login;