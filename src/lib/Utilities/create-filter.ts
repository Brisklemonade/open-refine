export function createFilter(input: string): string {
	// Initialize the result string
	let result = 'false';

	// Split the input string into individual keywords
	const keywords = input.split(',').map((keyword) => keyword.trim());

	// Construct nested if statements
	for (let i = keywords.length - 1; i >= 0; i--) {
		const keyword = keywords[i];
		const keywordLower = keyword.toLowerCase();

		result = `if(value.contains("${keyword}"), true, if(value.contains("${keywordLower}"), true, ${result}))`;
	}

	return result;
}
