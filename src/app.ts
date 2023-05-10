require('console-stamp')(console);
import * as os from 'os';

const numberOfCores = os.cpus().length;
const systemRam = os.totalmem();
const numWorkers = Math.max(Math.min(Math.max(numberOfCores - 2, 1), Math.max(Math.abs(systemRam / 1024 / 1024 / 1024) - 2, 1)), 1);
// const numLegacyWorkers = parseInt(process.env.LEGACY_WORKERS, 10) || 1;
// const processManager = new ProcessManager(numWorkers, numLegacyWorkers);

console.log(numWorkers);
console.log(os);

// function colorTrace(msg: string, color: string) {
//    console.log("%c" + msg, "color:" + color + ";font-weight:bold");
// }

// colorTrace(JSON.stringify(os), "blue");