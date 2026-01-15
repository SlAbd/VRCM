const fs = require('fs');
const path = require('path');

// Copy assets from public to out
const sourceDir = path.join(__dirname, 'public', 'assets', 'vrcm');
const outDir = path.join(__dirname, 'out', 'assets', 'vrcm');

console.log('Copying assets from', sourceDir, 'to', outDir);

if (fs.existsSync(sourceDir)) {
  // Create out directory if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'out'))) {
    fs.mkdirSync(path.join(__dirname, 'out'), { recursive: true });
  }
  if (!fs.existsSync(path.join(__dirname, 'out', 'assets'))) {
    fs.mkdirSync(path.join(__dirname, 'out', 'assets'), { recursive: true });
  }
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Copy all files
  const files = fs.readdirSync(sourceDir);
  let copiedCount = 0;
  files.forEach((file) => {
    const sourceFile = path.join(sourceDir, file);
    const outFile = path.join(outDir, file);
    fs.copyFileSync(sourceFile, outFile);
    copiedCount++;
    console.log(`✓ Copied ${file}`);
  });
  console.log(`\n✓ Successfully copied ${copiedCount} files to ${outDir}`);
} else {
  console.error(`✗ Source directory not found: ${sourceDir}`);
}
