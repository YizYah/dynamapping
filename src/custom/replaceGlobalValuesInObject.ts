import {replaceGlobalObjectValues} from './replaceGlobalObjectValues'

function fixBooleans(str: string) {
  // assumes that a 'true' or 'false' is meant to be a boolean.
  if (str === 'true') return true
  if (str === 'false') return false
  return str
}

// takes in a raw object (of depth 1) and replaces any session variables there.
// Not currently recursive.
export function replaceGlobalValuesInObject(
  rawObject: any, session: any, answers: any = {}
) {
  console.log(`\n\nin replaceGlobalValuesInObject in dynamo...`)
  console.log(`in replaceGlobalValuesInObject in dynomapping.  rawObject=${JSON.stringify(rawObject)}. session=${JSON.stringify(session)}. `)
  const keys = Object.keys(rawObject)
  const newObject = {...rawObject}

  keys.map((key: string) => {
    const value = rawObject[key]
    if ((typeof value) !== 'string') return

    newObject[key] = replaceGlobalObjectValues(
      value, session, answers
    )
    if (value !== newObject[key]) newObject[key] = fixBooleans(newObject[key])
  })

  return newObject
}
