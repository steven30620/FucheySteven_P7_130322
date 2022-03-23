<template>

   <div id="publication-area">
      <div id="publication-header">
         nome user
         <!-- <HeaderPublicationComponent/> -->
      </div>
      <div id="publication-body">
         zone de text
         <!-- <EditBodyPublicationComponent/> -->
         <!-- component de la section texte ou photo -->
      </div>
      <div id="publication-footer">
         <div id="publication-like">
            <button>like</button>
         </div>
         <div id="publication-comment">
            test
         </div>
         <!-- <FooterPublicationComponent/> -->
         <!-- <CommentPublicationComponent/> -->
      </div>
   </div>

</template>


<script>
// import EditBodyPublicationComponent from '@/components/publication/EditBodyPublicationComponent';
// import HeaderPublicationComponent from '@/components/publication/HeaderPublicationComponent';
// import FooterPublicationComponent from '@/components/publication/FooterPublicationComponent';
// import CommentPublicationComponent from '@/components/publication/CommentPublicationComponent';

export default {
   name: 'PublicationComponent',
   components: { 
      // CommentPublicationComponent, FooterPublicationComponent, HeaderPublicationComponent, EditBodyPublicationComponent
       }
};
</script>

<style lang="scss" scoped>


#publication{
&-area {
   margin-top: 20px;
   margin-bottom: 50px;
   width: 700px;
   height: 250px;
   border: 2px solid black;
   border-radius: 10px;
   background-color: #d8f3f2;
}
&-header {
   display: flex;
   align-items: center;
   border-bottom: 2px solid black;
   height: 50px;
   }
&-body {
   width: 100%;
   height: 100px;
}
&-footer {
   border-top: 2px solid black;
   height: 20px;
}
}

</style>
