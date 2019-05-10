#! /usr/bin/env node

var shell = require("shelljs");
const fs = require('fs');
const chalk = require('chalk');

const username = process.argv[2]
const testId = process.argv[3]

shell.exec(`git clone git@github.com:lighthouse-labs/assessment-exam-student.git ${testId}`)
shell.cd(testId)
shell.exec(`echo ${username} >> .student-id`)
console.log("Beginning installation... this will take a minute ⏱")
shell.exec("npm install --no-bin-links", {silent: true})
shell.exec(`npm run start-exam ${testId}`)
shell.exec("npm run question 0") // run first question for verification

console.log(`
... Install complete! You're ready to start.

You can now open up the ${chalk.blue('assessment-exam-student')} folder in your text editor.

Then, ${chalk.blue('cd')} into ${chalk.blue(testId)}.

To answer the questions, edit the code in the ${chalk.blue('answers')} folder.

To run the tests for a particular question, run:

	${chalk.blue('npm run question <Question Number>')}

For example:

	${chalk.blue('npm run question 0')}

There is no need to submit manually. Your answers are submitted automatically whenever you run the tests.

${chalk.magenta('Note!')} It is okay for you to Google for syntax or function use, but do ${chalk.magenta('not')} Google for the answers to the particular questions.

Have fun! 👩‍💻
`)
