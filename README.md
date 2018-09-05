# Elements of JS: Functions (Part 1)

Welcome to your first exercise. While I am going to assume you have Node and Yarn installed on your computers, and you have basic knowledge of Git, I am going to explain step by step how to get everything set-up and how to get "unit tests" running.

### Requirements
  - Node
  - Yarn
  - Git

### Instructions for running tests

1. We need to open our Terminal and navigate to the folder where we want to save our exercises. (Some of the key commands for navigation in Unix systems are `cd` and `ls`)
2. Once you are in the right directory, you are going to `git clone` the repo. Running this command will download the repository into the current directory.
```
git clone https://github.com/reneloperena/elements-of-js-functions-p1.git
```
3. Navigate inside the folder
4. Run `yarn` to install our dependencies. This repository uses libraries such as Jest and Babel; we'll learn more about JavaScript modules in the future, for now, know that everytime you download a Repo, you need to run `yarn` to download its dependencies.
```
yarn
```
5. To run the tests, you can run our test script using
```
yarn run test
```
6. Start modifying the `hello.js` file until all tests pass.


## Exercises
1. In `hello.js` you need to define a function called `sayHello` that takes a name as a parameter and returns the string `'Hello {name here}!'`.
2. (BONUS) Find out what are __Template Literals__ in JavaScript and change your code to use them. (Mozilla Developer Network is a great place to find information about JavaScript)
