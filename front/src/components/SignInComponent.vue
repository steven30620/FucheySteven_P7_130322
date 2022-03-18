<template>
    <div class="demo">
        <div id="back">
            <div id="placeholderSignin">
                <button>S'inscrire</button>
                <button>Se connecter</button>
            </div>
        </div>
    </div>

</template>

<script>


export default {
  name: 'SignInComponent',

}

</script>

<style scoped>

    #back {
        display: flex;
        align-items: center;
        background-color: aqua;
        height: 800px;
        width: 100%;
    }

    #placeholderSignin{
        background-color: black;
    }


</style>
