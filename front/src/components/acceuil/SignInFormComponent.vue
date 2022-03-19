<template>
 <div id="placeholderSignup">
                <div id="headerSignup">
                    <button id="signup">S'inscrire</button>
                    <button id="signin">Se connecter</button>
                </div>
                <div class="welcom"><h1>Bienvenue !</h1></div>      
<div class="signin-form">
    <form >
        <label for="e-mail">Email</label> <input type="email"  name="e-mail" id="email" value=""/><br />
        <label for="password" placeholder="Mot de passe">Mot de passe</label> <input type="password."  name="mot de passe" id="password" value=""/><br />
    </form>
        <button id="signin-button">Se connecter</button>
        </div>
        </div>
</template>

<script>


export default {
    name:'SignInFormComponent'
        
}

</script>

<style scoped lang="scss">

#placeholderSignup{
    margin-right: 40px ;
    background-color: rgb(248, 214, 139);
    border: 4px double #cccccc;
    width: 500px;
    height: 500px;
    border-radius: 20px;
}

#signin{
    border: none;
    border-top-right-radius: 15px;
    background: linear-gradient(0deg, rgb(250, 215, 140) 0%, rgb(240, 172, 100) 25%);
}

#signup {
    border-top-left-radius: 15px;
    border: none;
    border-right:2px solid black ;
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
    align-items: center;
    margin-top: 20px;
    
}

input{
    border-radius: 5px;
    border: solid 0.5px;
    height: 25px;
    margin-top: 5px;
    padding-left: 10px; ;
    font-size: 18px;

    &#email{
        width: 180px;
    }
    &#password{
        width: 200px;
    }
   
}

#signin-button{
    margin-top: 80px;
    border-radius: 20px;
}
    


</style>
