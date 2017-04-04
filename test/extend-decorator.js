import test from 'ava'
import extend from './../dist/extend-decorator'

let target
let targetClone
let a
let b

test('@extend: nothing happens', t => {
  t.plan(1)
  extend(target)
  t.is(target, targetClone)
})

test('@extend(A): extend target prototype without overwrite', t => {
  t.plan(2)
  extend(a)(target)
  const instance = new target()
  t.is(instance.hi(), 0)
  t.is(instance.bye(), 2)
})

test('@extend(A, B): extend multiple', t => {
  t.plan(3)
  extend(a, b)(target)
  const instance = new target()
  t.is(instance.hi(), 0)
  t.is(instance.bye(), 2)
  t.is(instance.boo(), 3)
})

test('@extend(A, true): extend with overwrite', t => {
  t.plan(2)
  extend(a, true)(target)
  const instance = new target()
  t.is(instance.hi(), 1)
  t.is(instance.bye(), 2)
})

test('@extend(A, B, true): extend multiple with overwrite', t => {
  t.plan(3)
  extend(a, b, true)(target)
  const instance = new target()
  t.is(instance.hi(), 1)
  t.is(instance.bye(), 2)
  t.is(instance.boo(), 3)
})

test.beforeEach(() => {
  target = class Target { hi() { return 0 } }
  targetClone = Object.freeze(target)
  a = class A { hi() { return 1 } bye() { return 2 } }
  b = class B { boo() { return 3 } }
})
