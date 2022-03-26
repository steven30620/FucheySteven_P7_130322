<template>
  <div id="main-signin">
    <div class="body">
      <div id="back">
        <div class="illustration">
          <img src="../assets/logo_groupomania/icon.svg" alt="logo" />
        </div>
        <div id="placeholderComponent">
          <div id="headerSignup">
            <!-- Ici on place un écouteur, Qui a chaque clique vas appeler la methode changecomponent-->
            <button
              id="signup"
              @click="changeComponent('SignUpFormComponent')"
              :class="{
                selected: currentComponent === 'SignUpFormComponent',
              }"
            >
              S'inscrire
            </button>
            <button
              id="signin"
              @click="changeComponent('SignInFormComponent')"
              :class="{
                selected: currentComponent === 'SignInFormComponent',
              }"
            >
              Se connecter
            </button>
          </div>
          <component
            :is="currentComponent"
            @signin="signin"
            @signup="signup"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpFormComponent from "../components/accueil/SignUpFormComponent.vue";
import SignInFormComponent from "../components/accueil/SignInFormComponent.vue";

export default {
  name: "RegisterView",
  components: {
    SignUpFormComponent,
    SignInFormComponent,
  },
  data() {
    return {
      currentComponent: "SignUpFormComponent",
    };
  },
  methods: {
    //change component vas changer la valeur qui se trouve dans la data currentComponent, par la valeur qu"on lui a donner en paramètre.
    changeComponent: function (component) {
      this.currentComponent = component;
    },
    signin: function () {
      this.$router.push("/publication");
    },
    signup: function () {
      this.$router.push("/publication");
    },
  },
};
</script>

<style scoped lang="scss">
.selected {
  background: linear-gradient(0deg, rgb(7, 31, 128) 0%, rgb(3, 51, 240) 25%);
}

#headerSignup {
  margin-right: 40px;
}

#main-signin {
  display: flex;
  justify-content: center;
}

#back {
  margin-top: 70px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  height: 700px;
  background-image: url("../assets/illustration/back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

button {
  position: relative;
  background-color: rgb(7, 31, 128);
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

img {
  height: 600px;
  padding-left: 20px;
  object-fit: cover;
}

#signin {
  border: solid 2px red;
  border-bottom: none;
  border-top-right-radius: 15px;
}

#signup {
  border-top-left-radius: 15px;
  border: solid 2px red;
  border-bottom: none;
  border-right: 2px solid rgb(255, 0, 0);
}

@media all and (max-width: 1250px) {
  .body {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  #back {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  img {
    display: none;
  }

  #headerSignup {
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
