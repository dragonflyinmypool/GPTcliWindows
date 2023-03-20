// input
const inputText = process.argv.slice(2).join(' ');
// const inputText = 'I am looking for a job as a software engineer.';

console.log(inputText);

const { Configuration, OpenAIApi } = require('openai');
// require('dotenv').config();

const configuration = new Configuration({
  apiKey: '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',
});

// create an async function
async function askGPT(prompt) {
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful writting assistant. You write very very short answers.',
      },
      { role: 'user', content: prompt },
    ],
    max_tokens: 2000,
  });

  console.log(completion.data.choices[0].message.content);
}

askGPT(inputText);
