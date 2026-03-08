# Notes

A simple app to write notes.

## Instructions for Build and Use

[Software Demo] https://youtu.be/8gQf-fdSrR8

Steps to build and/or run the software:

1. I wrote the program in JavaScript
2. Then I changed it to TypeScript

Instructions for using the software:

1. Select Live Server in VScode

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

1.  VScode
2.  Live Server Extension version 5.7.10
3.  Node: search node download. That will allow npm to work in the terminal
4.  In the terminal:
    a. npm install typescript
    b. npm install typescript --save-dev
    i. this will install the libraries and package.json, package-lock.json, node_modules
    ii. be sure to add dotignor
    c. npx tsc nameOfFile.ts 1. typescript compile extension tool. This will run the typescript through this and convert it into JavaScript. 2. When I t is converted back to JS it verifies that the types are correct
    ii. A new file is made with the same file name but .js instead of .ts
    iii. To run in terminal: 1. Node filename.js
    d. npx tsc –init
    i. creates tsconfig.json 1. this is where config can be edited 2. Use: ~ npx tsc notes/notes.ts ~ in the terminal to change ts to js.

## Useful Websites to Learn More

I found these websites useful in developing this software:

- W3 SChools https://www.w3schools.com/typescript/typescript_getstarted.php
- Geeks for Geeks https://www.geeksforgeeks.org/dsa/introduction-of-object-oriented-programming/
- Sling Academy https://www.slingacademy.com/article/array-types-in-typescript-a-complete-guide/*

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

- [ ] Finish changing the JavaScript to TypeScript.
