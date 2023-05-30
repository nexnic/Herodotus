/**
 *
 * @param {*} key
 *
 * @example
 * ```js
 * try
 * remove localstorage @param
 * pass
 * @returns true
 * failse
 * @returns false
 * ```
 */

export const remove = (key) => {
	try {
		localStorage.removeItem(key);
		return true;
	} catch {
		return false;
	}
};
