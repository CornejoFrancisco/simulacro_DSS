import React from 'react';

const ListadoPlayers = ({ lista }) => {
  console.log(lista)
  return (
    <div className="container mt-3">
      <h3>Jugadores</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>full_name</th>
            <th>Nombre</th>
            <th>email</th>
            <th>nickname</th>
            <th>ip_address</th>
            <th>age</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {lista && lista.map((list, index) => {
            return(
              <>
          <tr key={index}>
            <th>#</th>
            <td>{list.id}</td>
            <td>{list.full_name}</td>
            <td>{list.email}</td>
            <td>{list.nickname}</td>
            <td>{list.ip_address}</td>
            <td>{list.age}</td>
            <td>{list.avatar}</td>
          </tr>  
          </>
)})}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPlayers;
