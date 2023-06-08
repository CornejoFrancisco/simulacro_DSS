import React from 'react-hook-form';
import { useEffect, useState} from 'react';
import ListadoPlayers from './ListadoPlayers';
import axios from 'axios'
import FiltrarPlayers from './FiltrarPlayers';


const Players = () => {
  const [lista, setLista] = useState('');


  useEffect(() => {
    const getPlayer = async(filtro, orden) => {
      const resultado = await axios.get(`http://localhost:3001/api/players?filtro=&orden=`)
      setLista(resultado.data)
  }
    getPlayer()}, [])


  const onConsultar = async(filtro, orden) => {
    const resultado = await axios.get(`http://localhost:3001/api/players?filtro=${filtro}&orden=${orden}`)
    setLista(resultado.data)
  }




  return (
    <div className="container">
      <h1>Formulario de Búsqueda</h1>
      <FiltrarPlayers onDataSubmit={onConsultar}></FiltrarPlayers>
      <ListadoPlayers lista={lista} />
    </div>
  );

}

export default Players;