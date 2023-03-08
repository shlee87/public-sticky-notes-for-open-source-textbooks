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

        //// Extension Opens to Login page if not logged in
        //it("Login Navigation", async () => {
        //    // Get the extension id if needed
        //    const extensionId = await getExtensionId(browser);

        //    // Logout if neccessary
        //    await page.goto(`chrome-extension://${extensionId}/Options-Page.html`);
        //    await page.click('#logout-button');

        //    // Navigate to the page needed
        //    // Currently navigates to the extension page, but can be changed to any url
        //    await page.goto(`chrome-extension://${extensionId}/Main-Page.html`);

        //    // Click login button
        //    const url = page.url();

        //    expect(url).toEqual(`chrome-extension://${extensionId}/Login-Page.html`);

        //})
        // Test Admin Login Succeeds
        it("Successful Login", async () => {
            // Get the extension id if needed
            const extensionId = await getExtensionId(browser);

            // Logout if neccessary
            try {
                await page.goto(`chrome-extension://${extensionId}/Options-Page.html`);
                await page.click('#logout-button');
            }
            catch (e) { };

            // Navigate to the page needed
            // Currently navigates to the extension page, but can be changed to any url
            await page.goto(`chrome-extension://${extensionId}/Login-Page.html`);

            // Focuses the page
            await page.bringToFront();

            // Fill in Admin Login
            await page.type('#username-input', 'admin');
            await page.type('#password-input', 'Stickit1!');

            // Login and check url is the main page
            await page.click('#LoginButton');
            await page.waitForSelector('#HomeText');

            const url = page.url();
            expect(url).toEqual(`chrome-extension://${extensionId}/Main-Page.html`);
        })


        //// Test wrong user info
        //it("Fail to Login", async () => {
        //    // Get the extension id if needed
        //    const extensionId = await getExtensionId(browser);

        //    // Logout if neccessary
        //    try {
        //        await page.goto(`chrome-extension://${extensionId}/Options-Page.html`);
        //        await page.click('#logout-button');
        //    }
        //    catch (e) { };

        //    // Navigate to the page needed
        //    // Currently navigates to the extension page, but can be changed to any url
        //    await page.goto(`chrome-extension://${extensionId}/Login-Page.html`);

        //    // Focuses the page
        //    await page.bringToFront();

        //    // Fill in Admin Login
        //    await page.type('#username-input', 'admin');
        //    await page.type('#password-input', 'admin');

        //    // Login and check url is the main page
        //    await page.click('#LoginButton');

        //    expect(page).toMatchElement('#error-message', { visible: true });
        //})
    },
    timeout,
);