<template>
  <header class="uc-header">
    <nav class="flex items-center justify-between flex-wrap p-3">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img
          class="fill-current w-16 mr-2 mt-4"
          src="assets/img/logo.svg"
          alt="UC Games"
        />
        <span class="font-medium text-base tracking-tight leading-none"
          >game <span class="block text-sm ">rooms</span></span
        >
      </div>
      <div class="flex items-center w-auto flex-grow">
        <!-- MENU -->
        <h1>{{ msg }}</h1>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-blue-300 border-blue-200 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
