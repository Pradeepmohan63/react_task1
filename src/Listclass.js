import { Component } from "react";

class Listclass extends Component{
    render(){
           const {detail1}=this.props
           const store=detail1.map((value)=>{
        return(
             <li>{value.name}</li>
        )
    })
    return(
        <div class ="order">
           <h1>Using class component</h1>
          <ul>
          {store}
            
            </ul> 

        </div>
    )
    
}
}
export default Listclass;