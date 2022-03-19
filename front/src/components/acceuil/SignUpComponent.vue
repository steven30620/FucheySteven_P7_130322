<template>
    <div class="body">
        <div id="back">
            <div class="illustration"><img src="../../assets/logo_groupomania/icon.svg"></div>
            <div id="placeholderComponent">
                    <SignUpFormComponent/>   
            </div>
        </div>
    </div>


</template>

<script>
import SignUpFormComponent from './SignUpFormComponent.vue'

export default {
    name: 'SignUpComponent',
    components:{
        SignUpFormComponent
    }
}

</script>

<style lang="scss" scoped>

#back {
    margin-top: 70px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    height: 700px;
    background-image: url("../../assets/illustration/back.png") ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
        
}

img {
    height: 600px;
    padding-left: 20px;
    object-fit: cover;
}


#headerSignup{
    display: flex;
}

.welcom{
    display: flex;
    font-size: 15px;
    justify-content:center;

}


</style>
