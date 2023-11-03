import { useState } from "react";
import { useEffect } from "react";



const PendingApproval = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 py-8">
                {
                    user.map(user => <div key={user.index}>
                        <div className="card card-side bg-base-100 shadow-xl sm:h-[300px]">
                            <figure><img className="" src={user.image} alt="Movie" /></figure>
                            <div className="card-body flex flex-col justify-between">
                                <h2 className="card-title text-2xl font-bold px-4 py-4">Name: {user.title}</h2>
                                <div className="flex gap-2 justify-end">
                                    <button className="btn btn-outline btn-success">Error</button>
                                    <button className="btn btn-outline btn-error">Error</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PendingApproval;