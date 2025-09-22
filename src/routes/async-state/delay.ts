export function delay<T>(result: T, error = false): Promise<T> {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			if (error) {
				reject(new Error('failed request'));
			} else {
				resolve(result);
			}
		}, 1000)
	);
}
