/**
 *
 * @example
 * ```js
 * try
 * clean localstorage
 * pass
 * @returns true
 * fails
 * @returns fail
 * ```
 */

export const cleanall = () => {
	try {
		localStorage.clear;
		return true;
	} catch {
		return false;
	}
};
