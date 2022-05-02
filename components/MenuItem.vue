<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    item: Object,
  },
  computed: {
    style: function () {
      return ` background:  url(${this.item.image}) no-repeat top center; background-size: cover `;
    },
  },
});
</script>

<template>
  <div
    tabindex="0"
    aria-label="card 1"
    class="h-full w-full 
      p-6"
    :style="style"
  >
    <div class="absolute bg-stone-900 opacity-60 h-full w-full top-0 left-0" />
    <div class="relative">
      <div class="flex items-center pb-4 ">
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-4xl
                mb-4
                font-medium
                leading-5
                text-gray-800
                dark:text-white
              "
            >
              {{ item.name }}
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-lg
                leading-normal
                text-gray-500
                dark:text-gray-200
              "
            >
              {{ item.price }}
            </p>
          </div>
        </div>
      </div>
      <div class="px-2">
        <p
          tabindex="0"
          class="
            focus:outline-none
            text-sm
            leading-5
            py-4
            text-gray-600
            dark:text-gray-200
          "
        >
          A group of people interested in dogecoin, the currency and a bit of
          side for the meme and dof that we all know and love. These cases are
          perfectly simple and easy to distinguish.
        </p>
        <div tabindex="0" class="focus:outline-none flex">
          <div
            v-for="tag in item.tags"
            :key="tag"
            class="
              py-2
              px-4
              text-xs
              leading-3
              text-indigo-700
              rounded-full
              bg-indigo-100
            "
          >
            #{{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
