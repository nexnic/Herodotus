/**
 *
 * @param {string} email
 *
 * @example
 * ```js
 * regex key
 * test mail contains
 * if true
 * @returns true
 * else
 * @returns falses
 *
 * ```
 *
 */
export const validMail = (email) => {
	const regKey = /^[a-z0-9._%+-]+@(noroff.no|stud.noroff.no)$/;
	let check = regKey.test(email);
	if (check) {
		return true;
	} else {
		return false;
	}
};

export const ValidPWD = (pwd) => {
	const regKey = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	let check = regKey.test(pwd);
	if (check) {
		return true;
	} else {
		return false;
	}
};
