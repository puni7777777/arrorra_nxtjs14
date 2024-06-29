const express = require('express');
const app = express();
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const dir = '../(pages)/allphotos/'; // path directory
const file_var = "file_name"; // variable name of array of names of files in the folder
let arr_imports = "";
let arr_exports = "";

const watcher = chokidar.watch(dir, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true, // keep watching even if there are errors
    awaitWriteFinish: {
        stabilityThreshold: 2000, // wait 2 seconds before considering a file written
        pollInterval: 100 // poll every 100ms
    }
});

watcher.on('change', () => {
    console.log(`Folder changed, re-running script...`);
    generateFileImports();
});

function generateFileImports() {
    console.log(`Folder changed, re-running script...`);

    fs.readdirSync(dir).forEach((file, index) => {
        try {
            arr_imports += `import p${index + 1} from '${dir}${file}' \n`; // import statements
        } catch (err) {
            console.error(`Failed to import ${dir}${file}:`, err);
        }
    });

    arr_exports += `const ${file_var} = [`;
    fs.readdirSync(dir).forEach((file, index) => {
        arr_exports += ` p${index + 1} ,`;
    });
    arr_exports += `]\n`;
    arr_exports += `export default ${file_var}`;

    let arr = arr_imports + arr_exports;

    try {
        fs.writeFileSync('./File_imports.js', arr);
        console.log('Files imported Successfully...');
    } catch (err) {
        console.error(`Failed to write file:`, err);
    }
}

// Serve the generated File_imports.js file
app.get('/File_imports.js', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    fs.createReadStream('./File_imports.js').pipe(res);
});

// Start the server
app.listen(process.env.PORT || "8080", () => {
    console.log('Server listening on port 8080');
});