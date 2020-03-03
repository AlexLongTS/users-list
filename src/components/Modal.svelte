<!-- VERSION: 1.0.0  -->
<svelte:window on:keydown={handleKeydown} on:close-modal={close}/>

<script>
  import { fade } from 'svelte/transition';
  import {onMount} from 'svelte'
  let show;
  export function toggle() {
    show = !show
    const body = document.querySelector('body')
    body.classList.toggle('modal-active')
  }

  export function close() {
    show = false
    const body = document.querySelector('body')
    body.classList.remove('modal-active')
  }

  export function handleKeydown(e) {
    if(show && e.key === 'Escape') {
      show = false
    }
  }

  onMount(async () => {
  })
</script>

{#if show}
<div transition:fade="{{ duration: 200 }}" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 py-4">
  <div class="modal-overlay absolute w-full h-full bg-black opacity-50" on:click={close}>
    <div class="p-4 flex fixed top-0 right-0 select-none items-center">
      <p class="text-xs mr-2">Close</p>
      <svg width="24" height="24"><g  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="#fff" stroke-miterlimit="10"><path d="M16 8l-8 8M16 16L8 8"/><circle cx="12" cy="12" r="11"/></g></svg>
    </div>
  </div>
  <div class="modal-container w-11/12 mx-auto sm:max-w-md rounded shadow-lg z-50 overflow-y-auto" style="max-height: 90%;">
    <slot></slot>
  </div>

</div>
{/if}

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>