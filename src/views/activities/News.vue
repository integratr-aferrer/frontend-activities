<template>
  <section>
    <h3 class="display-5">News</h3>
    <div class="d-flex justify-content-between">
        <p class="lead">Collection of news from api.</p>
         <router-link :to="{path: 'news/create'}" class="col-6 text-end fs-6 clr-primary text-uppercase text-decoration-none">
            <i class="fa-solid fa-plus me-3"></i>
            <span>Create News</span>
        </router-link>
    </div>
    <table v-if="tableData" class="table table-striped table-hover border">
      <thead>
        <tr class="custom-bg-secondary text-white">
          <th class="scope">Title</th>
          <th class="scope">Author</th>
          <th class="scope text-center">Active</th>
          <th class="scope text-center">Featured</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.id" @click="redirectUrl(data.id)" role="button">
            <td class="truncate">{{data.attributes.title}}</td>
            <td>{{data.attributes.author}}</td>
            <td class="text-center" :class="[data.attributes.is_active ? 'text-success' : 'text-danger']">
                <i class="fa-solid fa-circle"></i>
            </td>
            <td class="text-center" :class="[data.attributes.is_featured ? 'text-success' : 'text-danger']">
                <i class="fa-solid fa-circle"></i>
            </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tableData: [],
        }
    },
    mounted() {
        this.fetchNews();
    },
    methods: {
        async fetchNews() {
            let userToken = JSON.parse(localStorage.getItem('currentUser')).token;
            await axios.get("https://api.integratrgov.com/api/content_srvc/admin/news", {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }).then(({data}) => {
                this.tableData = data.data;
            })
        },
        redirectUrl(id) {
            this.$router.push(`/view-news/${id}`)
        }

    }
}
</script>

<style>

</style>