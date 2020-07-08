<template>
  <div class="home text-center text-primary-color">
    <img alt="Vue logo" src="../assets/logo.svg" class="ml-auto mr-auto" />
    <HelloWorld class="my-12" msg="Welcome to UC Games Room App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
