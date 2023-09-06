const mongoose = require('mongoose')

before((done) => {
  mongoose.connect(process.env.MONGO_URI_TEST)
  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Warning', error)
    })
})

beforeEach((done) => {
  const { drivers } = mongoose.connection.collections
  drivers
    .drop()
    .then(() => done())
    .catch(() => done())
})
