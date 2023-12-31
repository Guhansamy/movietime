import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <>
            <h1> OOPS !!</h1>
            <h2> Something went wrong </h2>
            <h2> Please check the URL </h2>
            <h2> {err.status} -----  {err.error.message} </h2>
        </>
    )
}

export default Error;