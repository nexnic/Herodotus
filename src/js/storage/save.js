/**
 *
 * @param {String} key
 * @returns
 *
 * @example
 * ```js
 * try
 * save @param key to localstorage
 * pass
 * @returns true
 * fail
 * @return false
 * ```
 *
 */

export const save = (key, array) => {
	try {
		localStorage.setItem(key, array);
		return true;
	} catch {
		return false;
	}
};
