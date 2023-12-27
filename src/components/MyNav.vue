<template>
  <div class="comp">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{
          route.meta.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
</script>
<style scoped lang="scss">
ul {
  display: flex;
  margin: 0;
  justify-content: center;
  gap: 30px;
  background: rgb(112, 63, 145);
  padding: 10px 0;
  list-style: none;
  a {
    color: white;
    font-size: 20px;
    text-decoration: none;
    &.router-link-active {
      text-decoration: underline;
    }
  }
}
</style>
