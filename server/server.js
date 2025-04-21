// File: server/api/chat.ts (Express route or edge function-style)
// This is a placeholder backend route, to be hooked into OpenAI
import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function chat(req: Request, res: Response) {
  const userMessage = req.body.message;

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `You are a Daoist philosopher. Speak gently and poetically. Do not offer direct solutions...`
      },
      { role: 'user', content: userMessage }
    ]
  });

  res.json({ reply: response.data.choices[0].message?.content });
}
