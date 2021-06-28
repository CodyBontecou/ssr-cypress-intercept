<template>
  <div class="container">
    <div id="status">{{ data.status }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    }
  },
  async mounted() {
    const response = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    this.data = response
  },
}
</script>
