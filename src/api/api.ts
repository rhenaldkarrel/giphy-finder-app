export const getData = async (search: string) => {
	try {
		const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`;
		const res = await fetch(url, { method: "GET" });
		const gifs = await res.json();
		return gifs.data;
	} catch (err) {
		console.log(err);
	}
};

export const getTrending = async (): Promise<any[]> => {
	try {
		const url = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=15`;
		const res = await fetch(url, { method: "GET" });
		const gifs = await res.json();
		return gifs.data;
	} catch (err) {
		throw err;
	}
};
