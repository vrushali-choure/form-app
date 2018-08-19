import React,{Component} from 'react';
import {Registration} from '../Component/Registration'
class Dashboard extends Component{
    dataArr=[]
    constructor(props){ 
        super(props);
        this.state={
        products:[]
        }    
          }
    componentDidMount()
    {
        this.getData();
    }
   componentWillReceiveProps(nextProps)
   {
       this.getData();
       console.log(nextProps);
   }
    getData()
    {
        this.dataArr=JSON.parse(localStorage.getItem('data'));
        this.setState({products:this.dataArr});
        console.log(this.dataArr);
       
   }
   removeData(i)
   {

      let data =this.state.products;
      console.log(data); 
      data.splice(i,1);
     this.setState({products:data});       

   }
   editData(i)
   {
       let editData=this.state.products[i];
      
    }
    render()
    {
        
        return(
        <div>
        <h1>Dashboard</h1>
        {this.state.products.map((product,i)=>{
            return(
                <li key={i} className="dataList">
                {i+1}.
                <span>{product.FirstName}</span>
                <span>{product.LastName}</span>
                <span>{product.Password}</span>
                <span> {product.Email}</span>
                <span><button onClick={()=>this.removeData(i)}>Delete</button></span>
                <span><button onClick={()=>this.editData(i)} >Edit</button></span>
                </li>

            )
        })}
        </div>);
    }

}
export default Dashboard;