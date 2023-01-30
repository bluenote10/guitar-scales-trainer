<script lang="ts">
  export let disabled = false;
</script>

<button class="button" {disabled} on:click>
  <slot />
</button>

<style>
  .button {
    position: relative;
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    padding: 0 18px;
    font-size: 18px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: 0.3s;
  }

  .button:hover {
    background-color: #fff;
  }

  /*
  https://freefrontend.com/css-button-click-effects/
  https://codepen.io/ash_s_west/pen/GRZbvym
  */
  .button:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 20px 5px black;
  }

  .button:active:after {
    box-shadow: 0 0 0 0 black;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }

  .button:disabled,
  .button[disabled] {
    border: 2px solid #999999;
    background-color: #cccccc;
    color: #666666;
    pointer-events: none;
  }
</style>
