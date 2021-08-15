const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const router = Router()

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post('/', async (req, res) => {
  const { countries, name, difficulty, duration, season } = req.body

  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  })

  console.log(countries)
  countries.map(
    async (c) => await newActivity.setCountries(await Country.findByPk(c))
  )

  res.json(newActivity)
})

module.exports = router
