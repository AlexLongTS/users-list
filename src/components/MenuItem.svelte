<!-- VERSION: 1.0.0  -->
<a href={href} on:click={action} data-cy={cy} class="{slim ? 'h-12' : 'h-16'} bg-ts-darkest items-center text-white w-full cursor-pointer {border && 'border-b-2 border-gray-600'}" style="display: grid; grid-template-columns: 4rem 1fr; line-height: 1rem; {style}">
  <img class="m-auto block select-none" style="width:24px;" src={icon} alt={title}>
  <div>
    <p class="font-bold select-none">{title}</p>
    {#if subtitle}
      <p class="text-gray-600 select-none break-words"><small>{subtitle}</small></p>
    {/if}
  </div>
</a>

<script>
  export let title = null;
  export let subtitle = null;
  export let href = null;
  export let action = null;
  export let slim = false;
  export let border = false;
  export let style = '';
  export let icon = '/icons/ripples.svg';
  export let cy;

  $: cy = (`button-${title}`).toLowerCase().replace(" ", "-");
</script>
