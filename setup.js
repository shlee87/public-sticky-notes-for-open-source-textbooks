const { mkdir, writeFile } = require('fs').promises;
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');
// Enter path to extension folder here
const EXTENSION_PATH = "C:/Users/Evan/source/repos/StickIT/sticky-chrome-extension";


const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function () {
    const browser = await puppeteer.launch({
        headless: false,
        devtools: true,
        args: [
            `--disable-extensions-except=${EXTENSION_PATH}`,
            `--load-extension=${EXTENSION_PATH}`,
        ],
    });    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    globalThis.__BROWSER_GLOBAL__ = browser;

    // use the file system to expose the wsEndpoint for TestEnvironments
    await mkdir(DIR, { recursive: true });
    await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};