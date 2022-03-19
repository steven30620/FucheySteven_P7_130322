<template>
  <nav>
      <img src="../../assets/logo_groupomania/logoHeader.svg">
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
  border-bottom: solid 5px ;
  border-radius: 10px;
  border-block-color: #F78A21;
  margin-bottom: 5px;
}

img {
  padding: 10px;
  height: 60px;
  width: 50%;
}

#userHub {
  position: absolute;
  right: 18px;
  top: 25px;

}

</style>
