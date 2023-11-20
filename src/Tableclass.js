import { Component } from "react";


class Tableclass extends Component{
    render(){
        const {detail}=this.props
        const value1= detail.map((value)=>{     
            return(
                <tr>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.degree}</td>
                </tr>

            )
            })   
            
    

return(

    <table>
        <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Degree</th>
            </tr>
        {value1}             
    </table>
)
}
}


export default Tableclass;
