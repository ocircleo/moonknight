
import { Link, useSearchParams } from 'react-router-dom';
const Paysucces = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const paramFinder = (text) => {
        let newparams = text.toString();
        const params = {};
        const array = [...newparams.split("&")];
        array.map(ele => {
            const para = [...ele.split("=")];
            params[para[0]] = para[1];

        })
        return params;
    }
    return (
        <div className='flex flex-col items-center my-5'>
            <h1 className='text-xl py-6 uppercase text-center font-bold'>payment succes full</h1>
            <Link to={"/"} className='bg-blue-500 rounded p-3 text-white font-semibold'>Back to home</Link>

        </div>
    );
};

export default Paysucces;