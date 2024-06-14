/**
 * Array routes untuk akses public
 * dan tidak butuh authentikasi
 * @type {string[]}
 */

export const publicRouting = ["/", "/portfolio", "/product","/login","/mitra","/playground"];
;

/**
 * Array routes untuk redirect
 * butuh authentikasi
 * tambahkan register untuk manajemen public user
 * @type {string[]}
 */

export const authRouting = ["/login"];


/**
 * routes untuk akses api
 * butuh authentikasi
 * @type {string}
 */

export const apiAuthRouting = "/api/auth";

/**
 * Array routes untuk akses private
 * butuh authentikasi
 * @type {string[]}
 */
export const privateRouting = [
    "/panel"
];



/**
 * default page setelah login
 * @type {string}
 */

export const DEFAULT_LOGIN = "/panel";





