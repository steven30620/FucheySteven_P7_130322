<template>

   <div id="publication-area">
      <div id="publication-header">
        <b>{{ post.lastname}} {{ post.firstname }} - {{ post.title }}</b>
        <span class="button-placeholder"><button id="delet" type="button" @click="delet"><i class="fa-solid delet fa-trash-can"></i></button></span>
      </div>
      <div id="publication-body">
         {{post.content}}
         <!-- <EditBodyPublicationComponent/> -->
         <!-- component de la section texte ou photo -->
      </div>
      <div id="publication-footer">
         <div id="publication-like">
            <button id="like">J'aime  <i class="fa-solid  fa-thumbs-up"></i></button>
         </div>
         <div id="publication-comment">
            <div id="publication-comment-input">
               <form @submit.prevent="onSubmit">
                  <input type="text" maxlength="50" v-model="comment"/>
                  <button type="submit" >envoyer</button>
            </form>
           </div>

            <div class="publication-comment-list">
            <ul>
               <li v-for="comment in comments" :key="comment.id">
                  <b>{{comment.lastname}} {{comment.firstname }}</b>  -  {{ comment.commentContent }}
               </li>
            </ul>
            </div>

         </div>
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
		},

      // delete: function(){
      //    try {
		// 		const token = localStorage.getItem("jwt")

		// 		const config = {
		// 			headers: { Authorization: `Bearer ${token}` }
      //           };

		// 		//   const response = await axios.get('http://localhost:3000/api/publication/' + this.post.postId, config);
		// 		// return console.log(response);
		// 	} catch (error) {
		// 		console.log(error);
      //    }
      // }
   },


   async mounted() {
      this.comments = await this.getComment()
   }


};
</script>

<style lang="scss" scoped>

b{
   padding-left: 10px;
   color: rgb(0, 0, 0);
}
.fa-trash-can{
   &::before{
      color: red
   }
}


#delet{
   background: none;
   border: none;
   }

.button-placeholder{
   padding-right: 10px;
}


#publication{
&-area {
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   margin-bottom: 50px;
   width: 700px;
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
   margin-left: 10px;
   width: 100%;
   min-height: 100px;
   color: rgb(0, 0, 0);
}
&-footer {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   border-top: 2px solid black;
   min-height: 20px;
   
}
&-like{
   margin-top: 10px;
   padding-bottom: 10px;
   width: 100%;
   border-bottom: 2px solid rgb(92, 92, 92);

}
&-comment{
   display: flex;
   align-content: flex-start;
   flex-direction: column;
   min-width: 200px;
   max-width: 100%; 
   min-height: 40px;
   margin-top: 10px;
&-input{
   position: relative;
   left: 20px;
}   
   &-list{
      display: flex;
      align-items: flex-start;
      list-style-type: none;
   }
}
}

ul {
  list-style-type: none;
   padding-top: 20px;
}

li{
   display: flex;
   align-items: flex-start;
   max-width: 100%;
   max-height: 30px;
   border-bottom: 2px solid black;
   margin-bottom: 20px;
   padding-right: 10px;
   background: rgb(243, 195, 34);
}

#like{
   background: rgb(0, 60, 255);
   color: white;
   width: 100px;
   border-radius: 10px;
   &:hover{
         animation-duration: .3s;
         animation-name: clignoter;
         animation-iteration-count: 3;
         transition: none;

}

}

@keyframes clignoter {
   0%   { opacity:1; }
   40%   {opacity:0.5; }
   100% { opacity:1; }
}
</style>
