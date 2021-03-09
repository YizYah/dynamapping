import {replaceGlobalObjectValues} from './replaceGlobalObjectValues'

function fixNonStrings(str: string) {
  // assumes that a 'true' or 'false' is meant to be a boolean.
  if (str === 'true') return true
  if (str === 'false') return false

  const numberVersion = Number(str)
  if (isNaN(numberVersion)) return str
  return numberVersion
}

// takes in a raw object (of depth 1) and replaces any session variables there.
// Not currently recursive.
export function replaceGlobalValuesInObject(
  rawObject: any, session: any = {}, answers: any = {}
) {

  if (Object.keys(session).length === 0
    && Object.keys(answers).length === 0) {
    return rawObject
  }

  const keys = Object.keys(rawObject)
  const newObject = {...rawObject}

  keys.map((key: string) => {
    const value = rawObject[key]
    if ((typeof value) !== 'string') return

    newObject[key] = replaceGlobalObjectValues(
      value, session, answers
    )
    if (value !== newObject[key]) newObject[key] = fixNonStrings(newObject[key])
  })

  return newObject
}
