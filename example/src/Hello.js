import extend from 'extend-decorator'
import Hi from './Hi'
import Boo from './Boo'

@extend(Hi)
class Hello {
  constructor ($hello) {
    $hello.innerHTML = this.sayHi()
  }

  sayHi () {
    return 'hello'
  }
}

@extend(Hi, Boo, true)
class HelloOverwrite {
  constructor ($helloOverwrite) {
    $helloOverwrite.innerHTML = `${this.sayHi()} and ${this.sayBoo()}`
  }

  sayHi () {
    return 'hello'
  }
}

export { Hello, HelloOverwrite }
