export const flattenObject = (ob:any):any => {
  const toReturn:any = {}

  for (const i in ob) {
    if (!Object.prototype.hasOwnProperty.call(ob, i)) continue

    if ((typeof ob[i]) === 'object') {
      const flatObject = flattenObject(ob[i])
      for (const x in flatObject) {
        if (!Object.prototype.hasOwnProperty.call(flatObject, x)) continue

        toReturn[i + '.' + x] = flatObject[x]
      }
    } else {
      toReturn[i] = ob[i]
    }
  }
  return toReturn
}

export const clearObject = (data:any):any => {
  const newObject:any = {}

  for (const [key, value] of Object.entries(data)) {
    switch (typeof value) {
      case 'object':
        newObject[key] = clearObject(value)
        break
      case 'number':
        newObject[key] = 0
        break

      default:
        newObject[key] = '-'
        break
    }
  }

  return newObject
}