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

## Project
- Name: Swag Labs
- Website: https://www.saucedemo.com/
- Implemented necessary test cases for [login page](https://github.com/namnh663/testcafe/blob/master/tests/test_suite/login-test.js) and [home page](https://github.com/namnh663/testcafe/blob/master/tests/test_suite/home-test.js)

## File Structure

<img width="204" alt="Screenshot 2022-12-04 at 04 26 56" src="https://user-images.githubusercontent.com/74748329/205463281-9c7c5e93-b335-4804-9b12-b6d6c5f3f8ec.png">

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

<img width="760" alt="Screenshot 2022-12-04 at 04 21 35" src="https://user-images.githubusercontent.com/74748329/205463291-47fb4b5d-466e-4b12-a2df-cdd45ff7e022.png">

## Authentication and Roles

As your test suite grows, you might prefer to use [**User Roles**](https://testcafe.io/documentation/402845/guides/intermediate-guides/authentication#user-roles) — an easier way to manage user authentication.

## Use reporters Tesults

<img width="1436" alt="Screenshot 2022-12-04 at 03 39 46" src="https://user-images.githubusercontent.com/74748329/205463308-5a5887ca-4247-4e3b-8c42-5ce2f72267c6.png">

**Scripts:** `testcafe safari tests/test_suite -r tesults -- tesults-target=YOUR_KEY`
