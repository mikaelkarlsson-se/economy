import api from './api'

export default {
  testFetch () {
    return api().get('test')
  }
}