<script>
  import "../global.css";
  import Menu from "./assets/Menu.svelte";
  Menu;
</script>

<header
  class="w-full z-20 text-milk md:justify-end items-center h-[10vh] sticky top-0 flex px-6 bg-dblue font-sand font-[600]"
>
  <ul class="list-image-none hidden md:flex justify-between w-1/3 py-4">
    <li><a href="/">About Me</a></li>
    <li><a href="/">Skills </a></li>
    <li><a href="/">Articles</a></li>
    <li><a href="/">Reviews </a></li>
    <li class="bg-lblue w-24 h-8 flex items-center justify-center">
      <a href="/">Contact Me </a>
    </li>
  </ul>
  <div>
    <div class="md:hidden">
      <Menu />
    </div>
  </div>
</header>
