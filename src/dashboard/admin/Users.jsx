
const Users = () => {
  const people = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      city: "London"
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      city: "Paris"
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      city: "New York"
    },
    {
      id: 4,
      name: "David",
      age: 35,
      city: "Tokyo"
    },
    {
      id: 5,
      name: "Eve",
      age: 27,
      city: "Sydney"
    },
    {
      id: 6,
      name: "Frank",
      age: 40,
      city: "Berlin"
    },
    {
      id: 7,
      name: "Grace",
      age: 22,
      city: "Barcelona"
    },
    {
      id: 8,
      name: "Hannah",
      age: 29,
      city: "Rome"
    },
    {
      id: 9,
      name: "Isaac",
      age: 33,
      city: "Toronto"
    },
    {
      id: 10,
      name: "Jack",
      age: 26,
      city: "Madrid"
    }
  ];

  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-[#172554] pb-0 mb-0 text-center ">Total User :{people.length}</h2>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          <table className="table  bg-[#D5D5D5] text-black">

            <thead>
              <tr className=" text-sm  bg-[#6366F1]  text-white">
                <th className='border'>No</th>
                <th>Img</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Make Admin</th>
                <th>Make Host</th>
                <th> Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                people.map((user, index) => <tr key={user._id} className=' font-semibold text-base'>
                  <th className=' border text-lg bg-[#6366F1] text-white'>{index + 1}</th>
                  <td><img src={user.img} className='w-14 h-14 rounded-full' alt="photo" /></td>
                  <td>{user.username}</td>
                  <td>{user.gmail}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.role === 'Admin' ? 'Admin' :
                    <button className='btn text-white  border-none  bg-indigo-400  hover:bg-success'>Admin</button>
                  }</td>
                  <td>{user.role === 'Host' ? 'Host' :
                    <button className='btn bg-indigo-400  border-none text-white  hover:bg-success'> Host</button>
                  }</td>
                  <td><button className='btn  bg-red-500  border-none text-white  hover:bg-red-800'>Delete</button></td>
                </tr>)
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;