<template>
  <div class="d-flex flex-column mt-4 w-100">
    <h3>My Favorite Movies</h3>
    <router-link to="/search">
      <button class="btn btn-primary">Search</button>
    </router-link>
    <div class="mt-5 border">
      <b-row>
        <b-col class="d-flex justify-content-center">Movie Title</b-col>
        <b-col class="d-flex justify-content-center">Movie Year</b-col>
        <b-col class="d-flex justify-content-center">Poster</b-col>
        <b-col class="d-flex justify-content-center">Delete</b-col>
        <b-col class="d-flex justify-content-center">Details</b-col>
      </b-row>
    </div>
    <div class="mt-5 border">
      <b-row v-for="(item, index) in this.$store.state.favoriteMovies" :key="index" class="border">
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
          <b-button class="h-25" @click="deleteFav(index)">-</b-button>
        </b-col>
        <b-col col class="d-flex justify-content-center align-items-center border">
          <b-button class="h-25" @click="detail(item.imdbID)">Detail</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

// http://www.omdbapi.com/?i=tt0075148&apikey=598beda5

<script>
export default {
  methods: {
    deleteFav(index) {
      this.$store.commit('deleteFavoriteMovies', index);
    },
    detail(id) {
      this.$store.commit('setImdbID', id);
      this.$router.push('/detail');
    }
  }
};
</script>

<style></style>
