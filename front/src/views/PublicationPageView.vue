<template>
    <div id="main-page-header">
        <div id="publication-placeholder">
            <PublicationComponent/>
            <PublicationComponent/>
            <PublicationComponent/>
        </div>
    </div>
</template>

<script>
import PublicationComponent from '../components/publication/PublicationComponent.vue'

export default {
    name : 'RegisterView',  
    components:{
        PublicationComponent

    }  

}
</script>

<style scopped>
 
 #main-page-header{
     
     display: flex;
     justify-content: center;
 }


 #publication-placeholder{
     margin-top: 50px;
     background-color: rgb(240, 153, 71);
     width: 1000px;
     height: 1000px;
     display: flex;
     align-items: center;
     flex-direction: column;
     border-radius: 10px;
 }
 
</style>