<template>
<form  @submit.prevent="onSubmit" >
    <button type="button" class="button btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <span> Faire une publication </span>
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
                <div class="modal-header">
                    <input v-model="postTitle" type="text" label="postTitle"  id="post-title" placeholder="Votre titre ici">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <textarea v-model="postContent" id="post-content" rows="4" maxlength="300" placeholder="Texte de votre publication" ></textarea>
                </div>

                <input type="file">
                <div id="upload">
                    <button id="upload-image"><i class="fa-solid fa-image "></i></button>
                </div>
                
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
        </div>
        </div>
    </div>

</form>
</template>

<script>
import axios from 'axios'

export default {
    name:'PublicationSubmitComponent',
    data(){
        return{
            postTitle:'',
            postContent:'',
            image: 'couou',
            
        };
    },

    methods: {
        onSubmit: function () {

            this.createPost()

        },

        createPost: async function () {
        try {
            const token = localStorage.getItem("jwt")
            const config = {
                headers: { Authorization: `Bearer ${token}` }
                };
            
            await axios.post('http://localhost:3000/api/publication', { postTitle: this.postTitle, postContent: this.postContent, postImage: this.image },config);
            this.$emit('reloadPosts')
        } catch (error) {
            console.log(error);
           
         }
      }

    }
};
</script>

<style lang="scss" scoped>

.btn{
    margin:20px

}

.button {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
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
  content: '\00bb';
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

.modal{
    &-header{
        border:solid 2px rgb(220, 158, 67);
    }

    &-content{
        background: #f5dfd8;
    }
}

#post-title{
    border: none;
    background: none;
}

#post-content{
    resize: none;
    width: 100%;
}



</style>