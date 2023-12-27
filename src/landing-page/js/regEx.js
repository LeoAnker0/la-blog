export function replaceSections(queryObject) {
    let content = queryObject.content;
    const replacements = queryObject.replacements;

    for (const [placeholder, value] of Object.entries(replacements)) {
        const regex = new RegExp(`\\{\\{${placeholder}\\}\\}`, 'g');
        content = content.replace(regex, value);
    }

    return content
}