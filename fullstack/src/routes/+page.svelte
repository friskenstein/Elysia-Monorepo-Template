<script lang="ts">
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
</script>

<pre class="text-3xl font-bold">{JSON.stringify(data,null,4)}</pre>
