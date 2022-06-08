

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const api = require("./util/api.js");

const generateMarkdown = require("./util/generateMarkdown.js");

const questions = [

  {
    type: "input",
    botReply: "what is the name of your project",
    name: "title",
  },

  {
    type: "input",
    botReply: "give a description of the project",
    name: "description",
  },

  {
    type: "input",
    botReply: "how does the user install the application",
    name: "install",
  },

  {
    type: "input",
    botReply: "how do you operate the application",
    name: "usage",
  },

  {
    type: "input",
    botReply: "what are the test instructions?",
    name: "testInstruction",
  },

  {
    type: "input",
    botReply: "How should users ask questions?",
    name: "questions",
  },

  {
    type: "input",
    botReply: "What is your Github username?",
    name: "credits",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter your username.");
      }
      return true;
    },
  },
  {
    type: "list",
    botReply: "What license are you using?",
    name: "license",
    choices: [ 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
}
];


function makeFile(fileName, data) {
    fileName = "auto-generated-README.md";
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      // if it works
      console.log("it works bro");
    });
  }

// TODO: Create a function to initialize app


const makeAReadme = util.promisify(makeFile);

async function init() {
  try {  const userInfo = await api.getUser(userResponses);

    await makeAReadme("bot-readMe.md", markdownFile);
  }
  
  
  catch (error) {
    console.log(error);
    init();
  }
}


// Function call to initialize app
init();
