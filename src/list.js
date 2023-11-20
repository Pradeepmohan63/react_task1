function List(props){
    const {brand}=props

    let value=brand.map((value)=>{
       return (
            <li>{value.name}</li>
       )
    })

    return(
        <div className="details">
        <h1>Best mobile phone company</h1>
        <ul>
            {value}
        </ul>
        </div>
    )

}

export default List;