<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data: function () {
    return {
      menuItems: [
        {
          name: "Duck",
          price: "$13.99",
          description:
            "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
          tags: ["meat"],
          image: "https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-cuisine-chili-fish-head-2022-04-02-00-49-09-utc.jpeg"
        },
                {
          name: "Duck",
          price: "$13.99",
          description:
            "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
          tags: ["meat"],
          image: "https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-cuisine-chili-fish-head-2022-04-02-00-49-09-utc.jpeg"
        },
                {
          name: "Duck",
          price: "$13.99",
          description:
            "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
          tags: ["meat"],
          image: "https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-cuisine-chili-fish-head-2022-04-02-00-49-09-utc.jpeg"
        },
                {
          name: "Duck",
          price: "$13.99",
          description:
            "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
          tags: ["meat"],
          image: "https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-cuisine-chili-fish-head-2022-04-02-00-49-09-utc.jpeg"
        },
                {
          name: "Duck",
          price: "$13.99",
          description:
            "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
          tags: ["meat"],
          image: "https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-cuisine-chili-fish-head-2022-04-02-00-49-09-utc.jpeg"
        },
      ],
    };
  },
});
</script>

<template>
  <div class="bg-white py-5 rounded-xl mb-20 shadow-lg">
    <div
      aria-label="group of cards"
      tabindex="0"
      class="focus:outline-none py-8 w-full flex flex-row items-center justify-center px-4 flex-wrap"
    >
      <div
      class="
      relative
      focus:outline-none
      max-w-xs
      lg:mr-7 lg:mb-0
      mb-7
      bg-white
      overflow-hidden
      m-5
      menu-item
      transition ease-in-out bg-blue-500 duration-300"
        v-for="item of menuItems"
        :key="item.name"
      >
      <menu-item :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
    .menu-item:hover {
        transform: scale(1.05);
    }
</style>