import React, { useState } from 'react'


export default function FiltrarPlayers({onDataSubmit }) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onDataSubmit (filtro, orden);
      };
    const [orden, setOrden] = useState("")
    const [filtro, setFiltro] = useState("")
  
  return (
    <div className="card mb-3">
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Filtro:</label>
          <input type="text" className="form-control" placeholder='Ingrese filtro' onChange={(event) => { setFiltro(event.target.value);}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Orden:</label>
          <select className="form-select" onChange={(event) => { setOrden(event.target.value);}}>
            <option value="full_Name">Nombre</option>
            <option value="nickname">Apodo</option>
            <option value="id">Número</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
    </div>
  </div>
  )
}
