/**
 * Documenter   : E.K.Jithendiran
 * Date         : 02-11-2021
 * 
 * Export and consuming
 */

//export part

module.exports = (a, b) => a + b

// fun is not exported
const fun = () => "This fun not exported"

console.log(module);
/*
O/p
Module {
  id: '.',
  path: '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/Jithendiran/nodeJs/mileStone2/exportAndConsumingModules',
  exports: [Function (anonymous)],
  parent: null,
  filename: '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/Jithendiran/nodeJs/mileStone2/exportAndConsumingModules/addExport.js',
  loaded: false,
  children: [],
  paths: [
    '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/Jithendiran/nodeJs/mileStone2/exportAndConsumingModules/node_modules',
    '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/Jithendiran/nodeJs/mileStone2/node_modules',
    '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/Jithendiran/nodeJs/node_modules',
    '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/Jithendiran/node_modules',
    '/home/jidesh/Work/Calibraint/Tech-Abecedarians-2k21/node_modules',
    '/home/jidesh/Work/Calibraint/node_modules',
    '/home/jidesh/Work/node_modules',
    '/home/jidesh/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
*/