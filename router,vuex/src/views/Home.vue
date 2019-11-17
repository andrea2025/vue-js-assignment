<template>
  <div class="home">
 <p v-for="n in 12" :key="n"
 class="color"
 :style="{ backgroundColor: getColor(n) }">
hello
</p>
 <p>This is the home page</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  props: {
 number: {
 type: Number,
 required: true
 }
 },
 methods: {
 getColor(n) {
 return `hsl(${(n - 1) * 30}, 100%, 75%)`;
 }
 }
}
</script>
<style scoped>
 .number {
 font-weight: bold;
 }
</style>