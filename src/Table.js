function Table(props){
    const {data}=props

    let value=data.map((value)=>{
       return (
        <tr>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.degree}</td>
        </tr>)
    })
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Degree</th>
            </tr>

            {/* <tr>
                <td>Arokiya</td>
                <td>23</td>
                <td>Bsc</td>
            </tr>

            <tr>
            <td>vasantham</td>
                <td>23</td>
                <td>Bsc</td>
            </tr>

            <tr>
                <td>santhosh</td>
                <td>23</td>
                <td>Bsc</td>
            </tr> */}
          {value}  
        </table>
        
    )
}
export default Table;