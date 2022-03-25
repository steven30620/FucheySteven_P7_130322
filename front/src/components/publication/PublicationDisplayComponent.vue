<template>
  <div id="publication-area">
    <div id="publication-header">
      <b>{{ post.lastname }} {{ post.firstname }} - {{ post.title }}</b>
      <span class="button-placeholder">
        <button
          v-if="isOwnerPost || isAdmin"
          id="delete"
          type="button"
          @click="deletePost"
        >
          <i class="fa-solid delete fa-trash-can"></i>
        </button>
      </span>
    </div>
    <div id="publication-body">
      <div>
        {{ post.content }}
      </div>
      <div v-if="post.image != ''">
        <img :src="post.image" alt="mon_image" />
      </div>
      <!-- <EditBodyPublicationComponent/> -->
      <!-- component de la section texte ou photo -->
    </div>
    <div id="publication-footer">
      <div id="publication-like">
        <button id="like">J'aime <i class="fa-solid fa-thumbs-up"></i></button>
      </div>
      <div id="publication-comment">
        <div id="publication-comment-input">
          <div class="empty-comment" v-if="emptyComment">
            Minimum 3 caractère !
          </div>
          <form @submit.prevent="onSubmit" class="input-placeholder">
            <input type="text" maxlength="50" v-model="comment" />
            <button type="submit">envoyer</button>
          </form>
        </div>
        <div class="publication-comment-list">
          <ul>
            <li v-for="comment in comments" :key="comment.id">
              <button
                id="delete"
                type="button"
                v-if="isOwnerComment(comment.userId) || isAdmin"
                @click="deleteComment(comment.id)"
              >
                <i class="fa-solid delet fa-trash-can"></i>
              </button>
              <b>{{ comment.lastname }} {{ comment.firstname }}</b> -
              {{ comment.commentContent }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PublicationComponent",
  components: {},

  props: ["post"],

  data() {
    return {
      comment: "",
      comments: [],
      isAdmin: false,
      postDeletePermission: false,
      emptyComment: false,
    };
  },

  methods: {
    onSubmit: function () {
      this.createComment();
    },
    createComment: async function () {
      if (!this.comment.match("[A-Za-z1-9]{3,}")) {
        return (this.emptyComment = true);
      } else {
        this.emptyComment = false;
      }

      try {
        const token = localStorage.getItem("jwt");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        await axios.post(
          "http://localhost:3000/api/publication/comment",
          { commentContent: this.comment, postId: this.post.postId },
          config
        );
        this.comments = await this.getComment();
        this.comment = "";
      } catch (error) {
        console.log(error);
      }
    },
    checkAdmin: function () {
      const userData = JSON.parse(localStorage.getItem("user"));

      if (userData.isAdmin == 1) {
        this.isAdmin = true;
      }
    },
    getComment: async function () {
      try {
        const token = localStorage.getItem("jwt");

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axios.get(
          "http://localhost:3000/api/publication/comment/" + this.post.postId,
          config
        );
        return response.data.comments;
      } catch (error) {
        console.log(error);
      }
    },

    deletePost: async function () {
      try {
        const token = localStorage.getItem("jwt");

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        await axios.delete(
          "http://localhost:3000/api/publication/" + this.post.postId,
          config
        );
        this.$emit("reloadPosts");
      } catch (error) {
        console.log(error);
      }
    },

    deleteComment: async function (commentId) {
      try {
        const token = localStorage.getItem("jwt");

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        await axios.delete(
          "http://localhost:3000/api/publication/comment/" +
            commentId +
            "/post/" +
            this.post.id,
          config
        );
        this.comments = await this.getComment();
      } catch (error) {
        console.log(error);
      }
    },

    isOwnerComment: function (commentIdUser) {
      const userIdLocal = JSON.parse(localStorage.getItem("user"));
      if (commentIdUser == userIdLocal.id) {
        return true;
      }
      return false;
    },
  },

  computed: {
    isOwnerPost: function () {
      const userIdLocal = JSON.parse(localStorage.getItem("user"));
      const postUserId = this.post.userId;

      if (postUserId == userIdLocal.id) {
        return true;
      }
      return false;
    },
  },

  async mounted() {
    this.comments = await this.getComment();
    this.checkAdmin();
  },
};
</script>

<style lang="scss" scoped>
b {
  padding-left: 10px;
  color: rgb(0, 0, 0);
}
.fa-trash-can {
  &::before {
    color: red;
  }
}

#delete {
  background: none;
  border: none;
}

.button-placeholder {
  padding-right: 10px;
}

#publication {
  &-area {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 50px;
    max-width: 70%;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgb(92, 92, 92);
    min-height: 50px;
  }
  &-body {
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-content: center;
    width: 100%;
    min-height: 100px;
    color: rgb(0, 0, 0);

    img {
      width: 100%;
    }
  }
  &-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 2px solid black;
    min-height: 20px;
  }
  &-like {
    margin-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 2px solid rgb(92, 92, 92);
  }
  &-comment {
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    min-width: 100%;
    min-height: 40px;
    margin-top: 10px;
    &-input {
      position: center;
    }
    &-list {
      display: flex;
      align-items: flex-start;
      list-style-type: none;
    }
  }
}

ul {
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
  padding-top: 20px;
  padding-inline-start: 0px;
  min-width: 100%;
}

li {
  min-width: 100%;
  min-height: 50px;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 10px;
  background: rgb(243, 195, 34);
}

#like {
  display: flex;
  margin-left: 20px;
  background: rgb(0, 60, 255);
  color: white;
  width: 100px;
  border-radius: 10px;
  &:hover {
    animation-duration: 0.3s;
    animation-name: clignoter;
    animation-iteration-count: 3;
    transition: none;
  }
  .fa-thumbs-up {
    margin-left: 20px;
    margin-top: 3px;
  }
}

@keyframes clignoter {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@media all and (max-width: 850px) {
  #publication {
    &-area {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 50px;
      max-width: 90%;
    }
  }

  #publication-comment {
    padding: 0px;
  }
}
</style>
