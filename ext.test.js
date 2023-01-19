import puppeteer from "puppeteer";
const path = require('path');
const EXTENSION_PATH = path.join(__dirname, "sticky-chrome-extension");

const getExtensionId = async (browser) => {
    const targets = await browser.targets();
    const extensionTarget = targets.find(target => target.type() === 'service_worker');
    const partialExtensionUrl = extensionTarget.url() || '';
    const [, , extensionId] = partialExtensionUrl.split('/');
    return extensionId;
};

let browserArray = [];
describe("Test Extension", () => {
    afterAll(async () => {
        console.log("clean up");
        try {
            await Promise.all(
                browserArray.map(async (browser) => {
                    try {
                        const closeBrowser = await browser.close();
                    } catch (e) {
                        //no-op
                    }
                })
            );
        } catch (e) {
            //no-op
        }
    });

    // Test Cases
    it("First Test", async () => {
        const browser = await puppeteer.launch({
            headless: false,
            devtools: true,
            args: [
                `--disable-extensions-except=${EXTENSION_PATH}`,
                `--load-extension=${EXTENSION_PATH}`,
                `--user-agent-PuppeteerAgent`,
            ],
        });

        browserArray.push(browser);

        var [page] = await browser.pages();
        await page.goto(`https://google.com`);
        const extensionId = await getExtensionId(browser);

        await page.goto(`chrome-extension://${extensionId}/popup.html`);
        await page.bringToFront();
        await page.waitForSelector('[id="homeTab"]');
        const textEl = await page.$('[id="homeTab"]')
        console.log(textEl);
        const text = await textEl.evaluate((e) => e.innerText);
        console.log("string", text);
        expect(text).toEqual(expect.stringContaining("Home"));
    });
});