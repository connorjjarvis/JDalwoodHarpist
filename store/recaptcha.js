export const state = () => ({
    token: ''
  })
  
  export const getter = {
    getToken(state) {
      return state.token
    }
  }
  
  export const mutations = {
    setToken(state, token) {
      state.token = token;
    }
  }
