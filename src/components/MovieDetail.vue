<template>
  <div class="mt-5">
    <b-row>
      <button class="btn btn-primary w-25" @click="goSearch">Search</button>
      <b-col>
        <h2>{{ detailMovie.data.Title }}</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" md="5" class="d-flex flex-column">
        <img :src="detailMovie.data.Poster" alt="image" class="h-100 w-50" />
        <h4>
          IMDB Rating :
          <span>{{ detailMovie.data.imdbRating }}</span>
        </h4>
        <h4>
          IMDB Votes :
          <span>{{ detailMovie.data.imdbVotes }}</span>
        </h4>
      </b-col>
      <b-col sm="12" md="7">
        <h4>
          Movie Year :
          <span>{{ detailMovie.data.Year }}</span>
        </h4>

        <h4>
          Movie Director :
          <span>{{ detailMovie.data.Director }}</span>
        </h4>
        <h4>
          Movie Writer :
          <span>{{ detailMovie.data.Writer }}</span>
        </h4>
        <h4>
          Movie Actors :
          <span>{{ detailMovie.data.Actors }}</span>
        </h4>

        <h4>Description :</h4>
        <h5>
          <p>{{ detailMovie.data.Plot }}</p>
        </h5>
        <h4>
          Country :
          <span>{{ detailMovie.data.Country }}</span>
        </h4>
        <h4>
          Awards :
          <span>{{ detailMovie.data.Awards }}</span>
        </h4>
        <b-form-input placeholder="Maximum : 100" class="w-100" v-model="myVote"></b-form-input>
        <textarea v-model="review" class="w-100"></textarea>
        <button class="btn btn-primary" @click="addReview">Add review and vote</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail', //http://www.omdbapi.com/?i=tt0075148&apikey=598beda5
  data() {
    return {
      detailMovie: null,
      review: '',
      myVote: null
    };
  },
  created: function() {
    this.$http
      .get(`http://www.omdbapi.com/?i=${this.$store.state.imdbID}&apikey=598beda5`)
      .then((res) => {
        // console.log(res);
        this.detailMovie = res;
      });
  },
  methods: {
    addReview() {
      if (this.$store.state.imdbID !== null) {
        const data = {
          id: this.$store.state.imdbID,
          title: this.detailMovie.data.Title,
          poster: this.detailMovie.data.Poster,
          review: this.review,
          vote: this.myVote
        };
        this.$store.commit('setMyReviewAndVote', data);
      } else {
        console.log('selam');

        alert('id null');
      }
    },
    goSearch() {
      this.$store.commit('deleteImdbID');
      this.detailMovie, (this.myVote = null);
      this.review = '';
      this.$router.push('/search');
    }
  }
};
</script>

<style></style>
