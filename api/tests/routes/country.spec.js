/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai')
const session = require('supertest-session')
const app = require('../../src/app.js')
const { Country, conn } = require('../../src/db.js')

const agent = session(app)
const country = {
  name: 'Venezuela',
}

describe('Country routes', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err)
    })
  )
  beforeEach(
    () => Country.sync({ force: true })
    // .then(() => Country.create(pokemon))
  )
  describe('GET /countries', () => {
    it('should return status 200', () => agent.get('/countries').expect(200))
    it('expects content to be of type JSON', () => {
      agent.get('/countries').expect('Content-Type', /json/)
    })
  })
  describe('GET /countries/:id', () => {
    it('should return status 200', () => agent.get('/countries').expect(200))
    it('expects content to be of type JSON', () => {
      agent.get('/countries').expect('Content-Type', /json/)
    })
  })
})
