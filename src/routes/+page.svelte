<script>
  import Aboutme from "$lib/Aboutme.svelte";
  import Header from "$lib/Header.svelte";
  import Intro from "$lib/Intro.svelte";
  import Skills from "$lib/Skills.svelte";
  import Works from "$lib/Works.svelte";
</script>

<Header />
<main class="w-full h-[90vh] flex justify-center items-center">
  <Intro />
</main>
<Aboutme />
<Skills />
<Works />

<style>
</style>
