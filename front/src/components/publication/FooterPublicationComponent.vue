<template>
   <div id="publication-like-and-select">
      <button id="like">J'aime ! <i class="fa-solid fa-thumbs-up"></i></button>
      
   </div>
</template>

<script>
export default {
   name: 'FooterPublicationComponent'
};
</script>

<style scoped lang="scss">
#publication-like-and-select {
   display: flex;
   justify-content: space-between;
}

button {
   margin-top: 10px;
   margin-bottom: 10px;
   border: none;
   width: 50px;
   height: 30px;
}

#like {
   margin-left: 10px;
   width: 80px;
   border-radius: 10px;
   border: 1px solid blue;
   background-color: rgb(239, 248, 247);
   cursor: pointer;

   .fa-thumbs-up::before {
      color: blue;
   }
}


</style>
