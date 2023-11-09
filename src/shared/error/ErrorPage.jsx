import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../assets/images/error.jpg'
const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="h-screen w-full items-center justify-center flex flex-col">
            <img src={errorImg} alt="" />
            <p className="text-4xl text-red-500"> Error : {error.message || error.statusText}</p>

            <Link to={'/'}><button className="btn btn-primary my-3">Bck to bome</button></Link>
        </div>
    );
};

export default ErrorPage;