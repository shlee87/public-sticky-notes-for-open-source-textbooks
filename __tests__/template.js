const timeout = 5000;
const browser = globalThis.__BROWSER_GLOBAL__;

// Function to get the id of the extension to be able to navigate to the extension page and interact with it
const getExtensionId = async (browser) => {
    const targets = await browser.targets();
    const extensionTarget = targets.find(target => target.type() === 'service_worker');
    const partialExtensionUrl = extensionTarget.url() || '';
    const [, , extensionId] = partialExtensionUrl.split('/');
    return extensionId;
};

// Start of the feature test
// Describe the feature
describe(
    '/ (Feature Name)',
    () => {
        let page;
        beforeAll(async () => {
            page = await globalThis.__BROWSER_GLOBAL__.newPage();
            await page.goto('https://google.com');
        }, timeout);

        // Test Case 1
        it("Open Chrome Extension", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/popup.html`);

            // Focuses the page
            await page.bringToFront();

            // Write Test here ...
            const url = page.url();
            expect(url).toEqual(`chrome-extension://${extensionId}/popup.html`);
        })
    },
    timeout,
);