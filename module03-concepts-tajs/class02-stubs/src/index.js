import Service from './service.js'

const data = {
  username: `joao-${Date.now()}`,
  password: "123456",
}

const service = new Service({
  filename: "./users.json",
})

await service.create(data)

const users = await service.read()
console.log('users created', users)