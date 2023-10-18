/* eslint-disable react/prop-types */


const UsersTable = ({ data, setChanged, changed }) => {
    let { name, email, role } = data

    const emPower = (newRole) => {
        let userData = {
            email: email,
            role: newRole
        }
        fetch(`https://assignment-12-server-beta-tan.vercel.app/empoweruser`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json',
                authorization: `bearer ${localStorage.getItem('fluent-verse')}`
            },
            body: JSON.stringify(userData)

        }).then(res => res.json()).then(datax => {
            if (datax.modifiedCount > 0) {
                setChanged(!changed)
            }
        })
    }

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{role ? role : 'user'}</td>
            <td className="flex flex-col gap-2">
                {
                    email == 'salmanhossain11222626@gmail.com' ? 'Master' : role == 'isntaractor' ? <>
                        <button onClick={() => emPower('admin')} className="btn btn-primary btn-xs">Make Admin</button>
                        <button onClick={() => emPower(null)} className="btn btn-info btn-xs">Make User</button>
                    </> : role == 'admin' ? <>

                        <button onClick={() => emPower('isntaractor')} className="btn btn-info btn-xs">Make Instractor</button>
                    </> : <>

                        <button onClick={() => emPower('isntaractor')} className="btn btn-info btn-xs">Make Instractor</button>
                        <button onClick={() => emPower('admin')} className="btn btn-primary btn-xs disabled"> Make Admin</button>

                    </>
                }
            </td>
        </tr>
    );
};

export default UsersTable;