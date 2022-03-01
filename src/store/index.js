import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async getIpAddress () {
      try {
        const data = await axios.get('')
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
