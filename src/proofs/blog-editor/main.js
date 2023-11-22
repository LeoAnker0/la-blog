import './css/style.css';
import coreCode from './html/core.html?raw';
import editor from './html/editor.html?raw';

function main() {
    const app = document.getElementById("app");
    const core = document.getElementById("core");
    app.innerHTML = coreCode;

    //setTimeout(hideTinyBranding, 200);
    hideTinyBranding();
}


function hideTinyBranding() {
    function waitForElement(selector, callback) {
        const element = document.querySelector(selector);

        if (element) {
            callback(element);
        } else {
            setTimeout(() => {
                waitForElement(selector, callback);
            }, 5); // Adjust the delay (in milliseconds) between checks if needed
        }
    }

    // Usage:
    waitForElement('.tox-promotion', (element) => {
        element.remove();
    });

    waitForElement('.tox-statusbar__right-container', (element) => {
        element.remove();
    });
}


main();