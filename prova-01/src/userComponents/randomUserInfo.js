function UserInfo(props){
    let randomUser = props.randomUser;
    
    
    return( 
        
        <>
        <h2>{randomUser.results[0].name.first}</h2>
        <h2>{randomUser.results[0].email}</h2>
        <h2>{randomUser.results[0].registered.date}</h2>
        <h2>{randomUser.results[0].location.street.name} , {randomUser.results[0].location.street.number} </h2>
        <h2> Telefone: {randomUser.results[0].phone}</h2>
        <img src={randomUser.results[0].picture.large}  /> 
        </>
    )
    
    }
    
    export default UserInfo;