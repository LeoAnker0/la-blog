// custom-title.js
import TemplateStretchedTitleY from '../html/title-stretched-y.html?raw';
import { replaceSections } from './regEx.js';

class StretchedTextY extends HTMLElement {
    constructor() {
        super();

        // Get colors attribute value
        const colours = this.getAttribute('colours') || '#C8001D, #1B00FF';
        const [colour1, colour2] = colours.split(',');
        const heights = this.getAttribute('heights') || '8, 4';
        const [height1, height2] = heights.split(',');
        const title = this.textContent;

        // Replace content in the html template
        const replacementQuery = {
            content: TemplateStretchedTitleY,
            replacements: {
                title: title,
                totalHeight: height1,
                cutHeight: height2,
                colour1,
                colour2
            }
        }
        const modifiedHTML = replaceSections(replacementQuery);

        // Append the html elements to the shadow DOM
        this.innerHTML = modifiedHTML;
    }
}


export function setupWebComponents() {
    // Define the custom elements
    customElements.define('title-stretch-y', StretchedTextY);
}