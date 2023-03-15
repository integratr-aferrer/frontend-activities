<template>
  <section>
    <h3 class="display-5">Table #{{id}}</h3>
    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, neque. Minima eaque aperiam exercitationem eos maiores maxime sapiente ipsa consectetur.</p>
    <table class="table table-striped border">
      <thead>
        <tr class="custom-bg-secondary text-white">
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
          <th scope="col">Header 3</th>
          <th scope="col">Header 4</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 10" :key="index">
          <td>Row {{index}}</td>
          <td>Row {{index}}</td>
          <td>Row {{index}}</td>
          <td>Row {{index}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style>

</style>