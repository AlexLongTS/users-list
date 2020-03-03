<!-- VERSION: 1.0.0  -->
{#if isInput}
  <form class="h-16 w-full max-w-full  select-none" style="display: grid; grid-template-columns: 4rem 12rem 4rem;" on:submit|preventDefault={toggleInput}>
    <div class="h-full w-full flex justify-center items-center bg-white">
      <img src="/icons/key-alt.svg" alt="key">
    </div>
    <input bind:this={field} bind:value={value} class="p-4 border-box" type="text">
    <button class="w-16 bg-white flex justify-center items-center" type="submit">
      <img src="/icons/f-check.svg" alt="submit" >
    </button>
  </form>
{:else}
  <MenuItem
    title="Dev Key" action={toggleInput}
    subtitle={value || ''}
    icon="/icons/key-alt.svg" />
{/if}

<script>
import MenuItem from '/components/MenuItem.svelte'
import { createEventDispatcher } from 'svelte';
export let isInput = false;
export let value = '';

let field;
const dispatch = createEventDispatcher();

function toggleInput() {
  isInput = !isInput;
  if(isInput) {
    setTimeout(() => {
      field.select();;
    }, 100);
  } else {
    dispatch('change', value)
  }
}
</script>