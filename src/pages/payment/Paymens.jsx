import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import { Link } from 'react-router-dom';

const Payments = () => {
    const [payments, setPayments] = useState([])
    const { user } = useContext(Authcontext);
    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(`https://moonknight-backend.vercel.app/host/myPayments/${user?.email}`);
            const data = await res.json();
            setPayments(data);
    
        }
        fetchInfo();
    }, [user, user?.email])

    return (
        <div className='flex flex-col p-3 gap-3'>
            {
                payments.map(ele => <div key={ele._id} className='flex justify-between border py-3 px-5 rounded'>
                    <p>Booking Date: {ele.date}</p>
                    <p>Days: {ele.days}</p>
                    <p>Amount: {ele.total_amount} TK</p>
                    <p>Phone: {ele.cus_phone}</p>
                </div>
                )
            }
            {
                payments.length == 0 ? <p className='text-center py-4 text-xl font-semibold text-gray-700'>No Payments made</p> : ""
            }

        </div>
    );
};

export default Payments;