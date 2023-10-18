import { useContext, useEffect } from "react";
import { useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import InsSingleClasses from "./InsSingleClasses";
import Loading from "../../shared/loading/Loading";



const Classes = () => {
    const { userRole } = useContext(Authcontext)
    let [courses, setCourses] = useState([]);
    const [refetch, setRefetch] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://assignment-12-server-beta-tan.vercel.app/istractorclass/${userRole?.email}`).then(res => res.json()).then(data => {
            setCourses(data)
            setLoading(false)
        })
    }, [userRole?.email, refetch])
    return (
        <>
            {
                loading ? <Loading para={true}></Loading> : <>
                    <div className="flex gap-3 flex-wrap mx-auto items-center justify-center my-5">
                        {
                            courses.map((element, index) => <InsSingleClasses key={index} data={element} refetch={refetch} setRefetch={setRefetch} loading={loading} setLoading={setLoading}></InsSingleClasses>)
                        }
                    </div>
                </>
            }


        </>
    );
};

export default Classes;