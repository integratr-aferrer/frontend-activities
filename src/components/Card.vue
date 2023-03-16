<template>
  <router-link :to="{path: `view-anime/${card.mal_id}`}" class="nav-link card shadow-sm border-0 text-decoration-none clr-secondary" style="width: 16rem">
    <div class="card-img-top" :style="{'background-image': `url(${card.images.jpg.image_url})`}"></div>
    <div class="card-body">
        <p class="h5 card-title h-25 mb-3">{{card.title}}</p>
        <p class="card-text">{{card.synopsis}} {{card}}</p>
    </div>
    <div class="card-img-overlay">
        <span class="badge bg-white clr-primary" >EP: {{card.episodes?card.episodes:'N/A'}}</span>
        <i @click="isOpen = !isOpen" class="text-white fs-5 float-end fa-solid fa-ellipsis-vertical" role="button"></i>
        <div v-if="isOpen" class="list-group float-end me-2">
            <button type="button" class="list-group-item list-group-item-action">Edit</button>
            <button type="button" class="list-group-item list-group-item-action" @click="$emit('hideCard', card.id)">Hide</button>
            <button type="button" class="list-group-item list-group-item-action bg-danger text-white" @click="$emit('deleteCard', card.id)">Delete</button>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
    props: ["card"],
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

<style scoped>
.card-text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;

}
</style>