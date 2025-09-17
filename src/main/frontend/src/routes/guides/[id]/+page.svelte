<script lang="ts">
  import { cleanTime } from "$lib/utils"
  
  let { data } = $props()
</script>

<header>
  <h1>{data.guide.title}</h1>

  <div>
    <p class="muted-text">By {data.guide.author}</p>
    <p class="muted-text">Created {cleanTime(data.guide.createdAt)}</p>
    {#if data.guide.updatedAt !== data.guide.createdAt}
      <p class="muted-text">Updated {cleanTime(data.guide.updatedAt)}</p>
    {/if}
  </div>
</header>

<div class="content">{@html data.guide.content}</div>

<style>
  :global {
    .content * {
      max-width: 100%;
    }
  }

</style>