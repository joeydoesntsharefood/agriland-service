import colors from 'colors'
import dayjs from 'dayjs'

const timer = (type: string, value: string): string => '[' + type + `] ${colors.grey(dayjs().format('HH:mm:ss'))}` + ' ' + value 

declare type _enumConsoleTime = 'success' | 'error' | 'request'

const consoleTime: Record<_enumConsoleTime, (value: string) => void> = {
  success: (value: string): void => console.log(timer(colors.blue('SUCCESS'), value)),
  error: (value: string): void => console.log(timer(colors.red('ERROR'), value)),
  request: (value: string): void => console.log(timer(colors.yellow('REQUEST'), value))
}

export default consoleTime