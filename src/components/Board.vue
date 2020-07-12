<template>
  <!-- GAME BOARD //START -->
  <div class="flex w-auto h-full justify-center items-center p-20">
    <div
      class="border-2 border-brown-800 bg-brown-500 shadow-xl p-4 rounded-full relative w-full h-full"
    >
      <div
        class="border-2 border-brown-800 bg-brown-500 shadow-inner rounded-full h-full"
      >
        <div
          class="uc-board-layer-outer bg-gradient-board-outer border-2 border-brown-800 max-w-full max-h-full h-full p-16 rounded-full"
        >
          <div
            class="uc-board-layer-inner bg-gradient-board-inner min-w-30 min-h-30 border-2 border-blue-400 p-4 rounded-full flex w-auto h-full justify-center items-center"
          >
            <button
              class="bg-gradient-button-outer border-1 border-maroon bg-redmoon p-2 rounded-full flex absolute"
            >
              <span
                class="bg-gradient-button-inner border-2 border-orange-600 bg-redmoon p-5 rounded-full inline-block"
              ></span>
            </button>
            <!-- TEAMS PLACE HOLDER //START -->
            <div
              class="flex flex-wrap justify-evenly align-middle text-blue-700"
            >
              <!-- TEAM A - PLAYER1 -->
              <div class="whitespace-no-wrap text-xs lg:text-base">
                <div class="uc-persona absolute -ml-8 top-0">
                  <div class="-mt-16">
                    <img
                      class="w-16 rounded-full border-4 border-green-500"
                      src="../assets/img/gravatar/persona-1.png"
                    />
                  </div>
                </div>
              </div>
              <!-- TEAM B - PLAYER1 -->
              <div class="whitespace-no-wrap text-xs lg:text-base">
                <div class="uc-persona absolute -mt-8 right-0">
                  <div class="-mr-16">
                    <img
                      class="w-16 rounded-full border-4 border-red-500"
                      src="../assets/img/gravatar/persona-3.png"
                    />
                  </div>
                </div>
              </div>
              <!-- TEAM A - PLAYER2 -->
              <div class="whitespace-no-wrap text-xs lg:text-base">
                <div class="uc-persona absolute -ml-8 bottom-0">
                  <div class="-mb-16">
                    <img
                      class="w-16"
                      src="../assets/img/gravatar/persona-2.png"
                    />
                  </div>
                </div>
              </div>
              <!-- TEAM B - PLAYER2 -->
              <div class="whitespace-no-wrap text-xs lg:text-base">
                <div class="uc-persona absolute -mt-8 left-0">
                  <div class="-ml-16">
                    <img class="w-16" src="../assets/img/gravatar/persona-4.png" />
                  </div>
                </div>
              </div>
            </div>
            <!-- TEAMS PLACE HOLDER //END -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- GAME BOARD //END -->
</template>
