<script>
  import seo from "./assets/12083278_Wavy_Bus-11_Single-12.svg";
  import writer from "./assets/7769804_3230318.svg";
  import api from "./assets/28772962_7461487.svg";
  import whitepaper from "./assets/6183538_3123474.svg";
</script>

<section class="flex flex-col p-14 justify-between items-center">
  <h2 class="text-4xl font-bold">My Skills</h2>
  <p class=" md:w-2/3 my-5 text-center text-lg font-medium">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam totam
    aperiam. Perferendis, consectetur? Quo atque perferendis culpa error sequi!
  </p>
  <div>
    <div class="flex relative w-full mt-10 justify-around flex-col md:flex-row">
      <div
        class="article-writing shadow-lg border-[0.15rem] border-transparent hover:shadow-none shadow-dblue z-0 my-5 w-full relative rainbow flex cursor-pointer flex-col justify-around items-center md:w-[22%] text-milk p-5 box-border bg-dblue/90"
      >
        <img class="w-2/3" src={writer} alt="articles" />
        <article class=" ">
          <h3 class="text-xl font-bold my-3 text-center">Article Writing</h3>
          <p class="text-sm font-medium">
            Through the use of Google Workspace tools and other managerial tools
            which I use personally and for co-working with brands, my articles
            span across Medium, Hashnode, and featured blog sites.
          </p>
        </article>
      </div>
      <div
        class="article-writing z-0 shadow-lg border-[0.15rem] border-transparent hover:shadow-none shadow-dblue my-5 w-full relative rainbow flex cursor-pointer flex-col justify-around items-center md:w-[22%] text-milk p-5 bg-dblue/90"
      >
        <img class="w-2/3" src={seo} alt="articles" />
        <article class="">
          <h3 class="text-xl text-center font-bold my-3">
            Search Engine Optimization
          </h3>
          <p class="text-sm font-medium">
            Coupled with my prowess in optimizing articles to gain visibility, a
            brand has gained over 160k impressions and 2.8k views with my
            contributions and those of other writers through search engine
            optimization.
          </p>
        </article>
      </div>
      <div
        class="article-writing z-0 my-5 shadow-lg hover:shadow-none border-[0.15rem] border-transparent shadow-dblue w-full relative rainbow flex cursor-pointer flex-col justify-around items-center md:w-[22%] text-milk p-5 bg-dblue/90"
      >
        <img class="w-2/3" src={api} alt="articles" />
        <article class="">
          <h3 class="text-xl text-center font-bold my-3">API Documentation</h3>
          <p class="text-sm font-medium">
            With my technical background, I help brands document their APIs to
            help users understand the know-how of an API.
          </p>
        </article>
      </div>
      <div
        class="article-writing z-0 my-5 shadow-lg hover:shadow-none border-[0.15rem] border-transparent shadow-dblue w-full relative rainbow flex cursor-pointer flex-col justify-around items-center md:w-[22%] text-milk p-2 bg-dblue/90"
      >
        <img class="w-2/3" src={whitepaper} alt="articles" />
        <article class="">
          <h3 class="text-xl text-center font-bold my-3">WhitePaper Writing</h3>
          <p class="text-sm font-medium">
            Most especially for web3 brands, I have documented whitepapers for
            startups to help users understand the problems a brand/product
            solves.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
