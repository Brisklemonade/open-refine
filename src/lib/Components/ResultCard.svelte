<script>
	import { Card, Text, Progress, Group, Button, Space } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';

	export let keywords = '';
	let copied = false;
	let onCopy = () => {
		copied = true;
		setTimeout(function () {
			copied = false;
		}, 1000);
	};
</script>

<Card withBorder radius="md" padding="xl">
	<Group position="center" direction="column" grow>
		<Text>{keywords}</Text>
		<Space h="xl" />
		<Button
			use={[[clipboard, keywords]]}
			on:useclipboard={onCopy}
			color={copied ? 'green' : 'blue'}
		>
			{copied ? 'copied' : 'Click To Copy Keywords'}
		</Button>
	</Group>
</Card>
