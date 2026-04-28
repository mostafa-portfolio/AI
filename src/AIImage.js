


export async function query(data) {
    const config = {
  		API_KEY: "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"
    };
	const response = await fetch(
		"https://router.huggingface.co/v1/chat/completions",
		{
			headers: {
				Authorization: `Bearer ${config.API_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

/* .then((response) => {
    console.log(JSON.stringify(response.choices[0].message.content));
});
 */

