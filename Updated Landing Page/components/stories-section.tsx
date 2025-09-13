"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Heart, Star, BookOpen, Link } from "lucide-react"

export function StoriesSection() {
  const stories = [
    {
      quote:
        "This space helped me when I felt I couldn't speak to anyone. The AI support was there at 2 AM when my anxiety peaked.",
      name: "Arjun",
      role: "Computer Science Student",
      category: "RELIEF",
      icon: "💡",
    },
    {
      quote:
        "Counselling felt safe for the first time. I could book sessions without anyone knowing, and that privacy gave me courage.",
      name: "Priya",
      role: "Psychology Student",
      category: "GROWTH",
      icon: "🌱",
    },
    {
      quote:
        "I found my voice and learned to ask for help. The peer support showed me I wasn't the only one struggling.",
      name: "Rahul",
      role: "Engineering Student",
      category: "CONNECTION",
      icon: "🤝",
    },
    {
      quote:
        "The resource hub became my daily companion. Meditation guides and coping strategies helped me through exam stress.",
      name: "Sneha",
      role: "Medical Student",
      category: "WELLNESS",
      icon: "🧘‍♀️",
    },
  ]

  const [currentStory, setCurrentStory] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-6 text-balance">You're Not Alone</h2>
          <p className="text-xl text-emerald-600">Real stories from students who found their path to wellness</p>
        </div>

        <div className="relative">
          <Card className="bg-white/90 backdrop-blur-sm border-emerald-100 shadow-2xl">
            <CardContent className="p-12">
              {/* Category and Rating */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                    💡
                  </div>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    {stories[currentStory].category}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="text-center mb-8">
                <span className="text-6xl text-slate-400 font-serif leading-none">"</span>
                <blockquote className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed text-balance my-4">
                  {stories[currentStory].quote}
                </blockquote>
                <span className="text-6xl text-slate-400 font-serif leading-none">"</span>
              </div>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg font-semibold text-emerald-800">{stories[currentStory].name}</p>
                <p className="text-emerald-600">{stories[currentStory].role}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevStory}
              className="flex items-center space-x-2 px-4 py-2 text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-3">
              <button className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                💡
              </button>
              <button className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                <Star className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                <BookOpen className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                <Link className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={nextStory}
              className="flex items-center space-x-2 px-4 py-2 text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? "bg-emerald-500 scale-125" : "bg-emerald-200 hover:bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-emerald-600 italic">
            Every story shared here is a beacon of hope, lighting the way for others who seek healing and peace.
          </p>
        </div>
      </div>
    </section>
  )
}
