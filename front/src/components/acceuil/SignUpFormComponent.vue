<template>
    <div id="placeholderSignup">
        <div id="headerSignup">
            <button id="signup">S'inscrire</button>
            <button id="signin" >Se connecter</button>
        </div>
        <div class="welcom"><h1>Bienvenue !</h1></div>     
    <div class="signup-form">
        <form >
            <label for="nom">Nom</label> <input type="text"  name="nom" id="nom" value=""/><br />
            <label for="prenom">Prénom</label> <input type="text"  name="prenom" id="prenom" value=""/><br />
            <label for="e-mail">Email</label> <input type="email"  name="e-mail" id="email" value=""/><br />
            <label for="password">Mot de passe</label> <input type="password"  name="mot de passe" id="password" value=""/><br />
            <label for="confirm-password">Confirmez votre mot de passe</label> <input type="password"  name="mot de passe" id="confirm-password" value=""/>
        </form>
            <button id="signup-button">S'inscrire</button>
            </div>
    </div>
</template>

<script>


export default {
    name:'SignUpFormComponent'
        
}

</script>

<style scoped lang="scss">

#placeholderSignup{
    margin-right: 40px ;
    background-color: rgb(248, 214, 139);
    border: 2px solid #f3c839;
    width: 500px;
    height: 500px;
    border-radius: 15px;
}

#signup {
    border: none;
    border-top-left-radius: 15px;
    background: linear-gradient(0deg, rgb(250, 215, 140) 0%, rgb(240, 172, 100) 25%);
}   

#signin{
    border: none;
    border-left: 2px solid black;
    border-top-right-radius: 15px;
}

button {
    position: relative;
    background-color: #f3942e;
    border: 1px solid #000000;
    color: #eeeeee;
    text-align: center;
    font-size: 18px;
    padding: 15px;
    width: 50%;
    transition: all 0.5s;
    cursor: pointer;
        &:hover {
        background-color: #f7c2f9;
    }
}

form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
}

input{
    border-radius: 5px;
    border: solid 0.5px;
    height: 20px;
    padding-left:  10px; ;
    font-size: 15px;

    &#nom{
    width: 120px;
    }
    &#prenom{
        width: 120px;
    }
    &#email{
        width: 180px;
    }
    &#password{
        width: 200px;
    }
    &#confirm-password{
        width: 200px;
    }
}

#signup-button{
    margin-top: 20px;
    border-radius: 20px;
}
    


</style>
