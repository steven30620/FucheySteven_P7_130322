<template>
  <nav>
      <img src="../assets/logo_groupomania/logoHeader.svg">
      <div id="userHub">
      </div>
  </nav>


</template>

<script>


export default {
  name: 'HeaderComponent',
  components:{
    
  }

}

</script>

<style scoped>


nav {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 2px ;
  border-block-color: #F78A21;
}

img {
  padding: 10px;
  height: 50px;
  width: 50%;
}

#userHub {
  position: absolute;
  right: 50px;

}

</style>
