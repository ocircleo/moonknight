import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import { Link } from 'react-router-dom';

const MyPayments = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(Authcontext)
    useEffect(() => {
        fetch('https://moonknight-backend.vercel.app/pay/mypayments', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: user?.email })
        }).then(res => res.json()).then(data => {

            setData(data);
        })
    }, [user?.email])
    return (
        <div className='flex flex-col p-3 gap-3'>
            {
                data.map(ele => <div key={ele._id} className='flex justify-between border py-3 px-5 rounded'>
                    <p>Booking Date: {ele.date}</p>
                    <p>Days: {ele.days}</p>
                    <p>Amount: {ele.total_amount} TK</p>
                    <Link className='text-blue-400 underline' to={`/seeDetaill/${ele.house_id}`}>House Detail</Link>
                </div>
                )
            }
            {
                data.length == 0? <p className='text-center py-4 text-xl font-semibold text-gray-700'>No Payments made</p>:""
            }
        </div>
    );
};

export default MyPayments;