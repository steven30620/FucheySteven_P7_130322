<template>
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


</template>

<script>


export default {
    name:'SettingsComponent'
    
}

</script>


<style lang="scss" scoped>

#exampleModal{
    position: absolute;

}




</style>