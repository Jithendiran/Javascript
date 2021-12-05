/**
 * Documenter   : E.K.Jithendiran
 * Date         : 02-11-2021
 * 
 * Export and consuming
 */


const sub = (a,b) => a - b

const modulous = ( a ) => a >= 0 ? a : -1 * a

exports.hy = "hi hello"
exports.PI = 3.14


module.exports.math = {sub,modulous}
