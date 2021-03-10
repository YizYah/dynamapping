function isValidJsonString(jsonString: string) {
  try {
    JSON.parse(jsonString)
    return true
  } catch (error) {
    return false
  }
}

function fixNonStrings(value: string) {
  // a valid stringification is assumed to be an object, boolean or number
  if (isValidJsonString(value)) return JSON.parse(value)
  return value
}

// takes in a raw object (of depth 1) and replaces any session variables there.
export function fixValueIfChanged(value: string, newValue: any) {
  // console.log(`newValue=${newValue}`)
  // if ((typeof newValue) === 'object') console.log(`newValue stringified=${JSON.stringify(newValue)}`)
  if (value !== newValue) return fixNonStrings(newValue)
  return value
}
