function isValidJsonString(jsonString: string) {
  try {
    JSON.parse(jsonString)
    return true
  } catch (error) {
    return false
  }
}

function fixNonStrings(str: string) {
  // a valid stringification is assumed to be an object, boolean or number
  if (isValidJsonString(str)) return JSON.parse(str)
  return str
}

// takes in a raw object (of depth 1) and replaces any session variables there.
export function fixValueIfChanged(value: string, newValue: string) {
  if (value !== newValue) return fixNonStrings(newValue)
  return value
}
