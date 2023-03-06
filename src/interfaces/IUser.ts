export interface IUser {
  id: number
  firstAccess: boolean
  accessLevel: string
  name: string
  phone: string
  areaOfIntrest: string
  partOf: boolean
  email: string
  corpEmail: string
  corp: string
  role: string
  acceptTerms: boolean
  passwordHash: string
  passwordSalt: number
  verificationToken: string
  verifiedAt: string
  passwordResetToken: string
  resetTokenExpires: string
  rpmId: number
}