const fs = require('fs');
const path = require('path');

const directoryPath = './public/content';
const outputFilePath = './json/blogList.json';
const results = [];

/**
 * Recursively find all markdown files in a public/content.
 */
function findMarkdownFiles(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach((file) => {
            const fullPath = path.join(dir, file);

            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats of file: ${err}`);
                    return;
                }

                if (stats.isDirectory()) {
                    findMarkdownFiles(fullPath, callback);
                } else if (stats.isFile() && path.extname(fullPath) === '.md') {
                    callback(fullPath);
                }
            });
        });
    });
}

/**
 * Read a markdown file and extract its front matter as JSON.
 */
function extractFrontMatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontMatterRegex);
    // console.log('extractFrontMatter ~ match:', match?.[1]);

    if (match) {
        const frontMatter = match[1];
        const lines = frontMatter.split('\n');
        const result = {};

        lines.forEach((line) => {
            const [key, value] = line.split(':').map((part) => part.trim());
            if (key && value) {
                result[key] = value;
            }
        });

        return result;
    } else {
        console.error(`No front matter found in file: ${filePath}`);
        return {};
    }
}

/**
 * Write JSON data to a bloglist.
 */
function writeJsonToFile(filePath, data) {
    const jsonContent = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonContent, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing JSON to file: ${err}`);
            return;
        }
        console.log(`JSON data successfully written to ${filePath}`);
    });
}

findMarkdownFiles(directoryPath, (filePath) => {
    if (!filePath) return;
    const frontMatter = extractFrontMatter(filePath);
    if (frontMatter) {
        results.push(frontMatter);
    }
    console.log('findMarkdownFiles ~ results:', results);
    writeJsonToFile(outputFilePath, results);
});
