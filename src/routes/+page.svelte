<script lang="ts">
	import { ResultCard } from '$lib';
	import { createFilter } from '$lib';
	import { Button, Center, Textarea, Group, Title } from '@svelteuidev/core';

	let keywordList = '';

	let finalList: string;
	let showOutput = false;
</script>

<Title color="blue" mt="xl" align="center">Open Refine Keyword Filter Creator</Title>
<Center m={100}>
	<Group position="center" direction="column" grow>
		<Textarea
			placeholder="keyword1, keyword2"
			label="Enter Your Keywords"
			description="Enter the keywords you want to use in your filter in a comma-separated list"
			resize="vertical"
			rows={10}
			bind:value={keywordList}
		/>
		<Button
			on:click={() => {
				finalList = createFilter(keywordList);
				showOutput = showOutput = false ? true : true;
			}}
			fullSize>Submit</Button
		>
	</Group>
</Center>

{#if showOutput}
	<div style="max-width: 80rem; margin: 0 auto;">
		<ResultCard keywords={finalList} />
	</div>
{/if}
