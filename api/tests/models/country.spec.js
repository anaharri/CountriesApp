const { Activity, Country, conn } = require('../../src/db.js')
const { expect } = require('chai')

describe('Country model', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err)
    })
  )
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }))
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done())
      })
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' })
      })
    })
  })
  describe('Country', () => {
    it('should throw an error if no continent is provided', (done) => {
      Country.create({
        flag: 'https://restcountries.eu/data/col.svg',
        name: 'Venezuela',
      })
        .then(() => done(new Error('Please provide a valid continent')))
        .catch(() => done())
    })
  })
})
