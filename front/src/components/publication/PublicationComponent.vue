<template>
                
    <div id="publication-area">
        <div id="publication-header">
            <div id="publication-header-content">
            logo et nom
            </div>
        </div>
        <div id="publication-body">
            <div id="publication-body-text">
                <textarea id="publication" name="publication" cols="87" placeholder="Votre publication ici !" maxlength="280"></textarea>
            </div>
            <!-- component de la section texte ou photo -->
        </div>
        <div id="publication-footer">
            <div id="publication-like-and-select">
                <button id="like">J'aime !  <i class="fa-solid fa-thumbs-up"></i></button>
                <button id="upload-image"><i class="fa-solid fa-image fa-2x"></i></button>
            </div>
            <div id="publication-comment-section">
                <div id="componentComment">
                    gros test
                </div>
            </div>
        </div>
    </div>

</template> 




<script>
export default {
    name: 'PublicationComponent'
    
}
</script>

<style lang="scss" scoped>

#publication-area{
    margin-top: 50px;
    width: 700px;
    height: 500px;
    border: 2px solid black;
    border-radius: 10px;
    background-color:#d8f3f2;
}

#publication-header{
    display: flex;
    align-items: center;
    border-bottom: 2px solid black ;
    height: 50px;

    &-content{
        margin-left: 20px;
        font-size: 28px;
    }
}

#publication-body{
    width: 100%;
}

#publication{
    overflow: hidden;
    resize: none;
    margin-left: 10px;
    display: flex;
    border: none;
    justify-content: flex-start;
    background: rgba(226, 213, 184, 0.446);
    margin-top: 10px; 
    margin-bottom: 20px;
    font-size: 20px;
    width: 95%;
    height: 120px;
}
#publication-footer{
    border-top: 2px solid black;
}
#publication-like-and-select{
    display: flex;
    justify-content: space-between;
}

button{
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    width: 50px;
    height: 30px;
}

#like{
    margin-left: 10px;
    width: 80px;
    border-radius: 10px;
    border: 1px solid blue;
    background-color:  rgb(239, 248, 247);
    cursor: pointer;
    &.fa-thumbs-up::before{
        color: blue;
    }

}

#upload-image{
    background: none;
    paddingr: 10px;
    cursor: pointer;
}

#publication-comment-section{
    display: flex;
    border-top: 2px solid black;
    height: 50px;
    padding:15px;
}

#componentComment{
    display: flex;
    border: 2px solid black;
    width: 100%;
    padding: 5px;
}

</style>