<main>
	<slot></slot>
</main>

<script>
  import { afterUpdate, onMount } from 'svelte'
	import { gtag, sendHit } from '/utils/analytics'
	import { title } from '/utils/system'
  gtag('js', new Date());	

  let path = '';

	onMount(() => {
		path = window.location.pathname;
    sendHit(window.location.pathname)
	});
	afterUpdate(() => {
		const oldpath = path;
		const newpath = window.location.pathname;
		if(oldpath !== newpath) {
			sendHit(window.location.pathname)
			path = window.location.pathname;
		}
	});

</script>