<template>
    <div id="userHubPlaceholder">
        <UserHubComponent/>
    </div>
	<div id="main-page-body">
		<div id="publication-placeholder">
            <PublicationSubmitComponent/>
			
		</div>
	</div>
</template>

<script>
// import PublicationDisplayComponent from "../components/publication/PublicationDisplayComponent.vue";
import UserHubComponent from "../components/header/UserHubComponent.vue"
import PublicationSubmitComponent from "../components/publication/PublicationSubmitComponent.vue"
export default {
	name: "RegisterView",
	components: {
		// PublicationDisplayComponent,
        UserHubComponent,
        PublicationSubmitComponent,
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
	width: 1000px;
	
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
}

#userHubPlaceholder{
    position: absolute;
    right: 40px;
    top: 30px;
}

</style>
