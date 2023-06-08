const express = require('express');
const sequelize = require('../models/database-orm.js');
const router = express.Router()
const { Op } = require('sequelize')

router.get('/api/players', async(req, res) => {
    const { filtro, orden } = req.query;
    if(filtro && filtro ==="" && orden) {
    const resultado = await sequelize.models.players.findAll({
        where : {
            [Op.or] : [
                { full_name : { [Op.like] : `%${filtro}%`}},
                { nickname : { [Op.like] : `%${filtro}%`}},
                { email : { [Op.like] : `%${filtro}%`}}
            ]
        },
        atrributes : [
            "id",
            "full_name",
            "email",
            "nickname",
            "ip_address",
            "age",
            "avatar"
        ],
        order : [[orden, 'ASC']]
    })
    res.json(resultado)
    }else{

    const resultado = await sequelize.models.players.findAll({
        atrributes : [
            "id",
            "full_name",
            "email",
            "nickname",
            "ip_address",
            "age",
            "avatar"
        ],
    })
    res.json(resultado)
}

})

module.exports = router