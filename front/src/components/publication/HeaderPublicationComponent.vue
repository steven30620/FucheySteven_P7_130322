<template>
    <div id="user-name">{{fullname}}</div>
</template>

<script>
export default {
    name:'HeaderPublicationComponent',

   computed: {
         fullname: function () {
            const user = JSON.parse(localStorage.getItem('user'));

            if (user) {
               return user.lastname + ' ' + user.firstname;
            }

            return '';
         }
      }
    
}
</script>

<style scoped>

#user-name {
   margin-left: 20px;
   font-size: 21px;
}
</style>
