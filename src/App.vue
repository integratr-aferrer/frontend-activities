<template>
  <div class="w-100 h-100">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
:root {
  --primary: #f3525A;
  --secondary: #152440;
}
body {
  width: 100%;
  height: 100vh;
  font-family: 'Barlow', sans-serif;
}

.clr-primary {
  color: var(--primary);
}

.clr-secondary {
  color: var(--secondary);
}

.custom-bg-primary {
  background-color: var(--primary);
}

.custom-bg-secondary {
  background-color: var(--secondary);
}
</style>
