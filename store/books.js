export const state = () => ({
  books: {
    isLoading: true,
    data: [],
  },
})

export const actions = {
  async fetch({ commit }, query = null) {
    try {
      commit('setLoading', true)
      const { status, data, total } = await this.$axios.$get(
        '/api/books/search',
        {
          params: {
            query,
          },
        }
      )
      commit('setTotal', total)
      commit('setData', { data, status })
    } catch (error) {
      console.log(error)
    }

    commit('setLoading', false)
  },
  async search({ commit }, query = null) {
    try {
      commit('setLoading', true)
      const { status, data, total } = await this.$axios.$get(
        '/api/books/search',
        {
          params: {
            query,
          },
        }
      )
      commit('setTotal', total)
      commit('setData', { data, status })
    } catch (error) {
      console.log(error)
    }

    commit('setLoading', false)
  },
  async searchByCategory(
    { commit },
    query = {
      category: null,
      query: null,
    }
  ) {
    try {
      commit('setLoading', true)
      const { status, data, total } = await this.$axios.$get(
        '/api/books/subject',
        {
          params: {
            ...query,
          },
        }
      )
      commit('setTotal', total)
      commit('setData', { data, status })
    } catch (error) {
      console.log(error)
    }

    commit('setLoading', false)
  },
}

export const mutations = {
  setLoading(state, payload) {
    state.books.isLoading = payload
  },
  setData(state, payload) {
    state.books.data = payload.data
  },
  unsetData(state) {
    state.books.data = []
    state.books.total = 0
  },
  setTotal(state, payload) {
    state.books.total = payload
  },
}
