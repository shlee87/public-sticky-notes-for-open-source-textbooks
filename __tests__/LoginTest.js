const timeout = 5000000;
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
    '/ (Login Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await globalThis.__BROWSER_GLOBAL__.newPage();
            await page.goto('https://google.com');
        }, timeout);

        // Chrome Extension Opens
        it("Login Button", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/Login-Page.html`);

            // Focuses the page
            await page.bringToFront();

            // Click login button
            await page.waitForSelector("#LoginButton");
            await page.click("#LoginButton");
            const url = page.url();

            expect(url).toEqual(`chrome-extension://${extensionId}/Main-Page.html`);

        })

        // More Tests For Feature below ...
    },
    timeout,
);