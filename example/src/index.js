import { Hello, HelloOverwrite } from './Hello'

const $hello = document.getElementById('hello-1')
const $helloOverwrite = document.getElementById('hello-2')

window.hello = new Hello($hello)
window.helloOverwrite = new HelloOverwrite($helloOverwrite)
