import { OpenAI } from 'openai'
import * as dotenv from 'dotenv'
import fs from 'fs'

dotenv.config();

const openai = new OpenAI();

const encodeImage = ((imagePath) => {
  const imageData = fs.readFileSync(imagePath)
  return Buffer.from(imageData).toString('base64')
})

const imagePath = 'images/fridge.png'
const base64Image = encodeImage(imagePath)

const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', 
        content: [
          { type: 'text', 
            text: "Return a JSON structure based on the user requirements.only return the JSON structure, nothing else. Do not return ```json",}
        ]
      },
      {role: 'user',
        content: [
          { type: 'text',text: 'Create a JSON structure for all the items on the image: name: "cherry tomatoes", quantity: 5}, '} , 
          { type: 'image_url', image_url: {url: `data:image/png;base64, ${base64Image}`,}}
        ],
      },
    ],
    temperature: 1,
    max_tokens: 500,
    seed: 42,
    response_format: { 'type': 'json_object' },
})

// const extractedItems = response.choices[0].message.content.split(`\n`).map(line => {
//   const [name, quantity] = line.trim().split(': ')
//   return { name, quantity: parseInt(quantity) }
// })
const aiResults = response.choices[0]

export { aiResults };