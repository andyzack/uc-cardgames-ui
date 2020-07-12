<template>
  <!-- LOGIN FORM //START -->
  <div
    class="bg-white mx-auto my-6 px-8 pt-6 pb-8 max-w-lg rounded overflow-hidden shadow-lg text-gray-600"
  >
    <form>
      <div class="mb-4">
        <HelloWorld class="my-12" msg="Welcome to UC Games Room App" />
        <p>
          We are excited to have you here and would like to know you a little
          more before you get started
        </p>
      </div>
      <div class="mb-4 text-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login with Facebook account
        </button>
      </div>
      <div class="mb-4 text-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login with Google account
        </button>
      </div>
      <div class="mb-0 border-t border-b border-blue-500 py-3">
        <p class="mb-2">
          We understand if you would rather stay anonymous, just let us know
          what would you like us to call you and we will let you in
        </p>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Your Display Name
        </label>
        <div class="flex items-center justify-between mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="displayname"
            type="text"
            placeholder="displayname"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline whitespace-no-wrap ml-2"
            type="button"
          >
            Sign In
          </button>
        </div>
      </div>
      <p class="py-3">
        By logging into our Game Rooms you agree to our <a href="#">Terms</a>,
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/dataPolicy.html"
          >Data Policy</a
        >
        and
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/cookiePolicy.html"
          >Cookie Policy</a
        >
      </p>
    </form>
  </div>
  <!-- LOGIN FORM //END  -->
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
