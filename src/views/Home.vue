<template>
    <section>
        <h1 class="display-5">Card Board</h1>
        <p class="lead">This section is the list of cards that can be manipulated (Edit, Hide and Delete).</p>
        <div class="d-flex flex-wrap gap-5 justify-content-start">
            <template v-for="card in cards" :key="card.id">
                <Card v-if="!card.hidden" :card="card" @hideCard="hideCard" @deleteCard="deleteCard"></Card>
            </template>
        </div>
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
            console.log(this.cards);
        },
    },
    mounted() {
        this.fetchAnime();
    },
}
</script>

<style>

</style>