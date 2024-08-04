
import * as dotenv from 'dotenv'
import * as path from 'path'
import OpenAI from 'openai'

// Load environment variables from .env file.
dotenv.config({ path: path.join(__dirname, '../.env') });

const openai = new OpenAI();

const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: [
            {
                type: 'text',
                text: 'Hello',
            }
        ],
      },
    ],
})

console.log(response.choices[0]);