import { Component } from "react";

class Greet extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            message:"Hi",
            color:"blue",
            make: "Yamaha",
            model: "R15"
      
        }
    }
    inCrementBtn(){
        this.setState({
            count:this.state.count+1
        })
    }
    deCrementBtn(){
        this.setState({
            count:this.state.count>0? this.state.count-1:0
        })
    }
    change1(){
        this.setState({
            message:"Good morning" 
           
        })
    }
    change2(){
        this.setState({
            message:"Hello everyone" 
        })
    }
    changeColor(){
        this.setState({
            color:"Green" 
         
        })
    }
    changeColor1(){
        this.setState({
            color:"Orange" 
        })
    }



    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.inCrementBtn()}>Increment</button> 
                <button onClick={()=>this.deCrementBtn()}>Decrement</button>  
                <h1>{this.state.message}</h1>
                 <button onClick={()=>this.change1()}>Change</button> 
                 <button onClick={()=>this.change2()}>Rechange</button> 
                <h2>{this.state.color}</h2>
                <button onClick={()=>this.changeColor()}>ColorChange</button>
                <button onClick={()=>this.changeColor1()}>ColorChange</button>
                <h2>{this.state.make}</h2>  
                <h2>{this.state.model}</h2> 
            </div>
        )
    }   

}
export default Greet