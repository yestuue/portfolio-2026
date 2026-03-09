"use client";

import { MessageSquare, Send, Calendar, Bot } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AITwin() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey 👋 I'm Samuel's AI Twin. He's probably shipping code right now, but I can tell you everything about his work, stack, availability, and rates. What do you need?",
    }
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const chips = [
    "What's your React experience?",
    "Can you build a DeFi app?",
    "What's your rate?",
    "Are you available this month?",
    "How do payments work?"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { sender: "user", text }]);
    setInput("");
    
    // Simulate AI typing and response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "I'm a simulated frontend right now, but Samuel would love to discuss this with you on a call!" }]);
    }, 1000);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section id="ai-twin" className="py-24 bg-[#FAFAFA] relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-mono text-sm tracking-widest text-[#00D4FF] font-bold uppercase">— AI Twin</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              Samuel is coding.<br/>His AI Twin is ready.
            </h2>
            <p className="text-xl text-gray-600 font-body">
              Ask anything about his skills, experience, rates, or availability. Get immediate answers while Samuel ships blocks.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4 text-gray-500 font-medium font-body mb-6">
              Prefer the real Samuel?
              <Link href="#contact" className="flex items-center gap-2 text-[#00D4FF] hover:text-[#050508] transition-colors font-bold group">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
                📅 Book a Call →
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <Bot className="w-4 h-4" /> Powered by Claude API & RAG
            </div>
          </div>
        </div>

        {/* Right: Chat Interface */}
        <div className="bg-[#050508] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden flex flex-col h-[500px]">
          {/* Mac window header */}
          <div className="h-12 bg-[#0F0F1A] border-b border-gray-800 flex items-center px-4 justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-xs text-gray-400 font-bold flex items-center gap-2">
              SAMUEL_AI — RUNNING 
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-[#050508] to-[#0A0A0F]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="flex gap-3 max-w-[85%]">
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center shrink-0 border border-[#00D4FF]/30">
                      <Bot className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                  )}
                  <div className={`p-4 rounded-2xl text-sm font-body leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#00D4FF] text-[#050508] rounded-tr-sm font-medium' 
                      : 'bg-[#1A1A24] text-gray-200 border border-gray-800 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                      <Image src="/guest.png" alt="User" width={32} height={32} />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-gray-800 bg-[#0F0F1A]">
            {/* Suggested Chips */}
            <div className="flex overflow-x-auto gap-2 mb-4 pb-2 no-scrollbar">
              {chips.map(chip => (
                <button 
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full border border-gray-700 font-mono text-xs text-gray-400 hover:text-white hover:border-[#00D4FF] transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
            
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend(input)}
                placeholder="Message Samuel's AI Twin..."
                className="w-full bg-[#1A1A24] border border-gray-700 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-[#00D4FF] text-sm font-body placeholder-gray-500"
              />
              <button 
                onClick={() => handleSend(input)}
                className="absolute right-2 p-2 text-gray-400 hover:text-[#00D4FF] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
