import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchRes: [],
    favoriteMovies: [],
    imdbID: null,
    myReviewAndVote: []
  },
  mutations: {
    setSearchRes(state, payload) {
      state.searchRes = payload;
    },
    setFavoriteMovies(state, payload) {
      state.favoriteMovies.unshift(payload);
    },
    deleteFavoriteMovies(state, payload) {
      state.favoriteMovies.splice(payload, 1);
    },
    setImdbID(state, payload) {
      state.imdbID = payload;
    },
    setMyReviewAndVote(state, payload) {
      state.myReviewAndVote.unshift(payload);
    },
    deleteImdbID(state) {
      state.imdbID = null;
    }
  }
});
