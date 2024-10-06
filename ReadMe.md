# Android App Testing with WebdriverIO and BrowserStack

## Project Overview

This project focuses on testing an Android app using WebdriverIO in conjunction with BrowserStack. The main objective is to automate Android app testing and run the tests on real devices in the cloud via BrowserStack.

### Tested Scenarios:

- Opening the application.
- Scrolling to the desired element.
- Clicking on various UI elements (buttons, images).
- Verifying the presence and correctness of text in specific elements.

## Setup

To run the tests, you need to install the dependencies:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-link.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project-directory
   ```

3. Install all required dependencies:
   ```bash
   npm install
   ```

## How to Run Tests

### Locally

To run the tests locally, use the following command:

```bash
npm run test:browserstack
```

### On BrowserStack

To run the tests on BrowserStack, make sure your BrowserStack credentials are correctly set in environment variables or in your `wdio.conf.js` file:

```bash
export BROWSERSTACK_USERNAME='your_browserstack_username'
export BROWSERSTACK_ACCESS_KEY='your_browserstack_access_key'
```

Then, run the tests using the following npm script:

```bash
npm run test:browserstack
```

## Project Structure

- `test/`: Contains test files.
- `pageobjects/`: Contains Page Object classes to encapsulate UI element locators and actions.
- `wdio.conf.js`: WebdriverIO configuration file, specifying BrowserStack integration, desired capabilities, and test setup.

## Contact

If you have any questions or need further assistance, feel free to reach out to the project maintainer.
