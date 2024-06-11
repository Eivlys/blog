const fs = require('fs');
const path = require('path');

/**
 * Recursively find all markdown files in a directory.
 * @param {string} dir - The directory to search.
 * @param {function} callback - The callback to execute for each markdown file found.
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
 * @param {string} filePath - The path of the markdown file.
 * @returns {object|null} The extracted front matter as JSON, or null if extraction fails.
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
 * Write JSON data to a file.
 * @param {string} filePath - The path of the JSON file to write to.
 * @param {object} data - The JSON data to write.
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

const directoryPath = './public/content';
const outputFilePath = './json/blogList.json';
const results = [];

findMarkdownFiles(directoryPath, (filePath) => {
    if (!filePath) return;
    const frontMatter = extractFrontMatter(filePath);
    if (frontMatter) {
        results.push(frontMatter);
    }
    console.log('findMarkdownFiles ~ results:', results);
    writeJsonToFile(outputFilePath, results);
});

console.log('Extracted JSON:', JSON.stringify(results, null, 2));
