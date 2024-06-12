import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props);
    this.state={
        count:1,
    }
}
render(){
    const {name,location,email}=this.props;
    const {count}=this.state;
    return (
    <div className="user-class">
        <h4>class1: {count}</h4>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
        }}>Count Increment</button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Email: {email}</h2>
    </div>);
}
}
export default UserClass;