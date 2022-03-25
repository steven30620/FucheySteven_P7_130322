<template>
  <div id="userHub" v-if="isConnected">
    <div class="dropdown dropdown-full">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <p class="user-name">{{ fullname }}</p>
        <span id="gear"> <i class="fa-solid fa-gear fa-2x"></i></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item">Paramètres</a></li>
        <li>
          <a class="dropdown-item" @click="logout" href="#">Se déconnecter</a>
        </li>
        <li>
          <a class="dropdown-item" @click="removeAccount" href="#"
            >Supprimer mon compte</a
          >
        </li>
      </ul>
    </div>
    <div class="dropdown dropdown-responsive">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span id="gear"> <i class="fa-solid fa-gear fa-2x"></i></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item">Paramètres</a></li>
        <li>
          <a class="dropdown-item" @click="logout" href="#">Se déconnecter</a>
        </li>
        <li>
          <a class="dropdown-item" @click="removeAccount" href="#"
            >Supprimer mon compte</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userHubComponent",
  components: {},

  data() {
    return {};
  },

  methods: {
    isConnected: function () {
      return localStorage.getItem("jwt");
    },

    logout: function () {
      return localStorage.removeItem("jwt") && localStorage.removeItem("user");
    },
    removeAccount: async function () {
      try {
        let user = JSON.parse(localStorage.getItem("user"));
        let token = localStorage.getItem("jwt");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        await axios.delete("http://localhost:3000/api/auth/" + user.id, config);
        this.logout();
        this.$router.push({ name: "register" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    fullname: function () {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        return user.lastname + " " + user.firstname;
      }

      return "";
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(218, 115, 47);
}

.user-name {
  font-size: 20px;
  height: 15px;
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-toggle::after {
  display: none;
}

#gear {
  margin-left: 10px;
}
.dropdown-responsive {
  display: none;
}
@media all and (max-width: 1250px) {
  .btn {
    position: relative;
    left: 20px;
  }
  .dropdown-full {
    display: none;
  }
  .dropdown-responsive {
    display: unset;
  }

  #gear {
    margin-left: 0px;
  }
}
</style>
