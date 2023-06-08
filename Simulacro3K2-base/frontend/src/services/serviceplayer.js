const { default: axios } = require("axios")

const getPlayer = async(filtro, orden) => {

    const resultado = await axios.get(`http://localhost:3001/api/players?filtro=${filtro}&ornde=${orden}`)
    return resultado.data
}

const servicePlayer = (
    getPlayer
)

export default servicePlayer