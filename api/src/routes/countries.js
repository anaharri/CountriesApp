const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize')
const router = Router()

// GET /countries:
// Obtener un listado de los paises.

router.get('/', async (req, res) => {
  const all = await Country.findAll({ include: Activity })

  // GET /countries?name="...":
  // Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
  // Si no existe ningún país mostrar un mensaje adecuado
  if (req.query.name) {
    let { name } = req.query
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    const one = await Country.findAll({
      where: { name: { [Op.substring]: name } },
    })
    if (!one.length) {
      return res.status(404).send('Error: country not found')
    }
    return res.json(one)
  }

  res.json(all)
})

// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get('/:id', async (req, res) => {
  const one = await Country.findByPk(req.params.id.toUpperCase(), {
    include: Activity,
  })
  if (!one) {
    return res.status(404).send('Error: country not found')
  }
  console.log(one)
  return res.json(one)
})

module.exports = router
