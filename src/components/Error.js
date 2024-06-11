import { useRouteError } from "react-router-dom";
const Error =()=> {
    const error=useRouteError();
    return (
    <div className="Error">
        <h1> This is Error page</h1>
        <h2> OOPs!!, Something went wrong</h2>
        <h2>{error.status}: {error.statusText}</h2>

    </div>
)};
export default Error;