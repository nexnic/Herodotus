/**
 *
 * @param {*} key
 * @example
 * ```js
 * getItem @param
 * pass
 * @returns value
 * fails
 * @returns false
 *
 * ```
 */
export const load = (key) => {
	try {
		let value = localStorage.getItem(key);
		return value;
	} catch {
		return false;
	}
};
