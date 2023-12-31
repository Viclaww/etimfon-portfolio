<script>
  import Icon from "@iconify/svelte";
  import dp from "./assets/nobgdp.png";
  import { fade } from "svelte/transition";
  let isHovered = false;
</script>

<div
  class="md:w-[80%] md:h-[80%] h-full flex flex-col-reverse md:flex-row md:justify-evenly items-center bg-transparent p-10 md:shadow-2xl"
>
  <img class="w-1/3" src={dp} alt="" />
  <div transition:fade={{ delay: 250, duration: 300 }} class="flex flex-col">
    <h1 class="oleo text-5xl font-[700]">Hi</h1>
    <p class="text-4xl my-3 font-bold">I am Tim Sage</p>
    <p class="text-4xl my-3 font-bold">I am a Web3 Technical Writer</p>

    <button
      on:mouseenter={() => (isHovered = true)}
      on:mouseleave={() => (isHovered = false)}
      class="py-2 px-4 justify-center my-3 w-[150px] pl-1 hover:pl-4 flex font-bold text-milk items-center space-x-2 transition-all bg-dblue text-lg duration-200"
    >
      <span>
        <Icon
          width={20}
          class={`inline-block duration-300 transition-all ${
            !isHovered && "hidden"
          }`}
          icon="mdi:phone"
        />
      </span>
      <span class="duration-500">Contact Me</span>
    </button>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap");
  .oleo {
    font-family: "Oleo Script", sans-serif;
  }
  h1 {
    background: -webkit-linear-gradient(#cb2cc3, #59d2fe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
