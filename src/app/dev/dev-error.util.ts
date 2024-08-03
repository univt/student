const devErrorPrefix = `[UniT dev]
`
const defaultMessage = 'Unspecified error.'

export function newDevError(message: string): Error {
  return new Error(devErrorPrefix + (message || defaultMessage))
}
