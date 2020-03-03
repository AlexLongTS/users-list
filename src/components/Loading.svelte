<!-- VERSION: 1.0.0  -->
<div class="loader" title="0" style="background: {bgcolor};">
  {#if image}
    <img src="{image}" alt="loader-image" aria-hidden="true">
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 48 48"><title>circle-03</title><g stroke-linecap="round" stroke-linejoin="round" stroke-width="1" fill={color} stroke={color}><g class="nc-loop_circle-03-48" transform="rotate(246.55841413056524 24 24)"> <circle opacity="0.4" fill="none" stroke={color} stroke-miterlimit="10" cx="24" cy="24" r="22"></circle> <path fill="none" stroke-miterlimit="10" d="M24,2c12.2,0,22,9.8,22,22"></path> </g> <script>!function(){function t(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}function i(t){this.element=t,this.animationId,this.start=null,this.init()}if(!window.requestAnimationFrame){var n=null;window.requestAnimationFrame=function(t,i){var e=(new Date).getTime();n||(n=e);var a=Math.max(0,16-(e-n)),o=window.setTimeout(function(){t(e+a)},a);return n=e+a,o}}i.prototype.init=function(){var t=this;this.animationId=window.requestAnimationFrame(t.triggerAnimation.bind(t))},i.prototype.reset=function(){var t=this;window.cancelAnimationFrame(t.animationId)},i.prototype.triggerAnimation=function(i){var n=this;this.start||(this.start=i);var e=i-this.start;900>e||(this.start=this.start+900),this.element.setAttribute("transform","rotate("+Math.min(900*t(e/900)/2.5,360)+" 24 24)");if(document.documentElement.contains(this.element))window.requestAnimationFrame(n.triggerAnimation.bind(n))};var e=document.getElementsByClassName("nc-loop_circle-03-48"),a=[];if(e)for(var o=0;e.length>o;o++)!function(t){a.push(new i(e[t]))}(o);document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?a.forEach(function(t){t.reset()}):a.forEach(function(t){t.init()})})}();</script></g></svg>
  {/if}
</div>

<script>
export let color = '#FFF'
export let bgcolor = 'rgba(0,0,0,0)'

export let image = undefined;

</script>

<style>

.loader{
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>