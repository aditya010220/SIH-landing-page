"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { Volume2, VolumeX, Sun, Moon } from "lucide-react"

const floatingWords = ["Enough", "Worthy", "Healing", "Hope", "Calm", "Growth", "Balance", "Light"]

export function HeroSection() {
  const [currentWords, setCurrentWords] = useState<number[]>([0, 2, 4])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element for ambient sounds
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Use a placeholder audio URL - in production, you'd host your own audio file
    audioRef.current.src = "/placeholder-audio.mp3" // This would be your ambient sound file

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (soundEnabled) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log("Audio autoplay prevented by browser")
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [soundEnabled])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWords((prev) => prev.map((index) => (index + 1) % floatingWords.length))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 transition-all duration-1000 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50"
      }`}
    >
      {/* Controls */}
      <div className="absolute top-20 right-4 z-20 flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`${isDarkMode ? "text-white hover:bg-white/10 hover:text-white" : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"} backdrop-blur-sm`}
          title={soundEnabled ? "Mute ambient sounds" : "Play ambient sounds"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`${isDarkMode ? "text-white hover:bg-white/10 hover:text-white" : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"} backdrop-blur-sm`}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>

      {/* Digital Tree with Falling Leaves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Tree Structure */}
        <div className={`relative transition-all duration-1000 ${isDarkMode ? "text-purple-300" : "text-emerald-300"}`}>
          {/* Tree Trunk */}
          <div
            className={`w-4 h-32 mx-auto mb-0 rounded-t-full ${
              isDarkMode
                ? "bg-gradient-to-t from-purple-400 to-purple-300"
                : "bg-gradient-to-t from-emerald-400 to-emerald-300"
            } opacity-60 backdrop-blur-sm`}
          />

          {/* Tree Crown - Glass Effect */}
          <div
            className={`relative w-48 h-48 mx-auto rounded-full ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-400/30 to-indigo-400/30 border border-purple-300/20"
                : "bg-gradient-to-br from-emerald-400/30 to-teal-400/30 border border-emerald-300/20"
            } backdrop-blur-md shadow-2xl`}
          >
            {/* Falling Leaves */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  isDarkMode ? "bg-purple-300" : "bg-emerald-400"
                } animate-float opacity-70`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Meditating Saint Figure */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className={`relative w-16 h-20 ${isDarkMode ? "text-purple-200" : "text-emerald-600"}`}>
          {/* Glowing Aura */}
          <div
            className={`absolute inset-0 rounded-full ${
              isDarkMode
                ? "bg-gradient-radial from-purple-400/40 via-purple-300/20 to-transparent"
                : "bg-gradient-radial from-emerald-400/40 via-emerald-300/20 to-transparent"
            } animate-pulse scale-150`}
          />

          {/* Particle Effects around Aura */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isDarkMode ? "bg-purple-300" : "bg-emerald-400"
              } animate-ping opacity-60`}
              style={{
                left: `${50 + Math.cos((i * Math.PI) / 4) * 30}%`,
                top: `${50 + Math.sin((i * Math.PI) / 4) * 30}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}

          {/* Figure Silhouette */}
          <div
            className={`relative z-10 w-full h-full ${
              isDarkMode ? "bg-purple-800" : "bg-emerald-800"
            } rounded-t-full opacity-80`}
          />
        </div>
      </div>

      {/* Floating Words as Fireflies */}
      <div className="absolute inset-0 pointer-events-none">
        {currentWords.map((wordIndex, i) => (
          <div
            key={i}
            className={`absolute animate-float ${
              isDarkMode ? "text-purple-200" : "text-emerald-600"
            } text-lg font-light opacity-80`}
            style={{
              left: `${20 + i * 25 + Math.sin(Date.now() / 1000 + i) * 10}%`,
              top: `${30 + i * 15 + Math.cos(Date.now() / 1000 + i) * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            <span
              className={`inline-block px-3 py-1 rounded-full ${
                isDarkMode
                  ? "bg-purple-400/20 border border-purple-300/30"
                  : "bg-emerald-400/20 border border-emerald-300/30"
              } backdrop-blur-sm animate-pulse`}
            >
              {floatingWords[wordIndex]}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-7xl font-serif mb-6 text-balance leading-tight transition-colors duration-1000 ${
            isDarkMode ? "text-purple-100" : "text-emerald-900"
          }`}
        >
          Find Your Path to
          <br />
          <span className={isDarkMode ? "text-purple-300" : "text-teal-700"}>Growth & Clarity</span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-xl md:text-2xl mb-12 text-pretty max-w-3xl mx-auto leading-relaxed transition-colors duration-1000 ${
            isDarkMode ? "text-purple-200" : "text-emerald-700"
          }`}
        >
          A learning space where guidance meets self-discovery — for students, counsellors, and communities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 ${
              isDarkMode
                ? "bg-purple-100 border-purple-200 text-purple-900 hover:bg-purple-50 hover:text-purple-800"
                : "bg-emerald-100 border-emerald-200 text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800"
            }`}
          >
            <span>Get Started</span>
            <span className="ml-2 group-hover:animate-pulse"></span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Falling Leaf */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className={`text-2xl animate-pulse block ${isDarkMode ? "text-purple-300" : "text-emerald-600"}`}>
          🍃
        </span>
      </div>
    </section>
  )
}
