<template>
  <nav>
    <img
      src="../../assets/logo_groupomania/logoHeader.svg"
      alt="logo_groupomania"
    />
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  components: {},
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 5px;
  border-radius: 10px;
  border-block-color: #f72121;
  margin-bottom: 5px;
  height: 100px;
}

img {
  padding: 10px;
  height: 80px;
  width: 50%;
}

@media all and (max-width: 1250px) {
  img {
    position: relative;
    left: -40px;
    height: 80px;
    width: 300px;
  }
}
</style>
