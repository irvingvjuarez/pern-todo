export const fetchRequest = async (url: string, config?: RequestInit) => {
	const request = await fetch(url, config);
	const data = await request.json();
	return data
}