<template>
   <div id="placeholderSignup">
      <div class="welcom"><h1>Bienvenue !</h1></div>
      <div class="signin-form">
         <form @submit.prevent="onSubmit">
            <p v-if="userNotFound" class="warning">Email ou mot de passe incorrect</p>
            
               <label for="email">Email</label>
               <input type="email" name="e-mail" id="email" v-model="email"/>
            
           
               <label for="password">Mot de passe</label>
               <input type="password" name="mot de passe" id="password" v-model="password"/>
           
            <button id="signin-button" type="submit">Se connecter</button>
         </form>
      </div>
   </div>
</template>

<script>

import axios from 'axios';

export default {
   name: 'SignInFormComponent',
   data() {
      return {
         email: '',
         password: '',
         userNotFound: false
      };
   },
   methods: {
      onSubmit: async function () {
         if (this.email.match('[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+') && this.password.match(`(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}`)) {
            const { data } = await this.getToken();
            localStorage.setItem('jwt', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            await this.$router.push({ name: 'publicationPage' });
         }
      },
      getToken: async function () {
         try {
            return await axios.post('http://localhost:3000/api/auth/login', { email: this.email, password: this.password });
         } catch (error) {
            if (error) {
                setTimeout(function(){
                  this.userNotFound = false}.bind(this),3000
               )
               this.userNotFound = true;
            }
         }
      }
   }
};

</script>

<style scoped lang="scss">


.welcom{
   height: 50px;
   padding-top: 5px;
   padding-bottom: 20px;
}

#placeholderSignup {
   margin-right: 40px;
   background-color: rgb(248, 214, 139);
   border: 2px solid #f3c839;
   border-top: none;
   border-bottom-right-radius: 15px;
   border-bottom-left-radius: 15px;
   width: 500px;
   height: 500px;
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
   margin-top: 80px;
   border-radius: 20px;
   transition: all 0.5s;
   cursor: pointer;

   &:hover {
      background-color: #f7c2f9;
   }
}

form {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;

}

.warning{
   display: flex;
   background: red;
   color: white;
   width: 300px;
   height: 40px;
   font-size: 20px;
   align-items: center;
   justify-content: center;

   animation-duration: .3s;
   animation-name: clignoter;
   animation-iteration-count: 3;
   transition: none;

}

@keyframes clignoter {
   0%   { opacity:1; }
   40%   {opacity:0; }
   100% { opacity:1; }
}

input {
   border-radius: 5px;
   border: solid 0.5px;
   height: 25px;
   margin-top: 5px;
   padding-left: 10px;;
   font-size: 18px;

   &#email {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 180px;
   }

   &#password {
      margin-top: 20px;
      width: 200px;
   }

}


</style>
