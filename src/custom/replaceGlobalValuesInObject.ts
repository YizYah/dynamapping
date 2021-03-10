import {replaceGlobalObjectValues} from './replaceGlobalObjectValues'

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
    if (value === null) return value
    if ((typeof value) !== 'string') return value

    newObject[key] = replaceGlobalObjectValues(
      value, session, answers
    )
  })

  return newObject
}
