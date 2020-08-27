export function isValid (identifier: string): boolean {
  if (identifier.length < 1) {
    return false
  }
  if (!/^[a-zA-Z]+$/.test(identifier.charAt(0)) ||
      !/^[0-9a-zA-Z]+$/.test(identifier)) {
    return false
  }
  return true
}
