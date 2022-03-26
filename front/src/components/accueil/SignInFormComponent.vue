<template>
  <div id="placeholderSignup">
    <div class="welcom"><h1>Bienvenue !</h1></div>
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <p v-if="userNotFound" class="warning">
          Email ou mot de passe incorrect
        </p>

        <label for="email">Email</label>
        <input type="email" name="e-mail" id="email" v-model="email" />

        <label for="password">Mot de passe</label>
        <input
          type="password"
          name="mot de passe"
          id="password"
          v-model="password"
        />

        <button id="signin-button" type="submit">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignInFormComponent",
  data() {
    return {
      email: "",
      password: "",
      userNotFound: false,
      isAdmin: false,
    };
  },
  methods: {
    onSubmit: async function () {
      // on vérifie les donnée des formualaire pour ne pas faire de requete inutile,
      if (
        this.email.match("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+") &&
        this.password.match(
          `(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}`
        )
      ) {
        // on récupère les données du token et on les place dans le local storage,
        const { data } = await this.getToken();
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        //Le routeur guard detecte le token et nous envoie sur la page de publication
        await this.$router.push({ name: "publicationPage" });
      }
    },
    getToken: async function () {
      try {
        //on envoie au back la requête pour se connecter avec les information contenue dans les champs
        return await axios.post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password,
          isAdmin: this.isAdmin,
        });
      } catch (error) {
        if (error) {
          setTimeout(
            function () {
              this.userNotFound = false;
            }.bind(this),
            3000
          );
          this.userNotFound = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.welcom {
  height: 50px;
  padding-top: 5px;
  padding-bottom: 20px;
}

#placeholderSignup {
  color: white;
  margin-right: 40px;
  background-color: rgb(7, 31, 128);
  border: 2px solid #f33939;
  border-top: none;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 500px;
  height: 500px;
}

button {
  position: relative;
  background-color: #f32e2e;
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

.warning {
  display: flex;
  background: red;
  color: white;
  width: 300px;
  height: 40px;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  animation-duration: 0.3s;
  animation-name: clignoter;
  animation-iteration-count: 3;
  transition: none;
}

@keyframes clignoter {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

input {
  border-radius: 5px;
  border: solid 0.5px;
  height: 25px;
  margin-top: 5px;
  padding-left: 10px;
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

@media all and (max-width: 1250px) {
  #placeholderSignup {
    margin: 10px;
    margin-top: 0px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    max-width: 450px;
  }
}

@media all and (max-width: 450px) {
  #placeholderSignup {
    max-width: 350px;
  }
}
</style>
