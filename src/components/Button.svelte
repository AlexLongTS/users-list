<!-- VERSION: 1.0.0  -->
<script>
  import { goto } from "@sapper/app";

  export let label = undefined;
  export let icon = "/icons/button-default.svg";
  export let action = () => {};
  export let link = undefined;
  export let type = "button";
  export let className = "bg-ts-blue rounded mb-2";
  export let base = "py-2 px-4";
  export let cy = undefined;

  $: button_id = `button-${(label||icon.replace('/icons/', '').replace('.svg', '')).toLowerCase().replace(/ /g, "-")}`;
  $: cyData = cy || button_id;

  function runAction(e) {
    if (type !== "submit") {
      e.preventDefault();
    }
    action();
    if (link) {
      goto(link);
    }
  }
</script>

<button
  class="{base} flex justify-between items-center {className}"
  {type}
  id={button_id}
  data-cy={cyData}
  on:click={runAction}>
  {#if label}
    <p>{label}</p>
  {/if}
  <img
    src={icon}
    alt="button-icon"
    class={label ? '' : 'm-auto w-8 h-8'}
    aria-hidden="true" />
</button>
