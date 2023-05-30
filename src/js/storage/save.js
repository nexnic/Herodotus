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

export const save = (key) => {
	try {
		localStorage.setItem(key);
		return true;
	} catch {
		return false;
	}
};
