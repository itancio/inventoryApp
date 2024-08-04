import base64
import re

def call_image_model(client, file):
    
    # Read the file-like object (uploaded_file)
    image_data = file.read()
    # Encode the file data in base64
    base64_image = base64.b64encode(image_data).decode('utf-8')

    # Create API request
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": f"You are given an image of an item/s that you can find in your pantry, kitchen and refrigerator. 
                            Identify the food items",
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}",
                        },
                    }
                ],
            }
        ],
        max_tokens=300,
    )

    # Parse the response content
    content = response.choices[0].message.content

    # Use regex to extract tags
    message_pattern = r"<message>(.*?)</message>"
    message = re.findall(message_pattern, content, re.DOTALL)

    return message[0]