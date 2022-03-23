<template>
   <div id="publication-body-text">
      <textarea id="publication" name="publication" cols="87" placeholder="Votre publication ici !" maxlength="280"></textarea>
   </div>
</template>


<script>
export default {
   name: 'EditBodyPublicationComponent'
};
</script>

<style scoped lang="scss">
#publication {
   overflow: hidden;
   resize: none;
   margin-left: 10px;
   display: flex;
   border: none;
   justify-content: flex-start;
   background: rgba(226, 213, 184, 0.446);
   margin-top: 10px;
   margin-bottom: 20px;
   font-size: 20px;
   width: 95%;
   height: 120px;
}
</style>
