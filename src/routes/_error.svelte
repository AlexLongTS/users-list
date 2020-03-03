<script>
  import { title } from "/utils/system";
  import IconButton from '/components/IconButton.svelte';
	export let status;
	export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>
<svelte:head>
	<title>{title(status)}</title>
</svelte:head>

<div class="w-full h-full justify-center flex flex-col items-center text-white my-16 p-4">
  <img src="/screens/undraw_Taken_if77.svg" alt="error" class="w-64"> 
  <h1 class="text-6xl font-hairline">{status}</h1>
  <p>{error.message}</p>
  {#if dev && error.stack}
    <pre class="break-words whitespace-pre-wrap">{error.stack}</pre>
  {/if}
  <div class="flex flex-col  mt-4 w-full justify-center items-center">
    <IconButton text="Return Home" link="https://teamspeak.com" icon="/icons/home.svg" className="mt-2 max-w-xxxs bg-ts-blue"/>
  </div>
</div>

