/**
 *
 * @param {string} key
 * @param {string} value
 *
 * @example
 * ```js
 * @param key
 * Name of meta tag
 *
 * @param value
 * Content need to be add
 *
 * ```
 */
export const setMetaTag = (key, value) => {
	document
		.querySelector(`meta[name=${key}]`)
		.setAttribute("content", `${value}`);
};
