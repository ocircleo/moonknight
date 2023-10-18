/* eslint-disable react/prop-types */


const AdmincousrseTable = ({ data, setChanged, changed }) => {
    let { _id, courseName, price, seats, isntractor, email } = data
    const approveClass = () => {
        fetch(`https://assignment-12-server-beta-tan.vercel.app/approveclass/${_id}`, {
            method: 'PATCH',
            headers: { 
                'content-type':'application/json',
                authorization: `bearer ${localStorage.getItem('fluent-verse')}` }
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                setChanged(!changed)
            }
        })
    }
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{courseName}</div>
                    </div>
                </div>
            </td>
            <td>
                {isntractor}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{seats}</td>
            <td>{price}</td>
            <td className="flex flex-col gap-2">
                <button className="btn btn-info btn-xs">Deny</button>
                <button onClick={approveClass} className="btn btn-primary btn-xs">Approve</button>
            </td>
        </tr>
    );
};

export default AdmincousrseTable;