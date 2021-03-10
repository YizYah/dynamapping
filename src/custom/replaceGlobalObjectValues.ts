const {regExObjectValueString} = require('magicalstrings').constants.Regex.regExObjectValueString

const regExObjectValue = new RegExp(regExObjectValueString, 'g')
const globalObjects = {
  SETTINGS: 'nsInfo',
  ANSWERS: 'answers',
  SESSION: 'session',
  CONFIG: 'config',
}

/*
  replaces any global objects.  Also set up to take answers so that you can use it
  with inquirer globally.  The answers object is optional.
 */
export function replaceGlobalObjectValues(
  value: any, session: any = {}, answers: any = {}
) {

  if (Object.keys(session).length === 0
    && Object.keys(answers).length === 0) {
    return value
  }

  if (!value) return value
  let newValue = ''
  try {
    newValue = value.replace(regExObjectValue, function (
      match: string,
      objectName: string,
      key: string,
    ) {
      if (objectName === globalObjects.ANSWERS) return answers[key]
      if (objectName === globalObjects.SESSION) return session[key]
      throw new Error(`trying to replace an unrecognized object type: '${objectName}'`)
    })

  } catch (error) {
    throw error
  }

  return newValue
}
