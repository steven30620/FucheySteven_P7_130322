<template>
  <div>
    <div id="userHubPlaceholder">
      <UserHubComponent />
    </div>
    <div id="main-page-body">
      <div id="publication-placeholder">
        <PublicationSubmitComponent @reloadPosts="getAllPost" />
        <PublicationDisplayComponent
          @reloadPosts="getAllPost"
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PublicationDisplayComponent from "../components/publication/PublicationDisplayComponent.vue";
import UserHubComponent from "../components/header/UserHubComponent.vue";
import PublicationSubmitComponent from "../components/publication/PublicationSubmitComponent.vue";

import axios from "axios";

export default {
  name: "RegisterView",
  components: {
    PublicationDisplayComponent,
    UserHubComponent,
    PublicationSubmitComponent,
  },
  data() {
    return {
      posts: [],
      checkAdminRes: 0,
    };
  },
  props: {},
  methods: {
    getAllPost: async function () {
      try {
        const token = localStorage.getItem("jwt");

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axios.get(
          "http://localhost:3000/api/publication",
          config
        );
        this.posts = response.data.posts;
        console.log(this.posts);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.getAllPost();
  },
};
</script>

<style scoped lang="scss">
#main-page-body {
  display: flex;
  justify-content: center;
}

#publication-placeholder {
  margin-top: 50px;
  background-color: rgb(240, 153, 71);
  max-width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}

#userHubPlaceholder {
  position: absolute;
  right: 40px;
  top: 30px;
}
</style>
