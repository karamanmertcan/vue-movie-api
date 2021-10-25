<template>
  <div class="d-flex flex-column mt-4 w-100">
    <div class="d-flex">
      <b-form-input
        v-model="searchMovieTitle"
        placeholder="Enter your name"
        class="w-100"
      ></b-form-input>
      <b-button variant="primary" @click="getMovieById()">Search By Title</b-button>
    </div>
    <router-link to="/favorites">
      <button class="btn btn-primary">Go to Favorites</button>
    </router-link>
    <router-link to="/review">
      <button class="btn btn-primary">Go to Reviews</button>
    </router-link>

    <div class="mt-5 border">
      <b-row>
        <b-col class="d-flex justify-content-center">Movie Title</b-col>
        <b-col class="d-flex justify-content-center">Movie Year</b-col>
        <b-col class="d-flex justify-content-center">Poster</b-col>
        <b-col class="d-flex justify-content-center">Fav</b-col>
      </b-row>
    </div>
    <div class="mt-5 border">
      <b-row
        v-for="(item, index) in this.$store.state.searchRes.Search"
        :key="index"
        class="border"
      >
        <b-col col class="d-flex justify-content-center align-items-center border">{{
          item.Title
        }}</b-col>
        <b-col col class="d-flex justify-content-center  align-items-center border">{{
          item.Year
        }}</b-col>
        <b-col col class="d-flex justify-content-center  align-items-center border">
          <img :src="item.Poster" alt="image" />
        </b-col>
        <b-col col class="d-flex justify-content-center align-items-center border">
          <b-button class="h-25" @click="setFavorite(item)">+</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchByTitle',
  data() {
    return {
      searchMovieTitle: ''
    };
  },
  methods: {
    getMovieById() {
      this.$http
        .get(`http://www.omdbapi.com/?s=${this.searchMovieTitle}&apikey=598beda5`)
        .then((res) => {
          console.log(res);
          this.$store.commit('setSearchRes', res.data);
        });
    },
    setFavorite(item) {
      console.log(item);
      this.$store.commit('setFavoriteMovies', item);
    },
    routeChange() {
      this.$router.push({ name: 'favorite' });
    }
  }
};
</script>

<style></style>
