// File: src/App.tsx
import { ZenScene } from './components/ZenScene';
import { ChatWindow } from './components/ChatWindow';

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-100 to-white">
      <ZenScene />
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
        <div className="bg-white/70 p-6 rounded-2xl shadow-xl max-w-2xl w-full">
          <h1 className="text-2xl font-serif text-center mb-4">Daoist AI Companion</h1>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}