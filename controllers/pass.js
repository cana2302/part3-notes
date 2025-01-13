import bcrypt from 'bcrypt'

const password = 'Password1'

const hash = await bcrypt.hash(password, 10)

console.log({
  password,
  hash
})

let isMatch = await bcrypt.compare('password', hash)
console.log('comparacion password incorrecrto vs hash:' + isMatch)
isMatch = await bcrypt.compare(password, hash)
console.log('comparacion password1 vs hash:' + isMatch)


