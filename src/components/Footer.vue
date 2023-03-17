<template>
  <footer class="custom-bg-secondary text-white container-fluid px-4 px-sm-5 py-5">
    <div class="row"> 
        <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <h3 class="mb-3">Quick Links</h3>
            <div class="d-flex flex-column gap-2">
                <ul class="navbar-nav flex-column">
                    <template v-for="link in footerLinks" :key="link.id">
                        <li class="nav-item align-self-start">
                            <a href="#" class="nav-link">
                                <i class="clr-primary fa fa-arrow-right me-2"></i>
                                <span>
                                    {{link.linkName}}
                                </span>
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <h3 class="mb-3">Get In Touch</h3>
            <div class="d-flex flex-column gap-2">
                <div>
                    <i class="clr-primary me-2 fa fa-location-dot"></i>
                    <span>123 Street., New York, US</span>
                </div>
                <div>
                    <i class="clr-primary me-2 fa fa-envelope-open"></i>
                    <span>Info@example.com</span>
                </div>
                <div>
                    <i class="clr-primary me-2 fa fa-phone"></i>
                    <span>+012 345 67890</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 mb-4 mb-md-0">
            <h3 class="mb-3">Follow Us</h3>
            <div class="d-flex gap-2">
                <a><i class="rounded-5 custom-bg-primary p-2 fa-brands fa-twitter"></i></a>
                <a><i class="rounded-5 custom-bg-primary p-2 fa-brands fa-facebook"></i></a>
                <a><i class="rounded-5 custom-bg-primary p-2 fa-brands fa-linkedin"></i></a>
                <a><i class="rounded-5 custom-bg-primary p-2 fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            footerLinks: [
                {
                    id: 1,
                    linkName: "Item 1",
                    pathName: 'activities'
                },
                {
                    id: 2,
                    linkName: "Item 2",
                    pathName: 'activities',
                },
                {
                    id: 3,
                    linkName: "Item 3",
                    pathName: 'activities',
                },
            ]
        }
    },
}
</script>

<style scoped>

</style>