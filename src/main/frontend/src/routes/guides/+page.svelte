<script lang="ts">
  import Panel from '$lib/components/ui/Panel.svelte'

  let { data } = $props()

</script>

<header>
  <h1>Guides</h1>

  <div>
    <a class="btn" href="/guides/new">Create Guide</a>
  </div>
</header>

<Panel>
  {#if data.guides.length > 0}
    <p>Guides</p>
  {:else}
    <p>There are no guides!</p>
  {/if}
</Panel>
