const timeout = 5000;
const browser = globalThis.__BROWSER_GLOBAL__;

const getExtensionId = async (browser) => {
    const targets = await browser.targets();
    const extensionTarget = targets.find(target => target.type() === 'service_worker');
    const partialExtensionUrl = extensionTarget.url() || '';
    const [, , extensionId] = partialExtensionUrl.split('/');
    return extensionId;
};

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await globalThis.__BROWSER_GLOBAL__.newPage();
            await page.goto('https://google.com');
        }, timeout);

        // Test Cases
        it("Success Test", async () => {
            const extensionId = await getExtensionId(browser);

            await page.goto(`chrome-extension://${extensionId}/popup.html`);
            await page.bringToFront();
            await page.waitForSelector('[id="profileTab"]');
            const textEl = await page.$('[id="profileTab"]')
            const text = await textEl.evaluate((e) => e.innerText);
            console.log("string", text);
            expect(text).toEqual(expect.stringContaining("Profile"));
        })
    },
    timeout,
);