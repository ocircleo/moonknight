import React, { useEffect, useState } from 'react';

import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
// import { filter } from 'lodash';

const Users = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })

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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('users.json')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        console.log(data)

      });
  }, [])



  const imageBodyTemplate = (users) => {
    return <img src={users.img} alt="User" className='w-14 h-14  rounded-full' />;
  };

  const indexBodyTemplate = (rowData, props) => {
    return (
      <span className=' text-lg font-bold'>{props.rowIndex + 1}</span>
    );
  };


  const adminTemplate = () => {
    return (
      <button className='btn text-white border-none bg-indigo-400 hover:bg-success'>Admin</button>
    );
  };

  const hostTemplate = () => {
    return (
      <button className='btn bg-indigo-400 border-none text-white hover:bg-success'>Host</button>
    );
  };

  const deleteTemplate = () => {
    return (
      <button className='btn bg-red-500 border-none text-white hover:bg-red-800'>Delete</button>
    );
  };


  console.log(users);
  console.log(people);
  return (
    <div>
      {/* <h2 className="text-2xl font-bold text-[#172554] pb-0 mb-0 text-center ">Total User :{users.length}</h2>


      <InputText
        className='  border-2 p-1  w-96    border-[#6366F1]'
        placeholder='Search by name, gmail, phone number'
        onInput={(e) =>
          setFilters({
            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
          })
        }
      />



      <DataTable value={users} sortMode='multiple' filters={filters}
        paginator
        rows={5}
        rowsPerPageOptions={[1, 2, 3, 4, 5]}
        totalRecords={5}
      >

        <Column header="No" body={indexBodyTemplate} style={{ textAlign: 'center' }} />
        <Column field="imageURL" header="Image" body={imageBodyTemplate} />
        <Column field='username' header="Name" sortable />
        <Column field='gmail' header="Gmail" sortable />
        <Column field='phone_number' header="Phone number" sortable />
        <Column header="Admin" body={adminTemplate} />
        <Column header="Host" body={hostTemplate} />
        <Column header="Delete" body={deleteTemplate} />
      </DataTable> */}





      <div>
            <h2 className="text-4xl font-bold text-[#172554] pb-0 mb-0 text-center ">Total User :{users.length}</h2>
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
        users.map((user, index) =>  <tr key={user._id} className=' font-semibold text-base'>
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