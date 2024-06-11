const User=(props)=>{
    const {name,location,email}=props;
    return (
    <div className="user-class">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Email: {email}</h2>
    </div>
);
}

export default User;