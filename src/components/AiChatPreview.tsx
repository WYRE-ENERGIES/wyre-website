import { useState, useEffect, useRef } from "react"
import { Send } from "lucide-react"
import { cn } from "../lib/utils"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: string
}

const dummyMessages: Message[] = [
  {
    id: "1",
    type: "ai",
    content: "Hello 👋, I'm here to help you with any questions you may have on your Admin Dashboard",
    timestamp: "12:45 PM",
  },
  {
    id: "2",
    type: "user",
    content: "What is my total energy usage?",
    timestamp: "12:46 PM",
  },
  {
    id: "3",
    type: "ai",
    content: "Your total energy usage for this month is 52,866 kWh. This is a 2,900% increase from last month's 1,756 kWh.",
    timestamp: "12:46 PM",
  },
  {
    id: "4",
    type: "user",
    content: "Which branch is contributing more to diesel consumption?",
    timestamp: "12:47 PM",
  },
  {
    id: "5",
    type: "ai",
    content: "Based on the data, Access Ligali branch has the highest diesel consumption with 12,384,537 Naira this period.",
    timestamp: "12:47 PM",
  },
]

// const suggestedPrompts = [
//   "What is my total energy usage?",
//   "Which branch is contributing more to diesel consumption?",
//   "Show total cost breakdown by branch for last month",
// ]

export default function AiChatPreview({ className }: { className?: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesContainerRef.current && messagesEndRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Auto-animate messages
    if (currentMessageIndex < dummyMessages.length) {
      const timer = setTimeout(() => {
        if (dummyMessages[currentMessageIndex].type === "ai" && currentMessageIndex > 0) {
          setIsTyping(true)
          setTimeout(() => {
            setMessages((prev) => [...prev, dummyMessages[currentMessageIndex]])
            setIsTyping(false)
            setCurrentMessageIndex((prev) => prev + 1)
          }, 1500)
        } else {
          setMessages((prev) => [...prev, dummyMessages[currentMessageIndex]])
          setCurrentMessageIndex((prev) => prev + 1)
        }
      }, currentMessageIndex === 0 ? 1000 : 2000)

      return () => clearTimeout(timer)
    } else {
      // Loop back to start after a delay
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentMessageIndex(0)
      }, 5000)

      return () => clearTimeout(resetTimer)
    }
  }, [currentMessageIndex])

  return (
    <div className={cn("flex flex-col h-[80%] bg-white rounded-lg overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-[#5C12A7] text-white px-3 py-2 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <img src="/img/wyre-ai-logo.svg" alt="Wyre Ai Logo" style={{ width: "12px", height: "12px" }} />
          <p className="text-xs font-semibold uppercase tracking-wide">Wyre AI Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 pb-8 overflow-y-auto px-3 py-2 space-y-3 bg-purple-50/30">
        {messages.map((message) => (
          <div key={message.id}>
            {message.type === "ai" ? (
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-[#5C12A7] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/img/wyre-ai-logo.svg" alt="Wyre Ai Logo" style={{ width: "13px", height: "13px" }} />
                </div>
                <div className="bg-white rounded-lg px-3 py-2 max-w-[200px] shadow-sm border border-gray-200">
                  <p className="text-xs leading-relaxed text-gray-800">{message.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="bg-[#5C35922B] rounded-lg px-3 py-2 max-w-[200px] border border-gray-300">
                  <p className="text-xs leading-relaxed text-gray-800">{message.content}</p>
                </div>
              </div>
            )}
            <div className={cn("flex mt-1", message.type === "user" ? "justify-end" : "justify-start")}>
              <p className="text-[10px] text-gray-500">{message.timestamp}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 bg-[#5C12A7] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/img/wyre-ai-logo.svg" alt="Wyre Ai Logo" style={{ width: "13px", height: "13px" }} />
            </div>
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="px-3 py-2 bg-white border-t border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200">
          <input
            type="text"
            placeholder="Ask Wyre AI anything..."
            className="flex-1 text-xs bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            disabled
          />
          <button
            className="w-7 h-7 bg-[#5C12A7] rounded-full flex items-center justify-center text-white hover:bg-[#4a0f85] transition-colors disabled:opacity-50"
            disabled
          >
            <Send className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

