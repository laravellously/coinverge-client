<template>
	<div>
		<Nuxt />
	</div>
</template>

<script>
	export default {
		head () {
		    return {
		      bodyAttrs: {
		        class: ['fixed-header']
		      }
		    }
		  }
		}
</script>