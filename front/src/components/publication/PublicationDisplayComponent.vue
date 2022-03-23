<template>

   <div id="publication-area">
      <div id="publication-header">
         <HeaderPublicationComponent/>
      </div>
      <div id="publication-body">
         <EditBodyPublicationComponent/>
         <!-- component de la section texte ou photo -->
      </div>
      <div id="publication-footer">
         <FooterPublicationComponent/>
         <CommentPublicationComponent/>
      </div>
   </div>

</template>


<script>
import EditBodyPublicationComponent from '@/components/publication/EditBodyPublicationComponent';
import HeaderPublicationComponent from '@/components/publication/HeaderPublicationComponent';
import FooterPublicationComponent from '@/components/publication/FooterPublicationComponent';
import CommentPublicationComponent from '@/components/publication/CommentPublicationComponent';

export default {
   name: 'PublicationComponent',
   components: { CommentPublicationComponent, FooterPublicationComponent, HeaderPublicationComponent, EditBodyPublicationComponent }
};
</script>

<style lang="scss" scoped>

#publication-area {
   margin-top: 50px;
   margin-bottom: 50px;
   width: 700px;
   height: 250px;
   border: 2px solid black;
   border-radius: 10px;
   background-color: #d8f3f2;
}

#publication-header {
   display: flex;
   align-items: center;
   border-bottom: 2px solid black;
   height: 50px;
}

#publication-body {
   width: 100%;
}


#publication-footer {
   border-top: 2px solid black;
}


</style>
