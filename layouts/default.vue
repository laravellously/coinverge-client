<template>
	<div>
		<Navigation />
		<Nuxt />
	</div>
</template>

<script>
	export default {
		head () {
		    return {
		      bodyAttrs: {
		        class: ['fixed-header', 'horizontal-menu', 'horizontal-app-menu']
		      }
		    }
		  }
		}
</script>