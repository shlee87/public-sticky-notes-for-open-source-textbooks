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
    '/ (Main page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await globalThis.__BROWSER_GLOBAL__.newPage();
            await page.goto('https://google.com');
        }, timeout);

        it("Home Button", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/Main-Page.html`);

            // Focuses the page
            await page.bringToFront();

            // Click Home button, read home text
            await page.waitForSelector("#Home");
            await page.click("#Home");
            await page.waitForSelector("#HomeText");

            const element = await page.$("#HomeText");
            const text = await element.evaluate(el => el.textContent);

            expect(text).toEqual("Sample Headline");

        })

        it("Profile Button", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/Main-Page.html`);

            // Focuses the page
            await page.bringToFront();

            // Click Profile button, read text
            await page.waitForSelector("#ProfileButton");
            await page.click("#ProfileButton");
            await page.waitForSelector("#ProfileText");

            const element = await page.$("#ProfileText");
            const text = await element.evaluate(el => el.textContent);

            expect(text).toEqual("Profile Page");

        })

        it("Options Button", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/Main-Page.html`);

            // Focuses the page
            await page.bringToFront();

            // Click Options button, read text
            await page.waitForSelector("#OptionsButton");
            await page.click("#OptionsButton");
            await page.waitForSelector("#OptionsText");

            const element = await page.$("#OptionsText");
            const text = await element.evaluate(el => el.textContent);

            expect(text).toEqual("Options Page");

        })

        it("Logout Button", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/Options-Page.html`);

            // Focuses the page
            await page.bringToFront();

            // Click Options button, read text
            await page.waitForSelector("#LogoutButton");
            await page.click("#LogoutButton");

            const url = page.url();

            expect(url).toEqual(`chrome-extension://${extensionId}/Login-Page.html`);

        })

        // More Tests For Feature below ...
    },
    timeout,
);