import User from "./User";
import UserClass from "./UserClass";

const About =()=> (
    <div className="About">
        <h1> THis is About page</h1>
        <User name="Sirisha" location="Chicago" email="sirisha@gmail.com"/>
        <UserClass name="Sirisha" location="Chicago" email="sirisha@gmail.com"/>

    </div>
);
export default About;