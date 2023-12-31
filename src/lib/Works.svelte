<script>
  const works = [
    {
      id: 1,
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1684053482000/208c575c-1701-4ab7-b191-a6080dd4fab3.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      title: " Account Abstraction In Blockchain and Its Use Cases",
      subtring:
        " Account Abstraction is a concept in blockchain technology that aims to provide solutions and improve user experience/operations through smart contracts while interacting or trying to make transactions.",
    },
    {
      id: 2,
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1684053482000/208c575c-1701-4ab7-b191-a6080dd4fab3.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      title: " Account Abstraction In Blockchain and Its Use Cases",
      subtring:
        "Account Abstraction is a concept in blockchain technology that aims to provide solutions and improve user experience/operations through smart contracts while interacting or trying to make transactions.",
    },
    {
      id: 3,
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1690010581085/19aa6fc4-1b0d-403e-8395-d09bb9ab0599.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      title: "The Concept of Blockchain Oracles",
      subtring:
        "In this article, you would get to learn about web3.0 oracles; their relation to off-chain data computation and on-chain data computation, the different types of oracles, and their use cases as well.",
    },
    { id: 4, image: "", title: "", subtring: "" },
  ];
</script>

<section class="p-10 flex flex-col items-center">
  <h3 class="text-3xl font-bold my-6">Works</h3>
  <div class=" works flex overflow-x-scroll">
    {#each works as work (work.id)}
      <div class="work">
        <img src={work.image} alt="" class="preview" />
        <article class="px-3">
          <h3 class="text-lg font-bold">
            {work.title}
          </h3>
          <p class=" font-medium my-3">
            <span class="clamp-text"> {work.subtring}</span>
            <span>See More </span>
          </p>
        </article>
      </div>
    {/each}

    <div class="work">
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1697987313727/ca502929-6236-48e7-be87-6933177eff1f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
        alt=""
        class="preview"
      />
      <article>
        <h3>How To Add Blockchain TestNets Into a MetaMask Wallet.</h3>
        <p class="clamp-text font-medium my-3">
          To add a blockchain testnet manually, make sure your Metamask wallet
          is installed and completely set up on your Mobile. For your PC,
          install the MetaMask extension to your browser.
        </p>

        <span>See More </span>
      </article>
    </div>
    <div class="work">
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1697985727532/9c48777b-1987-4cb9-b5b8-194ca69d87ec.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
        alt=""
        class="preview"
      />
      <article>
        <h3>How Avalanche Blockchain Consensus Mechanism Works.</h3>
        <p class="clamp-text font-medium my-3">
          In every blockchain network, certain interactions are carried out.
          Examples of these interactions may include the minting of NFTs,
          sending and receiving cryptocurrencies, signing of transactions, and
          even on-chain voting.
        </p>
        <span>See More </span>
      </article>
    </div>
    <div class="work">
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1697985727532/9c48777b-1987-4cb9-b5b8-194ca69d87ec.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
        alt=""
        class="preview"
      />
      <article>
        <h3>How Avalanche Blockchain Consensus Mechanism Works.</h3>
        <p class="clamp-text font-medium my-3">
          In every blockchain network, certain interactions are carried out.
          Examples of these interactions may include the minting of NFTs,
          sending and receiving cryptocurrencies, signing of transactions, and
          even on-chain voting.
        </p>
        <span>See More </span>
      </article>
    </div>
  </div>
</section>

<style lang="postcss">
  .works::-webkit-scrollbar {
    width: 5px;
    height: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    @apply bg-dblue rounded-full;
  }

  /* Handle */
  .works::-webkit-scrollbar-thumb {
    @apply bg-lblue rounded-full;
  }

  .work {
    @apply flex-shrink-0 border-2 bg-dblue text-milk  border-dblue mx-2 p-2 my-5;
    display: flex;
    padding: 5px;
    flex-direction: column;
    width: 25%;
    cursor: pointer;
  }
  .clamp-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4; /* Number of lines to display */
  }
</style>
