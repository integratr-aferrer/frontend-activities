<template>
    <div class="shadow-sm w-100 h-auto">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand">LOGO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav" v-for="(link, index) in navbarLinks" :key="index">
                        <li class="nav-item">
                            <router-link :to="{ name: link.pathName }" class="nav-link">{{ link.linkName }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarLinks: [
                {
                    linkName: 'Home',
                    pathName: 'Home',
                    iconClass: 'fas-fb'
                },
                {
                    linkName: 'About',
                    pathName: 'Home',
                    iconClass: 'fas-fb'
                },
                {
                    linkName: 'Contact',
                    pathName: 'Home',
                    iconClass: 'fas-fb'
                },
            ]
        }
    },

}
</script>

<style scoped>

</style>