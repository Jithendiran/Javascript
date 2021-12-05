/**
 * Documenter   : E.K.Jithendiran
 * Date         : 02-11-2021
 * 
 * Export and consuming
 */

 const imp = require('./exports')  

 console.log(imp.math.modulous(-8));//8
 console.log(imp.math.sub(3,2));//1

 const {hy,PI} = require('./exports')
 console.log(hy);//hi hello
 console.log(PI);//3.14