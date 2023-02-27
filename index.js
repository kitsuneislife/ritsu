const chalk = require("cli-color");
const now = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo", hour12: false });

console.log(chalk.yellow("=========================================="));
console.log(chalk.yellow(now));
console.log(chalk.yellow("System starting up..."));
console.log(chalk.yellow("=========================================="));

const Loaders = require("./src/Loaders.js");
Loaders.load();

/*
            LISTA DE MÓDULOS
============================================
node-image-hash          : Grayscale
node-image-hash + jimp   : Error
node-image-hash + canvas : Error
image-hash               : Grayscale
============================================
*/