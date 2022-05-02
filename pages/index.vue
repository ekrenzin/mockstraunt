<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {},
});
</script>


<template>
  <div class="overflow-hidden">
    <nav-bar />
    <home-background />
    <div class="relative pt-6 pb-16 sm:pb-24 index-wrapper px-10">
      <main class="mt-16 mx-auto max-w-7xl md:px-4 sm:px-1 sm:mt-24">
        <home-header />
        <restaurant-menu />
        <order-now />
      </main>
    </div>
  </div>
</template>
