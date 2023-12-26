<script lang="ts">
	import { ResultCard } from '$lib';
	import { Button, Center, Textarea, Group, Title } from '@svelteuidev/core';

	let keywordList = '';

	function createFilter(input: string): string {
		// Initialize the result string
		let result = 'false';

		// Split the input string into individual keywords
		let keywords = input.split(',').map((keyword) => keyword.trim());

		// Construct nested if statements
		for (let i = keywords.length - 1; i >= 0; i--) {
			const keyword = keywords[i];
			const keywordLower = keyword.toLowerCase();

			result = `if(value.contains("${keyword}"), true, if(value.contains("${keywordLower}"), true, ${result}))`;
		}

		return result;
	}
	let finalList: string;
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
			}}
			fullSize>Submit</Button
		>
	</Group>
</Center>

<div style="max-width: 80rem; margin: 0 auto;">
	<ResultCard keywords={finalList} />
</div>
