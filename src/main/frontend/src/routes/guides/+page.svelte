<script lang="ts">
  import Panel from '$lib/components/ui/Panel.svelte'
  import Loading from '$lib/components/Loading.svelte'

  let { data } = $props()
  
</script>

<header>
  <h1>Guides</h1>

  <div>
    <a class="btn" href="/guides/new">Create Guide</a>
  </div>
</header>

<Panel>
  <Loading />
</Panel>
