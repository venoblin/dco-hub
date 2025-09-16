<script lang="ts">
  import { cleanTime } from '$lib/utils'
  
  let { guide } = $props() 
</script>

<div class="guide-card">
  <div>
    <a class="title" href={`/guides/${guide.id}`}>{guide.title} →</a>
    <p class="author muted-text">By {guide.author}</p>
    <p class="created-at muted-text">Created {cleanTime(guide.createdAt)}</p>
    {#if guide.updatedAt !== guide.createdAt}
      <p class="updated-at muted-text">Updated {cleanTime(guide.updatedAt)}</p>
    {/if}
  </div>
  <div>
    <p class="content">{guide.content}</p>
  </div>
</div>