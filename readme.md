# Why I choose TestCafe

- Does not require WebDriver or other testing software. It runs on Node.js and uses the browsers you already have.
- Freeing you from the need to insert manual timeouts and use cumbersome boilerplate expressions. You’ll spend less time tracking down annoying issues and more time doing what matters most.
- Freely available and distributed under the MIT license.
- Intuitive syntax makes teams more productive from day one.
- Cross-browser testing out-of-the-box.

# Getting Started

## Prerequisites
- node v18.2.1
- npm 8.19.2
- testcafe 2.1.0

## File Structure



## Create a new test

1. TestCafe tests are Node.js scripts. Create a new [TypeScript](https://testcafe.io/documentation/402824/guides/intermediate-guides/typescript-and-coffeescript) or JavaScript file, and open the file in the text editor.
2. TestCafe test files consist of _fixtures_ and _tests_. A fixture is a groups of tests that share the same starting URL. Invoke the `fixture` keyword to create a new fixture.
3. Use the [page](https://testcafe.io/documentation/402831/guides/basic-guides/test-structure#declare-a-fixture) method to set the starting URL of the fixture.

    ```
    fixture('Getting Started')
        .page('https://mail.google.com/');
    
    test('My first test', async t => {
        // Test code goes here
    });
    ```

## Use the Page Object Model



## Authentication and Roles

As your test suite grows, you might prefer to use [**User Roles**](https://testcafe.io/documentation/402845/guides/intermediate-guides/authentication#user-roles) — an easier way to manage user authentication.

## Use reporters Tesults



**Scripts:** `testcafe safari tests/test_suite -r tesults -- tesults-target=YOUR_KEY`