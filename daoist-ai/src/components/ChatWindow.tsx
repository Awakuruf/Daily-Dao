// File: src/components/ChatWindow.tsx
import { useState } from 'react';

export function ChatWindow() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages([...messages, `You: ${userMessage}`]);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `Daoist AI: ${data.reply}`]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="h-64 overflow-y-auto p-4 bg-white rounded-md border border-gray-200">
        {messages.map((msg, idx) => (
          <div key={idx} className="text-sm font-light mb-2">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded-md p-2 text-sm"
          placeholder="Ask gently..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}