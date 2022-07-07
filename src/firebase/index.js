import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {

    }
  })
}
