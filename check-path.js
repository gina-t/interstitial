import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.resolve(__dirname, './client/dist');

console.log(`Current working directory: ${process.cwd()}`);
console.log(`Script directory (__dirname): ${__dirname}`);
console.log(`Client build path: ${clientBuildPath}`);

// Check if directory exists
if (fs.existsSync(clientBuildPath)) {
  console.log(`Path exists: ${clientBuildPath}`);
  
  // Check for index.html
  const indexPath = path.join(clientBuildPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log(`index.html exists at: ${indexPath}`);
  } else {
    console.log(`index.html NOT found at: ${indexPath}`);
    
    // List contents
    console.log('\nContents of build directory:');
    fs.readdirSync(clientBuildPath).forEach(file => {
      console.log(` - ${file}`);
    });
  }
} else {
  console.log(`Path does NOT exist: ${clientBuildPath}`);
  
  // List parent directory contents
  const parentDir = path.dirname(clientBuildPath);
  console.log(`\nContents of parent directory (${parentDir}):`);
  fs.readdirSync(parentDir).forEach(file => {
    console.log(` - ${file}`);
  });
}