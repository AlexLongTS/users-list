<!-- VERSION: 1.0.0  -->
<button class="flex w-full text-white py-2 px-4 rounded justify-between items-center {className}" on:click|preventDefault={action}>
  {#if left}
    <img src="{icon}" class="svg-xs" alt="icon" aria-hidden="true">
  {/if}
  {text}
  {#if !left}
    <img src="{icon}" class="svg-xs" alt="icon" aria-hidden="true">
  {/if}
</button>

<script>
  import {goto} from '@sapper/app'

  export let className = '';
  export let text = ''
  export let icon = '';
  export let left = false;

  export let link = null;
  export let action = () => {
    if (link) goto(link)
  }
</script>