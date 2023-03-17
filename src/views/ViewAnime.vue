<template>
  <section>
    <!-- hero page -->
    <div class="row d-flex justify-content-center justify-content-sm-around" v-if="details">
        <img class="col-12 col-md-6 col-lg-4 mb-3 me-2 mb-md-0 me-md-0 border-0 shadow p-0" style="max-height: 500px; max-width: 350px;" :src="details.image_url">
        <div class="col-12 col-md-6 col-lg-8 d-flex flex-column gap-2 float-end">
            <h2 class="h3 clr-secondary">{{details.title}}</h2>
            <div class="genre-list d-flex gap-2 fs-5">
                <span class="badge text-bg-secondary" v-for="genre in details.genres" :key="genre.mal_id">{{genre.name}}</span>
            </div>
            <p class="lead">{{details.synopsis}}</p>
            <div class="genre-list d-flex flex-wrap gap-2 fs-5">
                <span class="badge text-bg-success">Status: {{details.status}}</span>
                <span class="badge text-bg-secondary">Episodes: {{details.episodes || 'N/A'}}</span>
                <span class="badge text-bg-warning">Ratings: 8.95</span>
                <span class="badge text-bg-info">Duration: 24 mins</span>
                <span class="badge text-bg-danger">Type: TV</span>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    props: ['id'],
    data() {
        return {
            details: {},
        }
    },
    
    methods: {
        async fetchAnimeDetails() {
            await axios.get(`https://api.jikan.moe/v4/anime/${this.id}`).then((response)=>{
                this.details = this.transformAnimeData(response.data.data);
            }).catch((error)=>{
                alert("OOOPS!! Something went wrong!")
            });
        },
        transformAnimeData(data){
            return {
                id: data.mal_id,
                title: data.title,
                synopsis: data.synopsis,
                image_url: data.images.jpg.image_url,
                genres: data.genres,
                status: data.status,
                episodes: data.episodes,
                ratings: data.ratings,
                duration: data.duration,
                type: data.type,
            }
        }
    },
    mounted() {
        this.fetchAnimeDetails();
    }
}
</script>

<style scoped>
</style>