<template>
    <section>
        <h1 class="display-5">Home page</h1>
        <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consequatur dolore perspiciatis accusamus rerum, maxime rem illum tempora tenetur quo?</p>
    </section>
</template>

<script>
import Card from '@/components/Card.vue'
import axios from 'axios';
export default {
    components: {
        Card,
    },
    data() {
        return {
            cards: [],
        }
    },
    methods: {
        hideCard(id) {
            this.cards.forEach((card, index) => {
                if(card.id === id) {
                    this.cards[index].hidden = !this.cards[index].hidden;
                }
            });
        },
        deleteCard(id) {
            this.cards.forEach((card, index) => {
                if(card.id === id) {
                    this.cards.splice(index, 1);
                }
            })
        },
        async fetchAnime() {
            await axios.get("https://api.jikan.moe/v4/anime?limit=12").then((response)=>{
                this.cards = response.data.data;
            }).catch((error)=>{
                alert("OOOPS!! Something went wrong!")
            });
        },
    },
    mounted() {
        this.fetchAnime();
    },
}
</script>

<style>

</style>