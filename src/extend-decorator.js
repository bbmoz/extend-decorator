function extend (...things) {
  let objs = things
  let isOverwrite = false
  const lastIndex = things.length - 1

  if (typeof things[lastIndex] === 'boolean') {
    objs = things.slice(0, lastIndex)
    isOverwrite = things[lastIndex]
  }

  return function (target) {
    objs.forEach(obj => {
      Object.getOwnPropertyNames(obj.prototype)
        .filter(name => name !== 'constructor')
        .forEach(name => {
          if (isOverwrite === true || !(name in target.prototype)) {
            Object.assign(target.prototype, { [name]: obj.prototype[name] })
          }
        })
    })
  }
}

module.exports = extend
