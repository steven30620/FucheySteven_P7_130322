<template>

   <div id="publication-area">
      <div id="publication-header">
        {{ post.lastname}} {{ post.firstname }} - {{ post.title }}
      </div>
      <div id="publication-body">
         {{post.content}}
         <!-- <EditBodyPublicationComponent/> -->
         <!-- component de la section texte ou photo -->
      </div>
      <div id="publication-footer">
         <div id="publication-like">
            <button>like</button>
         </div>
         <div id="publication-comment">
            <form @submit.prevent="onSubmit">
               <input type="text" v-model="comment"/>
               <button type="submit" >envoyer</button>
           </form>
           <ul>
              <li v-for="comment in comments" :key="comment.id">
                 <b>{{comment.lastname}}  {{comment.firstname }}</b> - {{ comment.commentContent }}
              </li>
           </ul>
         </div>
         <!-- <FooterPublicationComponent/> -->
         <!-- <CommentPublicationComponent/> -->
      </div>
   </div>

</template>


<script>
import axios from 'axios'


export default {
   name: 'PublicationComponent',
   components: {
      //  CommentPublicationComponent, FooterPublicationComponent, , EditBodyPublicationComponent
   },
   props: ['post'],

   data(){
      return{
         comment:"",
         comments: []
      }
   },

   methods:{
      onSubmit: function () {
            console.log(this.post);
            this.createComment()

        },
        createComment: async function () {
           try {
              const token = localStorage.getItem("jwt")
              const config = {
                 headers: { Authorization: `Bearer ${token}` }
                 };
             await axios.post('http://localhost:3000/api/publication/comment', { commentContent: this.comment, postId: this.post.postId },config);
            this.comments = await this.getComment()
            this.comment = ''
        } catch (error) {
            console.log(error);
           
         }
      },
      getComment: async function () {
			try {
				const token = localStorage.getItem("jwt")

				const config = {
					headers: { Authorization: `Bearer ${token}` }
                };

				const response = await axios.get('http://localhost:3000/api/publication/comment/' + this.post.postId, config);
				return response.data.comments
			} catch (error) {
				console.log(error);
			}
		}
   },
   async mounted() {
      this.comments = await this.getComment()
   }
};
</script>

<style lang="scss" scoped>


#publication{
&-area {
   margin-top: 20px;
   margin-bottom: 50px;
   width: 700px;
   height: 250px;
   border: 2px solid black;
   border-radius: 10px;
   background-color: #d8f3f2;
}
&-header {
   display: flex;
   align-items: center;
   border-bottom: 2px solid black;
   height: 50px;
   }
&-body {
   width: 100%;
   height: px;
}
&-footer {
   border-top: 2px solid black;
   height: 20px;
}
&-comment{
   border-top: 2px solid black
    ;
}
}

</style>
