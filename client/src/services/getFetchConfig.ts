export const getFetchConfig = (method: "POST" | "DELETE" | "PUT", content?: unknown) => ({
	method,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify({
		content
	})
})