"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { Volume2, VolumeX, Sun, Moon } from "lucide-react"

const floatingWords = ["Enough", "Worthy", "Healing", "Hope", "Calm", "Growth", "Balance", "Light"]

export function HeroSection() {
  const [currentWords, setCurrentWords] = useState<number[]>([0, 2, 4])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioError, setAudioError] = useState<string>("")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element for ambient sounds
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0.3
    audio.preload = "auto"

    // Use your local audio file from public/audio directory
    audio.src = "/audio/ambient-music.mp3"

    // Alternative local files if the first one fails
    const fallbackSources = [
      "/audio/ambient-music-2.mp3",
      "/audio/nature-sounds.mp3",
    ]

    let currentSourceIndex = 0

    const tryNextSource = () => {
      if (currentSourceIndex < fallbackSources.length) {
        audio.src = fallbackSources[currentSourceIndex]
        currentSourceIndex++
        audio.load()
      } else {
        setAudioError("All audio sources failed to load")
        console.error("All audio sources failed")
      }
    }

    const handleCanPlay = () => {
      console.log("Audio can play:", audio.src)
      setAudioLoaded(true)
      setAudioError("")
    }

    const handleError = (e: Event) => {
      console.error("Audio error:", e, "Source:", audio.src)
      setAudioError(`Failed to load: ${audio.src}`)
      tryNextSource()
    }

    const handleLoadStart = () => {
      console.log("Audio load started:", audio.src)
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("error", handleError)
    audio.addEventListener("loadstart", handleLoadStart)

    // Try to load the audio
    audio.load()
    audioRef.current = audio

    return () => {
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.pause()
      audio.src = ""
      audioRef.current = null
    }
  }, [])

  const handleSoundToggle = async () => {
    if (!audioRef.current) {
      console.error("Audio element not initialized")
      return
    }

    if (!audioLoaded) {
      console.warn("Audio not loaded yet")
      setAudioError("Audio still loading...")
      return
    }

    const newSoundEnabled = !soundEnabled

    if (newSoundEnabled) {
      try {
        // Reset audio to beginning
        audioRef.current.currentTime = 0

        // Try to play
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          await playPromise
          console.log("Audio started playing successfully")
          setSoundEnabled(true)
          setAudioError("")
        }
      } catch (error) {
        console.error("Error playing audio:", error)
        setAudioError("Click anywhere on the page first, then try again")
        setSoundEnabled(false)
      }
    } else {
      audioRef.current.pause()
      setSoundEnabled(false)
      console.log("Audio paused")
    }
  }

  // Handle user interaction to enable audio context
  useEffect(() => {
    const enableAudioContext = () => {
      if (audioRef.current && audioLoaded && soundEnabled) {
        audioRef.current.play().catch(console.error)
      }
    }

    // Add click listener to enable audio context after user interaction
    document.addEventListener("click", enableAudioContext, { once: true })
    document.addEventListener("touchstart", enableAudioContext, { once: true })

    return () => {
      document.removeEventListener("click", enableAudioContext)
      document.removeEventListener("touchstart", enableAudioContext)
    }
  }, [soundEnabled, audioLoaded])

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
          onClick={handleSoundToggle}
          className={`${isDarkMode ? "text-white hover:bg-white/10 hover:text-white" : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"} backdrop-blur-sm`}
          title={
            !audioLoaded
              ? "Audio loading..."
              : audioError
              ? audioError
              : soundEnabled
              ? "Mute ambient sounds"
              : "Play ambient sounds"
          }
          disabled={!audioLoaded && !audioError}
        >
          {!audioLoaded && !audioError ? (
            <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : soundEnabled ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
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

      {/* Audio Error Display (for debugging) */}
      {audioError && (
        <div className="absolute top-32 right-4 z-20 max-w-xs">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
            {audioError}
          </div>
        </div>
      )}

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
