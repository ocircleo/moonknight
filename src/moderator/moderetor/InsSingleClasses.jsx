/* eslint-disable react/prop-types */


const InsSingleClasses = ({ data, refetch, setRefetch,setLoading,loading }) => {

    let { _id, courseName, seats, price, imgUrl, isntractor, email } = data
    const deleteFromCart = () => {
        setLoading(true)
        fetch(`https://assignment-12-server-beta-tan.vercel.app/deletesimglecourse/${_id}`, {
            method: 'DELETE',
            headers: { 
                'content-type':'application/json',
                authorization: `bearer ${localStorage.getItem('fluent-verse')}` }
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                setRefetch(!refetch)
            }
        })

    }

    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img src={imgUrl} alt={courseName} className="h-[220px] bg-gray-200 w-full object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p>{isntractor}</p>
                <p>{email}</p>
                <p className="text-green-600 capitalize">price: {price} seats: {seats}</p>
                <div className="card-actions justify-end">
                    <button className={` btn btn-error`} onClick={deleteFromCart}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default InsSingleClasses;