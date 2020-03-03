<!-- VERSION: 1.3.0  -->
<script>
  export let label = "Input";
  export let type = "text";
  export let value = null;
  export let fill = undefined;
  export let name = undefined;
  export let min = undefined;
  export let max = undefined;
  export let step = undefined;
  export let fieldClass = "";
  export let inputClass = "";
  export let labelClass = "";
  export let required = true;
  export let cy = undefined;

  $: field_id = `field-${label.toLowerCase().replace(/ /g, "-")}`;
  $: cyData = cy || field_id;
</script>

<div class="relative mb-3 field-style {type==='textarea' ? 'mt-2' : ''} {fieldClass}">
  {#if type === 'email'}
    <input
      autocomplete={fill}
      name={name || fill || label}
      bind:value
      placeholder={label}
      type="email"
      id={field_id}
      minlength={min}
      maxlength={max}
      data-cy={`${cyData}-input`}
      class="form-field input-style {inputClass}"
      required={required} />
  {:else if type === 'password'}
    <input
      autocomplete={fill}
      name={name || fill || label}
      bind:value
      placeholder={label}
      minlength={min}
      maxlength={max}
      type="password"
      data-cy={`${cyData}-input`}
      id={field_id}
      class="form-field input-style {inputClass}"
      {required} />
  {:else if type === 'number'}
    <input
      autocomplete={fill}
      name={name || fill || label}
      bind:value
      placeholder={label}
      type="number"
      id={field_id}
      {min}
      {max}
      data-cy={`${cyData}-input`}
      {step}
      class="form-field input-style {inputClass}"
      {required} />
  {:else if type === 'textarea'}
    <textarea
      autocomplete={fill}
      name={name || fill || label}
      bind:value
      placeholder={label}
      style="vertical-align: top;"
      data-cy={`${cyData}-input`}
      id={field_id}
      class="form-field input-style {inputClass}"
      {required} />
  {:else}
    <input
      autocomplete={fill}
      name={name || fill || label}
      bind:value
      placeholder={label}
      type="text"
      id={field_id}
      data-cy={`${cyData}-input`}
      minlength={min}
      maxlength={max}
      class="form-field input-style {inputClass}"
      {required} />
  {/if}
  <label 
    class="{type === 'textarea' ? 'form-control-textarea-placeholder bg-ts-darker' : ''} form-control-placeholder {labelClass}" 
    data-cy={`${cyData}-label`}
    for={field_id}>
    {label}
  </label>
</div>

<style>
  .button,
  .form-field {
    /* @apply py-2 px-4 border-2 rounded w-full mb-4; */
    min-height: 32px;
    width: 100%;
    padding: 0.5rem;
  }
  .form-field:focus {
    /* @apply py-2 px-4 border-2 rounded w-full mb-4; */
    outline: none;
  }
  .form-control {
    width: 100%;
  }

  .form-control-placeholder {
    position: absolute;
    left: 0.125rem;
    bottom: 0.5rem;
    padding: 2px 4px;
    border-radius: 2px;
    pointer-events: none;
    transition: all 200ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: #909090;
    overflow: hidden;
    max-width: 100%;
    /* opacity: 0.5; */
  }

  .form-control-textarea-placeholder {
    position: absolute;
    background: inherit;
    top: 0.5rem;
    width: 100%;
    left: 0%;
  }

  .form-field:focus + .form-control-placeholder,
  .form-field:not(:placeholder-shown) + .form-control-placeholder {
    font-size: 75%;
    height: 1.25rem;
    position: absolute;
    top: -0.5rem;
    opacity: 1;
    color: #fff;
  }

  .form-field::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    opacity: 0;
  }
  .form-field::-moz-placeholder {
    /* Firefox 19+ */
    opacity: 0;
  }
  .form-field:-ms-input-placeholder {
    /* IE 10+ */
    color: #707070;
  }
  .form-field:-moz-placeholder {
    /* Firefox 18- */
    opacity: 0;
  }

  input:-moz-ui-invalid {
    box-shadow: none;
    -moz-mox-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    background-color: rgba(0, 0, 0, 0) !important;
  }

  @media all and (-ms-high-contrast: none) {
    .form-control-placeholder {
      display: none;
      z-index: -999;
      opacity: 0;
    }
  }

  @supports (-ms-ime-align: auto) {
    .form-control-placeholder {
      font-size: 75%;
      position: absolute;
      top: 0;
    }
  }
</style>
