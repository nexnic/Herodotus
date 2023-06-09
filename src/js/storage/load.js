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
export const load = (Value) => {
	try {
		return JSON.parse(localStorage.getItem(Value));
	} catch {
		return false;
	}
};
