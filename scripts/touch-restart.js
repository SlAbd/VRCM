const fs = require('fs');
const path = require('path');

const tmpDir = path.join(process.cwd(), 'tmp');
const restartFile = path.join(tmpDir, 'restart.txt');

fs.mkdirSync(tmpDir, { recursive: true });

fs.writeFileSync(
  restartFile,
  `Restart requested at ${new Date().toISOString()}\n`,
  'utf8'
);

console.log(`Passenger restart file updated: ${restartFile}`);