<template>
    <header class="sticky-top bg-white">
        <nav class="navbar navbar-expand-sm shadow-sm">
            <div class="container-fluid px-4 px-sm-5 d-flex">
                <router-link to="/" class="navbar-brand d-flex align-items-center fw-bold clr-primary">
                    <i class="brand-icon h2 me-2 fa-solid fa-dragon"></i>
                    <span class="brand-name h1 fw-bold">A.FERRER</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse justify-content-end text-uppercase" id="navbarNav">
                    <ul class="navbar-nav">
                        <template v-for="(link, index) in navbarLinks" :key="index">
                            <li v-if="!link.subLinks" class="nav-item">
                                <router-link :to="{ name: link.pathName }" class="nav-link">{{ link.linkName }}</router-link>
                            </li>
                            <li v-else class="nav-item dropdown">
                                <a :class="{active:isActive}" class="nav-link dropdown-toggle" data-bs-auto-close="outside" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ link.linkName }}</a>
                                <ul class="dropdown-menu">
                                <template v-for="sublink in link.subLinks" :key="sublink.id">
                                        <li><router-link :to="{path: `/activities/${sublink.id}`}" class="dropdown-item">{{sublink.linkName}}</router-link></li>
                                </template>
                                </ul>
                            </li>
                        </template>
                        <li class="nav-item">
                            <a role="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Logout
                            </a>
                        </li>
                    </ul>
                    
                    <!-- Teleport element to outside the the vue app -->
                    <teleport to="body">
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you sure?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="logoutUser()">Yes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </teleport>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navbarLinks: [
                {
                    linkName: 'Home',
                    pathName: 'Home',
                },
                {
                    linkName: 'About',
                    pathName: 'About',
                },
                {
                    linkName: 'Activities',
                    pathName: 'Activities',
                    subLinks: [
                        {
                            id: 1,
                            linkName: "Item 1",
                        },
                        {
                            id: 2,
                            linkName: "Item 2",
                        },
                        {
                            id: 3,
                            linkName: "Item 3",
                        },
                    ]
                },
            ],
        }
    },
    computed: {
        isActive() {
            return this.$route.name === 'Activities';
        }
    },
    methods: {
        logoutUser() {
            localStorage.removeItem("currentUser");
            this.$router.push({name: 'Login'});
        }
    }
}
</script>

<style scoped>
.router-link-active {
    color: var(--primary);
}

.active {
    color: var(--primary) !important;
}
</style>