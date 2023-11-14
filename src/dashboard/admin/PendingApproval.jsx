import { useEffect, useState } from 'react';
import usePageTitle from '../../hooks/PageTitleHook';
import PendingApprovlCompo from './PendingApprovlCompo';

const PendingApproval = () => {

    usePageTitle('Too late | pending approval');
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('https://moonknight-backend.vercel.app/admin/pendingPost')
            .then(res => res.json())
            .then(data => {
                setAllUsers(data)
            });
    }, [])
    return (

        <div className='flex  gap-3 flex-wrap'>

            {
                allUsers.map(ele => <PendingApprovlCompo key={ele._id} ele={ele}></PendingApprovlCompo>)
            }
        </div>






    );
};

export default PendingApproval;