<!-- VERSION: 1.0.0  -->
<div class="w-full flex flex-col">
  <label class="mb-2">{label}</label>
  <input placeholder={placeholder || label} required={required} autocomplete={autocomplete} type="text" bind:value={value} class="py-2 px-4 rounded mb-2 text-black w-full">
</div>

<script>
export let value = '';
export let label = '';
export let placeholder = undefined;
export let autocomplete = undefined;
export let required = false;
</script>