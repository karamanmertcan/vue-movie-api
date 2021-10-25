<template>
  <div>
    <div v-for="(item, index) in this.$store.state.myReviewAndVote" :key="index">
      <div>
        <b-row>
          <b-col cols="6">
            <h3>{{ item.title }}</h3>
            <img :src="item.poster" alt="" />
          </b-col>
          <b-col cols="6">
            <h3>{{ item.vote }}</h3>
            <h3>{{ item.review }}</h3>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
