import bcrypt from "bcrypt"

const saltRounds = process.env.SALT_ROUNDS as unknown as string

export const hashPassword = (password: string) => {
  const hash = bcrypt.hashSync(password, parseInt(saltRounds))
  return hash
}

export const comparePassword = (password: string, hash: string) => {
  const result = bcrypt.compareSync(password, hash)
  return result
}
