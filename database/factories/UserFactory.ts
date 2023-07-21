import user from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(user, ({ faker }) => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: "123456789",
  }
}).build()
