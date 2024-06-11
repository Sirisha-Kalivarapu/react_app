import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props);
}
render(){
    const {name,location,email}=this.props;
    return (
    <div className="user-class">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Email: {email}</h2>
    </div>);
}
}
export default UserClass;