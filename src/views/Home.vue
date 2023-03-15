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

export default {
    components: {
        Card,
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    title: "Monday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/1/200/120",
                    hidden: false,
                },
                {
                    id: 2,
                    title: "Tuesday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/24/200/120",
                    hidden: false,
                },
                {
                    id: 3,
                    title: "Wednesday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/3/200/120",
                    hidden: false,
                },
                {
                    id: 4,
                    title: "Thursday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/100/200/120",
                    hidden: false,
                },
                {
                    id: 5,
                    title: "Friday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/15/200/120",
                    hidden: false,
                },
                {
                    id: 6,
                    title: "Saturday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/69/200/120",
                    hidden: false,
                },
                {
                    id: 7,
                    title: "Sunday",
                    description: "Lorem ipsum dolor sit amet. Et dolore omnis sit minima blanditiis aut vitae soluta.",
                    imgSource: "https://picsum.photos/id/32/200/120",
                    hidden: false,
                },
            ]
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
        }
    },
}
</script>

<style>

</style>