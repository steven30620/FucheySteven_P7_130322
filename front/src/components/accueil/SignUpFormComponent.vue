<template>
   <div id="placeholderSignup">
      <div class="welcom"><h1>Bienvenue !</h1></div>
      <div class="user-created"  v-if="userCreated">Utilisateur crée !</div>
      <div class="user-already-exist"  v-if="userAlreadyExist">L'utilisateur existe déjà!</div>
      <div class="signup-form">
         <form @submit.prevent="onSubmit">
            <div class="form-input">
               <label for="nom">Nom</label>
               <p v-if="lastnameError" class="error">Le nom est incorrect veuillez ne saisir que des lettres</p>
               <input type="text" name="nom" id="nom" v-model="lastname"/><br/>
            </div>

            <div class="form-input">
               <label for="prenom">Prénom</label>
               <p v-if="firstnameError" class="error">Le prenom est incorrect veuillez ne saisir que des lettres</p>
               <input type="text" name="prenom" id="prenom" v-model="firstname"/><br/>
            </div>

            <div class="form-input">
               <label for="email">Email</label>
               <p v-if="emailError" class="error">Format de l'email incorrect</p>
               <input type="email" name="e-mail" id="email" v-model="email"/><br/>
            </div>

            <div class="form-input">
               <label for="password">Mot de passe</label>
               <p v-if="passwordError" class="error">8 caractère minimum, dont 1 majuscule, 1 minuscule, 1 chiffre et un caractère special</p>
               <input type="password" name="mot de passe" id="password" v-model="password"/><br/>
            </div>

            <div class="form-input">
               <label for="confirm-password">Confirmez votre mot de passe</label>
               <p v-if="passwordError" class="error">Le mot de passe de confirmation doit être identique au mot de passe</p>
               <input type="password" name="mot de passe" id="confirm-password" v-model="confirmPassword"/>
            </div>
               <button id="signup-button" type="submit" v-if="!userAlreadyExist">S'inscrire</button>
         </form>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'SignUpFormComponent',
   data() {
      return {
         lastname: '',
         firstname: '',
         email: '',
         password: '',
         confirmPassword: '',
         lastnameError: false,
         firstnameError:false,
         emailError: false,
         passwordError: false,
         userCreated: false,
         userAlreadyExist: false,
      };
   },
   methods: {
      onSubmit: function () {
      
         if (!this.lastname.match('[a-zA-Z]*')) {
            this.lastnameError = true;
         }
          else{this.lastnameError = false;}

         if (!this.firstname.match('[a-zA-A]')) {
            this.firstnameError = true;
         }
         else{this.firstnameError = false;}

         if (!this.email.match('[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+')) {
            this.emailError = true;
         }
         else{this.emailError = false;}

         if (!this.password.match(`(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}`) || this.password !== this.confirmPassword) {
            this.passwordError = true;
         }
         else{this.passwordError = false;}

         if (!this.lastnameError && !this.firstnameError && !this.emailError && !this.passwordError) {
            this.createUser();
            
         }
      },
      createUser: async function () {
         try {
            await axios.post('http://localhost:3000/api/auth/signup', { lastname: this.lastname, firstname: this.firstname, email: this.email, password: this.password });
            if(this.userAlreadyExist !== true)
               setTimeout(function(){
                  this.userCreated = false}.bind(this),3000
               )
               this.userCreated = true;  
         } catch (error) {
            setTimeout(function(){
                  this.userAlreadyExist = false}.bind(this),3000
               )
               this.userAlreadyExist = true
            console.log(error);
         }
      }
   }
};

</script>

<style scoped lang="scss">

.welcom{
   height: 50px;
   padding-top: 5px;
   padding-bottom: 40px;
}

#placeholderSignup {
   margin-right: 40px;
   background-color: rgb(248, 214, 139);
   border: 2px solid #f3c839;
   border-top: none;
   border-bottom-right-radius: 15px;
   border-bottom-left-radius: 15px;
   width: 500px;


}

#signup {
   border: none;
   border-top-left-radius: 15px;

}

#signin {
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
   margin-top: 20px;
   margin-bottom: 40px;
   border-radius: 20px;
   margin-left: 100px;
   cursor: pointer;

   &:hover {
      background-color: #f7c2f9;
   }
}


input {
   border-radius: 5px;
   border: solid 0.5px;
   height: 20px;
   padding-left: 10px;;
   font-size: 15px;

   &#nom {
      width: 120px;
   }

   &#prenom {
      width: 120px;
   }

   &#email {
      width: 180px;
   }

   &#password {
      width: 200px;
   }

   &#confirm-password {
      width: 200px;
   }
}

form{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding-left: 20px;
}

.form-input{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
}
.error{
   padding-left: 10px;
   padding-right: 10px;
   height: 20px;
   display: flex;
   background: rgb(196, 42, 25);
   color: white;
   font-size: 12px;
   animation-duration: .3s;
   animation-name: clignoter;
   animation-iteration-count: 3;
   transition: none;
}



.user-created{
   display: flex;
   background: rgb(21, 170, 34);
   color: white;
   width: 250px;
   height: 40px;
   margin-left: 120px;
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


.user-already-exist{
   display: flex;
   background: rgb(196, 42, 25);
   color: white;
   width: 250px;
   height: 40px;
   margin-left: 120px;
   font-size: 20px;
   align-items: center;
   justify-content: center;

   animation-duration: .3s;
   animation-name: clignoter;
   animation-iteration-count: 3;
   transition: none;

}



</style>
