<template>
  <form @submit.prevent="onSubmit">
    <button
      type="button"
      class="button btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <span> Faire une publication </span>
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div id="empty-content" v-if="emptyContent">
            Titre, contenue ou photo manquante
          </div>
          <div id="publication-send" v-if="publicationSend">
            Publication bien crée !
          </div>
          <div class="modal-header">
            <input
              v-model="postTitle"
              type="text"
              label="postTitle"
              id="post-title"
              placeholder="Votre titre ici"
              minlength="3"
              maxlength="30"
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <textarea
              v-model="postContent"
              id="post-content"
              rows="4"
              minlength="5"
              maxlength="300"
              placeholder="Texte de votre publication"
            ></textarea>
          </div>

          <button id="button-upload">
            <i class="fa-solid fa-image fa-2x"></i>
            <input @change="onFileChange" type="file" class="input-upload" />
          </button>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "PublicationSubmitComponent",
  data() {
    return {
      postTitle: "",
      postContent: "",
      postImage: null,
      showModal: false,
      emptyContent: false,
      publicationSend: false,
    };
  },

  methods: {
    onSubmit: function () {
      this.createPost();
    },

    createPost: async function () {
      try {
        const token = localStorage.getItem("jwt");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        };

        const formData = new FormData();
        formData.append("image", this.postImage);
        formData.append("postContent", this.postContent);
        formData.append("postTitle", this.postTitle);
        await axios.post(
          "http://localhost:3000/api/publication",
          formData,
          config
        );
        this.$emit("reloadPosts");
        this.postImage = null;
        this.postContent = "";
        this.postTitle = "";
        this.emptyContent = false;
        this.publicationSend = true;
        if (this.publicationSend == true)
          setTimeout(
            function () {
              this.publicationSend = false;
            }.bind(this),
            3000
          );
      } catch (err) {
        this.emptyContent = true;
        this.publicationSend = false;
        if (this.emptyContent == true)
          setTimeout(
            function () {
              this.emptyContent = false;
            }.bind(this),
            3000
          );
        console.log(err);
      }
    },
    onFileChange: function (e) {
      console.log(e.target.files);
      this.postImage = e.target.files[0] || e.dataTransfer.files;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 20px;
}

.button {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.modal {
  &-header {
    border: solid 2px rgb(220, 158, 67);
  }

  &-content {
    background: #f5dfd8;
  }
}

#post-title {
  border: none;
  background: none;
}

#post-content {
  resize: none;
  width: 100%;
}

#button-upload {
  border: none;
}

.fa-image {
  position: relative;
  top: 7px;
  &::before {
    color: #f4511e;
  }
}

.input-upload {
  margin-bottom: 7px;
}

#empty-content {
  position: relative;
  left: 130px;
  display: flex;
  background: rgb(242, 56, 15);
  color: white;
  width: 250px;
  height: 55px;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  animation-duration: 0.3s;
  animation-name: clignoter;
  animation-iteration-count: 3;
  transition: none;
}

#publication-send {
  position: relative;
  left: 130px;
  display: flex;
  background: rgb(21, 170, 34);
  color: white;
  width: 250px;
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

@media all and (max-width: 450px) {
  #empty-content {
    left: 70px;
  }

  #publication-send {
    left: 70px;
  }
}
</style>
