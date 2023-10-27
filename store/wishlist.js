export const state = () => ({
  wishlist: {
    isLoading: true,
    data: [],
  },
})

export const actions = {
  async fetch({ commit }, userId = null) {
    try {
      commit('setLoading', true)
      const { status, data, total } = await this.$axios.$get(
        '/api/wishlists/getWishlists',
        {
          params: {
            userId,
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
  async addWishlist(
    { commit },
    query = {
      userId: null,
      book: {
        title: null,
        author: null,
        thumbnail: null,
        ratings: null,
      },
    }
  ) {
    try {
      const { userId, book } = query
      commit('setLoading', true)
      const { status, data } = await this.$axios.$post(
        'api/wishlists/addWishlist',
        { book },
        {
          params: {
            userId,
          },
        }
      )
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
  },
  setTotal(state, payload) {
    state.books.total = payload
  },
}
