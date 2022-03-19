<template>
    <div id="main-page-header">
            <PublicationComponent/>
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
 
</style>