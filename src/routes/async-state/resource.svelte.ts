export function resource<T>(fn: () => Promise<T>) {
	let current = $state.raw();
	let loading = $state.raw(false);
	let error: Error | null = $state.raw(null);

	$effect(() => {
		loading = true;
		fn()
			.then((result) => {
				loading = false;
				error = null;
				current = result;
			})
			.catch((e) => {
				loading = false;
				error = e;
			});
	});

	return {
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		get current() {
			return current;
		}
	};
}
