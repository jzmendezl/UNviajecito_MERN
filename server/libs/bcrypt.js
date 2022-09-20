import bcrypt from 'bcrypt'

export const encrypt = async (password) => {
  const hash = await bcrypt.hash(password, 10)
  return hash
}

export const compare = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}