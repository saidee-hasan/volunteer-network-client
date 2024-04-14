import React, { useEffect, useState } from "react";
import "./Admin.css";

const Admin = (props) => {
  const [registers, setRegister] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/register")
      .then((res) => res.json())
      .then((data) => setRegister(data));
  }, []);
 
  const deleteProduct = (id)=>{
    fetch(`http://localhost:5000/delete/${id}`,{
      method: "DELETE",
    })
    .then(res=> res.json())
    .then(result=>{
      console.log('deleted successfully');
    })

   

  }
  console.log(registers);
  return (
    <div className="container-ad">
      <div className="mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Registating date</th>
              <th>Volunteer list</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registers?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.Date}</td>
                  <td>{item.Desicription}</td>
                  <td >
                    <button onClick={()=>deleteProduct(item._id)}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
