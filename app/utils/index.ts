const getLanguage = () => {
    let language = 'en';
    if (window.navigator.languages) {
        language = window.navigator.languages[0];
    } else {
        language = window.navigator?.userLanguage || window.navigator.language;
    }
    return language;
}

/**
 * Read a markdown file and extract its front matter as JSON.
 */
function extractProperties(content: string) {
    if (!content) return {};
    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontMatterRegex);

    if (match) {
        const frontMatter = match[1];
        const lines = frontMatter.split('\n');
        const result = {} as { [key: string]: string };

        lines.forEach((line: string) => {
            const [key, value] = line.split(':').map((part) => part.trim());
            if (key && value) {
                result[key] = value;
            }
        });

        return result;
    } else {
        return {};
    }
}

export { getLanguage, extractProperties }