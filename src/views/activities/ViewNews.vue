<template>
  <section v-if="news">
    <div class="d-flex justify-content-between mb-2">
      <router-link :to="{name: 'News'}" class=" fs-5 clr-primary text-uppercase text-decoration-none">
        <i class="fa-solid fa-arrow-left me-2"></i>
        <span>Back</span>
      </router-link>
      <router-link :to="{path: `/view-news/edit/${id}`}" class="text-end fs-5 clr-secondary text-uppercase text-decoration-none">
        <span>Edit</span>
        <i class="fa-solid fa-pen-to-square ms-2"></i>
      </router-link>
    </div>
    <h3 class="display-5 mb-4">{{news.title}}</h3>
    <div class="d-flex align-items-center gap-3 mb-3">
      <span class="text-muted">Author: {{news.author}}</span>
      <span class="text-muted">Date: {{news.publish_date}}</span>
      <span class="badge" :class="[news.is_active ? 'bg-success' : 'bg-danger']">Active</span>
      <span class="badge" :class="[news.is_featured ? 'bg-success' : 'bg-danger']">Featured</span>
    </div>
    <p class="lead position-relative align-items-start text-justify">
      <img v-if="news.news_url" class="news-image img-fluid float-start m-0 mb-2 mb-md-0 m-md-3 mt-md-0 ms-md-0" style="max-width: 560px;" :src="news.news_url">
      <span v-html="news.article"></span>
    </p>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    props: ['id'],
    data() {
      return {
        news: {},
      }
    },
    mounted() {
      this.fetchSingleNews();
    },
    methods: {
      async fetchSingleNews() {
        let userToken = JSON.parse(localStorage.getItem('currentUser')).token;
        await axios.get(`https://api.integratrgov.com/api/content_srvc/admin/news/${this.id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }).then((response) => {
          this.news = {
            title: response.data.data.attributes.title,
            author: response.data.data.attributes.author,
            publish_date: response.data.data.attributes.publish_date,
            news_url: response.data.data.attributes.news_url,
            article: response.data.data.attributes.article,
            is_active: response.data.data.attributes.is_active,
            is_featured: response.data.data.attributes.is_featured,

          }
        })
      }
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .news-image {
    width: 100%;
    position: static;
    float: none;
  }
}
</style>