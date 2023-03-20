// input
const inputText = process.argv.slice(2).join(' ');
// const inputText = 'I am looking for a job as a software engineer.';
const { apiKey } = require('./api.js');

const { Configuration, OpenAIApi } = require('openai');
// require('dotenv').config();

const configuration = new Configuration({
  apiKey: apiKey,
});

// create an async function
async function askGPT(prompt) {
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `I am a command line assistant that looks up CLI commands. 
        I help convert plain english into commands that can be typed into windows powershell. These commands can include powershell commands, github commands, npm commands or other commands depending on what is asked of me. I will not explain the commands to you . I will only reply with the actual command (unless you specificly ask).
        As follows.
           query: "create a new folder called test"
           reply: "New-Item -ItemType Directory -Name "test"

           or: 
           
           query: "start a new git repo"
           reply: "git init"
           `,
      },
      { role: 'user', content: prompt },
    ],
    max_tokens: 2000,
  });

  console.log(completion.data.choices[0].message.content);
}

askGPT(inputText);
