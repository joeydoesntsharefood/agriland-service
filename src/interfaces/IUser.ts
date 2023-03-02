export interface IUser {
  id: number
  firstAccess: boolean
  accessLeve: string
  name: string
  phone: string
  areaOfIntrest: string
  partOf: boolean
  email: string
  corpEmail: string
  corp: string
  role: string
  acceptTerms: string
  passwordHash: string
  passwordSalt: string
  verificationToken: string
  verifiedAt: string
  passwordResetToken: string
  resetTokenExpires: string
}