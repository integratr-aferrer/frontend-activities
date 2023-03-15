<template>
  <div class="card" style="width: 16rem">
    <img :src="card.imgSource" class="card-img-top" alt="sample image">
    <div class="card-img-overlay">
        <i @click="isOpen = !isOpen" class="clr-primary fs-5 float-end fa-solid fa-ellipsis-vertical" role="button"></i>
        <div v-if="isOpen" class="list-group float-end me-2">
            <button type="button" class="list-group-item list-group-item-action">Edit</button>
            <button type="button" class="list-group-item list-group-item-action" @click="$emit('hideCard', card.id)">Hide</button>
            <button type="button" class="list-group-item list-group-item-action bg-danger text-white" @click="$emit('deleteCard', card.id)">Delete</button>
        </div>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{card.title}}</h5>
        <p class="card-text">{{card.description}}</p>
    </div>
  </div>
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
</style>