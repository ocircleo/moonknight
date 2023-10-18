import { useEffect, useState } from "react";
import AdmincousrseTable from "./AdmincousrseTable";
import Loading from "../../shared/loading/Loading";


const Admincourses = () => {
    let [courses, setCourses] = useState([]);
    const [changed, setChanged] = useState(true)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://assignment-12-server-beta-tan.vercel.app/pendingclasses').then(res => res.json()).then(data => {
            setLoading(false)
            setCourses(data)
        })
    }, [changed])
    return (

        <>
            {
                loading ? <Loading para={true}></Loading> : <>
                    
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>course</th>
                                    <th>Instractor</th>
                                    <th>Seats</th>
                                    <th>price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    courses.map(element => <AdmincousrseTable changed={changed} setChanged={setChanged} key={element._id} data={element}></AdmincousrseTable>)
                                }
                            </tbody>
                            {/* foot */}
                        </table>
                    </div>
                </>
            }
        </>
    );
};

export default Admincourses;