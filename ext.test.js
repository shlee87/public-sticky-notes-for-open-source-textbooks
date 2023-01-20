import puppeteer from "puppeteer";
const path = require('path');
const EXTENSION_PATH = path.join(__dirname, "sticky-chrome-extension");
const CLEAN_UP = true;

const getExtensionId = async (browser) => {
    const targets = await browser.targets();
    const extensionTarget = targets.find(target => target.type() === 'service_worker');
    const partialExtensionUrl = extensionTarget.url() || '';
    const [, , extensionId] = partialExtensionUrl.split('/');
    return extensionId;
};

let browserArray = [];
describe("Test Extension", () => {
    if (CLEAN_UP) {
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
    };

    // Test Cases
    it("Success Test", async () => {
        const browser = await puppeteer.launch({
            headless: false,
            devtools: true,
            args: [
                `--disable-extensions-except=${EXTENSION_PATH}`,
                `--load-extension=${EXTENSION_PATH}`,
                //`--user-agent-PuppeteerAgent`,
            ],
        });

        browserArray.push(browser);

        var [page] = await browser.pages();
        await page.goto(`https://google.com`);
        const extensionId = await getExtensionId(browser);

        await page.goto(`chrome-extension://${extensionId}/popup.html`);
        await page.bringToFront();
        await page.waitForSelector('[id="profileTab"]');
        const textEl = await page.$('[id="profileTab"]')
        const text = await textEl.evaluate((e) => e.innerText);
        console.log("string", text);
        expect(text).toEqual(expect.stringContaining("Profile"));
    });

    it("Fail Test", async () => {
        const browser = await puppeteer.launch({
            headless: false,
            devtools: true,
            args: [
                `--disable-extensions-except=${EXTENSION_PATH}`,
                `--load-extension=${EXTENSION_PATH}`,
                //`--user-agent-PuppeteerAgent`,
            ],
        });

        browserArray.push(browser);

        var [page] = await browser.pages();
        await page.goto(`https://google.com`);
        const extensionId = await getExtensionId(browser);

        await page.goto(`chrome-extension://${extensionId}/popup.html`);
        await page.bringToFront();
        await page.waitForSelector('[id="profileTab"]');
        const textEl = await page.$('[id="profileTab"]')
        const text = await textEl.evaluate((e) => e.innerText);
        console.log("string", text);
        expect(text).toEqual(expect.stringContaining("NotProfile"));
    });
});