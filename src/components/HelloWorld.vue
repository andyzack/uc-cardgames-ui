<template>
  <h1 class="text-blue-700 text-2xl text-center font-bold mb-2">
    {{ msg }}
  </h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
