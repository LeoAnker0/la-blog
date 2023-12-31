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
        const stretchFactor = this.getAttribute('stretch-factor') || '2';

        //get assigned classes and add to the new.
        let classes = "";
        this.classList.forEach(className => {
            classes = classes + `${className} `;
        });

        // Replace content in the html template
        const replacementQuery = {
            content: TemplateStretchedTitleY,
            replacements: {
                title: title,
                totalHeight: height1,
                cutHeight: height2,
                colour1,
                colour2,
                stretchFactor: stretchFactor,
                classes
            }
        }
        const modifiedHTML = replaceSections(replacementQuery);

        // Append the html elements to the shadow DOM
        this.outerHTML = modifiedHTML;
    }
}


export function setupWebComponents() {
    // Define the custom elements
    customElements.define('title-stretch-y', StretchedTextY);
}