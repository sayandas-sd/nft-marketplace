"use client";
import Link from "next/link"

import { useRouter } from "next/navigation"
import HomeButton from "./ui/homebutton";

export default function MainBody() {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white">Nebula Chat</h1>
            <p className="text-lg text-purple-200">
              Connect with friends in real-time with our unique group chat experience
            </p>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-black/30 p-4">
            <div className="absolute bottom-4 right-4 max-w-[70%] rounded-tl-2xl rounded-tr-2xl rounded-br-sm rounded-bl-2xl bg-purple-500 p-3 text-white">
              <p>Hey everyone! Who's joining the meetup tonight?</p>
              <span className="text-xs text-purple-200 block text-right mt-1">Just now</span>
            </div>
            <div className="absolute bottom-20 left-4 max-w-[70%] rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl bg-indigo-600 p-3 text-white">
              <p>I'll be there! Bringing snacks 🍕</p>
              <span className="text-xs text-indigo-300 block mt-1">2m ago</span>
            </div>
            <div className="absolute top-4 left-4 max-w-[70%] rounded-tl-sm rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-pink-600 p-3 text-white">
              <p>Can we meet at the usual spot?</p>
              <span className="text-xs text-pink-300 block mt-1">5m ago</span>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center space-x-1">
              <span className="text-purple-300 text-sm">Someone is typing</span>
              <div className="flex space-x-1">
                <div
                  className="h-2 w-2 rounded-full bg-purple-300 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-purple-300 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-purple-300 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <HomeButton onClick={() => {
                router.push("/join")
            }}>
              <Link href="/join">Join the Conversation</Link>
            </HomeButton>
            <p className="text-sm text-purple-300">
              No registration required. Just enter your name and start chatting!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-purple-300 text-sm">
        <p>Features: Real-time messaging • Typing indicators • Group chat</p>
      </div>
    </div>
  )
}