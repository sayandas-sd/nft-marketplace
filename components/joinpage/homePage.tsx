"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Users } from "lucide-react"
import InputBox from "@/components/ui/input"
import JoinpageButton from "@/components/ui/joinpageButton"

export default function JoinHomePage() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsLoading(true)
    
    setTimeout(() => {
      router.push("/chat")
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white">Join Nebula Chat</h1>
            <p className="text-purple-200">Enter your name to start chatting with the group</p>
          </div>

          <div className="bg-black/30 rounded-xl p-6 space-y-4 ">
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <Users size={20} />
              <span className="text-sm font-medium">12 people online</span>
            </div>

            <form onSubmit={handleJoin} className="space-y-4">
              <div className="space-y-2 ">
                <label htmlFor="username" className="text-sm font-medium text-purple-200 font-bold">
                  Your Display Name
                </label>
                <div className="mt-3">
                    <InputBox
                  id="username"
                  type="text"
                  placeholder="Enter your name..."
                  onChange={(e:any)=> {
                    setUsername(e.target.value)
                  }}
                />
                </div>
                
              </div>

              <JoinpageButton
                type="submit"
                disabled={!username.trim() || isLoading}
              >
                <span>{isLoading ? "Joining..." : "Join Chat"}</span>
                {!isLoading && <ArrowRight size={16} />}
              </JoinpageButton>
            </form>
          </div>

          <div className="text-center text-sm text-purple-300">
            <p>By joining, you agree to our community guidelines</p>
          </div>
        </div>
      </div>
    </div>
  )
}
