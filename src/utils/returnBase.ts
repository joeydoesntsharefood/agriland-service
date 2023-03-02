import consoleTime from "./consoleTime"

type _enumType = 'success' | 'error'

interface IBaseReturn {
  message: string
  data?: any
  success?: boolean
  errorCode?: number
}

interface Props extends Omit<IBaseReturn, 'success'> {
  type: _enumType
}

const returnBase = ({ data, message, type, errorCode }: Props) => {
  const types: Record<_enumType, IBaseReturn> = {
    error: {
      message,
      errorCode
    },
    success: {
      message,
      data,
      success: true
    }
  }

  if (type == 'success') consoleTime.success(message)

  return types[type]
}

export default returnBase