<template>
  <div class="fixed w-full h-full">
    <img
    class="topImage"
      src="https://ean-website-templates.s3.us-west-1.amazonaws.com/assorted-chinese-dishes-2021-09-01-22-38-12-utc.jpeg"
    />
    <img
    class="middleImage"
      src="https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-food-set-on-stone-table-2021-08-26-15-41-34-utc.jpeg"
    />
    <img
    class="bottomImage"
      src="https://ean-website-templates.s3.us-west-1.amazonaws.com/chinese-cuisine-chili-fish-head-2022-04-02-00-49-09-utc.jpeg"
    />
  </div>
</template>

<style scoped>
.topImage {
    height: 35%;
    width: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
}
.middleImage {
    height: 30%;
    width: 100%;
    position: absolute;
    bottom: 35%;
    object-fit: cover;
}
.bottomImage {
    height: 35%;
    width: 100%;
    position: absolute;
    bottom: 0;
    object-fit: cover;
}
</style>