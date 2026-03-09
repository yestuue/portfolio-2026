"use client";

import { MessageSquare, Send, Calendar, Bot, User, Terminal, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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
    "Tech Stack?",
    "Blockchain Experience?",
    "What's your rate?",
    "Availability?",
    "Past Projects?"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { sender: "user", text }]);
    setInput("");
    
    // Simulate AI typing and response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "I'm currently a simulated interface, but I've been trained on Samuel's project history. He'd love to give you a deep dive on a call!" }]);
    }, 1000);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section id="ai-twin" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-100/50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase">— Neural Digital Twin</h3>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-[0.9]">
              Samuel is coding.<br/>
              <span className="text-sky-500">His AI is ready.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
              Ask anything about his technical stack, rates, or availability. Get immediate architectural insights while Samuel ships blocks.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">
              Prefer the real Samuel?
              <Link href="#contact" className="flex items-center gap-2 text-sky-500 hover:text-slate-900 transition-all group">
                <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" /> 
                Book a Call →
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
              <Terminal className="w-3 h-3" /> Instance: v2.1-Stable (RAG Enabled)
            </div>
          </div>
        </div>

        {/* Right: Chat Interface (The "Terminal" look) */}
        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-sky-900/10 border border-slate-800 overflow-hidden flex flex-col h-[550px]">
          
          {/* Mac window header */}
          <div className="h-14 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center px-6 justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            </div>
            <div className="font-mono text-[10px] text-slate-500 font-bold flex items-center gap-3 tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-sky-500" />
              Samuel_AI Process
              <span className="relative flex h-1.5 w-1.5 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="w-10"></div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-4 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar Icons instead of Images to prevent broken links */}
                  <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 border ${
                    msg.sender === 'bot' 
                      ? 'bg-sky-500/10 border-sky-500/30 text-sky-500' 
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    {msg.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  <div className={`p-4 rounded-[1.5rem] text-sm font-medium leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-sky-500 text-white rounded-tr-none shadow-lg shadow-sky-500/20' 
                      : 'bg-slate-800/50 text-slate-200 border border-slate-700/50 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-slate-800 bg-slate-900">
            {/* Suggested Chips */}
            <div className="flex overflow-x-auto gap-2 mb-5 pb-1 no-scrollbar">
              {chips.map(chip => (
                <button 
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="whitespace-nowrap px-4 py-2 rounded-xl border border-slate-800 font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white hover:border-sky-500 transition-all bg-slate-800/30"
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
                placeholder="Ask about rates, availability, or stack..."
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl py-4 pl-5 pr-14 focus:outline-none focus:border-sky-500 transition-all text-sm font-medium placeholder-slate-600"
              />
              <button 
                onClick={() => handleSend(input)}
                className="absolute right-3 p-2.5 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20 active:scale-90"
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