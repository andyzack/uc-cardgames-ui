<template>
  <button
    class="min-w-20 bg-blue-500 hover:bg-blue-400 text-white text-center font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <img class="w-16 ml-auto mr-auto" :src=src />
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: String,
    src: String
  }
}
</script>