<script>
  import { onMount } from "svelte";
  import { post, get, del, patch } from "httpie";
  import Button from "../components/Button.svelte";

  let users = [];
  let id;
  let delID;
  let username;
  let email;

  async function loadUsers() {
    const response = await get("http://localhost:8080/users");
    users = response.data;
  }

  async function getSpecificUser() {
    const response = await get(`http://localhost:8080/users/${id}`);
    users = response.data;
  }

  async function deleteUser(e) {
    delID = e.target.parentNode.querySelector("h6").textContent;
    const response = await del(`http://localhost:8080/users/${delID}`);
    users = response.data;
    loadUsers();
  }

  async function addUser() {
    const response = await post("http://localhost:8080/users", {
      body: {
        username: username.trim(),
        email: email.trim()
      }
    });
    users = response;
    loadUsers();
  }

  onMount(loadUsers);
</script>

<style>
  :global(body) {
    background: rgb(22, 26, 35);
  }
</style>

<div>

  <div
    class="bg-ts-dark m-4 flex flex-wrap justify-center w-3/4 mx-auto shadow-sm
    rounded-t-sm">
    <form
      class="p-6 m-2 h-20"
      on:submit|preventDefault
      on:submit={getSpecificUser}>
      <input
        type="text"
        bind:value={id}
        class="bg-gray-600 p-1 pl-2 rounded-t-sm"
        placeholder="ID" />
      <button type="submit" class="text-white bg-ts-blue p-1 my-1 rounded-t-sm">
        Find User
      </button>
    </form>

    <form class="p-6 m-2" on:submit|preventDefault on:submit={addUser}>
      <input
        type="text"
        bind:value={username}
        class="bg-gray-600 p-1 pl-2 my-1 rounded-t-sm"
        placeholder="Username" />
      <input
        type="text"
        bind:value={email}
        class="bg-gray-600 p-1 pl-2 my-1 rounded-t-sm"
        placeholder="Email" />
      <button type="submit" class="text-white bg-ts-blue p-1 my-1 rounded-t-sm">
        Add User
      </button>
    </form>
  </div>

  <div
    class="flex flex-wrap justify-center w-3/4 mx-auto my-8 py-8 bg-ts-dark
    shadow-sm rounded-md">
    {#if users.length > 1}
      {#each users as user}
        <div
          class="bg-ts-darkest w-64 p-6 m-2 shadow-lg h-48 flex items-center
          flex-wrap">
          <h3 class="my-1 text-white w-full">{user.username}</h3>
          <p class="my-1 text-sm text-yellow-600">{user.email}</p>
          <h6 class="text-xs text-gray-600">{user.uuid}</h6>
          <img
            src="bin.svg"
            class="w-4 h-4 cursor-pointer"
            alt="Delete icon"
            on:click={deleteUser} />
        </div>
      {/each}
    {:else}
      <div class="bg-ts-darkest w-64 p-6 m-2 shadow-lg">
        <h3 class="my-1 text-white w-full">{users.username}</h3>
        <p class="my-1 text-sm text-yellow-600">{users.email}</p>
        <h6 class="text-xs text-gray-600">{users.uuid}</h6>
        <img
          src="bin.svg"
          class="w-4 h-4 float-right cursor-pointer"
          alt="Delete icon"
          on:click={deleteUser} />
      </div>
    {/if}
  </div>
</div>
