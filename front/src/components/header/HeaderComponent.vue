<template>
   <nav>
      <img src="../../assets/logo_groupomania/logoHeader.svg">
   </nav>
</template>

<script>


export default {
   name: 'HeaderComponent',
   components: {
      
   },
   
};

</script>

<style scoped>


nav {
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: solid 5px;
   border-radius: 10px;
   border-block-color: #F78A21;
   margin-bottom: 5px;
   height: 100px;
}

img {
   padding: 10px;
   height: 80px;
   width: 50%;
}



</style>
