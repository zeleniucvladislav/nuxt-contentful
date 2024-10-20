export const useDebounce = () => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (fn: VoidFunction, timeout: number = 300): void => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, timeout)
  }
}
