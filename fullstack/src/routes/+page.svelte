<script lang="ts">
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
</script>

<h1 class="text-3xl font-bold underline">{data.message.hello}</h1>
