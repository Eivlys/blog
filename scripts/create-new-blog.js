const { access, constants, mkdir } = require('node:fs/promises');
const { writeFile } = require('node:fs');
const { argv } = require('node:process');

const slug = argv[2];
const today = new Date();
const directoryPath = `./public/content/${slug}`;

if (!slug) {
    console.error('Need a slug');
} else {
    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
        console.error(
            'Slug must contain only lowercase letters, numbers and hyphens'
        );
        process.exit(1);
    }

    // Validate date format
    if (isNaN(today.getTime())) {
        console.error('Invalid date');
        process.exit(1);
    }

    // markdown content
    const markdownContent = `---
slug: ${slug}
date: ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}
title: 
tag: 
---

`;

    // create file
    async function createDirectory(path) {
        try {
            await access(path, constants.F_OK);
            console.error(`File Exist!`);
        } catch (error) {
            await mkdir(path, { recursive: true });
            writeFile(
                `${path}/index.md`,
                markdownContent,
                {
                    overwrite: false,
                },
                (err) => {
                    if (err) {
                        console.log('fs.writeFile:', err);
                    } else {
                        console.log('Blog Created!');
                    }
                }
            );
        }
    }

    createDirectory(directoryPath);
}
