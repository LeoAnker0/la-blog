import './css/style.css';
import coreCode from './html/core.html?raw';
import editor from './html/editor.html?raw';

function main() {
    const app = document.getElementById("app");
    const core = document.getElementById("core");
    app.innerHTML = coreCode;
}


main();