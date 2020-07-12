<template>
  <!-- GAME BOARD //START -->
  <div class="flex w-auto h-full justify-center items-center p-20">
    <div class="shadow-xl p-4 rounded-full relative w-full h-full">
      <div class="shadow-inner rounded-full h-full">
        <div
          class="uc-board-layer-outer bg-gradient-board-outer max-w-full max-h-full h-full p-16 rounded-full"
        >
          <div class="flex flex-wrap h-full items-center">
            <div class="w-1/2 text-gray-700 text-center">
              <button
                class="min-w-20 bg-orange-500 hover:bg-orange-400 text-black text-center font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-orange-500 rounded"
              >
                <img
                  class="w-16 ml-auto mr-auto"
                  src="../assets/img/icons/i-quick-play.png"
                />
                Quick Play
              </button>
            </div>
            <div class="w-1/2 text-gray-700 text-center">
              <button
                class="min-w-20 bg-orange-500 hover:bg-orange-400 text-black text-center font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-orange-500 rounded"
              >
                <img
                  class="w-16 ml-auto mr-auto"
                  src="../assets/img/icons/i-join-table.png"
                />
                Join Table
              </button>
            </div>
            <div class="w-1/2 text-gray-700 text-center">
              <button
                class="min-w-20 bg-orange-500 hover:bg-orange-400 text-black text-center font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-orange-500 rounded"
              >
                <img
                  class="w-16 ml-auto mr-auto"
                  src="../assets/img/icons/i-create-table.png"
                />
                Create Table
              </button>
            </div>
            <div class="w-1/2 text-gray-700 text-center">
              <button
                class="min-w-20 bg-orange-500 hover:bg-orange-400 text-black text-center font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-orange-500 rounded"
              >
                <img
                  class="w-16 ml-auto mr-auto"
                  src="../assets/img/icons/i-vs-computer.png"
                />
                Vs Computer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- GAME BOARD //END -->
</template>

<script>
// @ is an alias to /src
// import Button from "@/components/ActionButton.vue";

// export default {
//   name: "ActionButton",
//   components: {
//     Button
//   }
// };
</script>