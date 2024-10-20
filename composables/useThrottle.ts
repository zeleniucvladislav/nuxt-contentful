export const useThrottle = () => {
  let timerFlag: ReturnType<typeof setTimeout> | null = null

  return (fn: VoidFunction, timeout: number = 300) => {
    if (timerFlag === null) {
      fn()
      timerFlag = setTimeout(() => {
        timerFlag = null
      }, timeout)
    }
  }
}
