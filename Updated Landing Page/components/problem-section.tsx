export function ProblemSection() {
  const problems = [
    {
      icon: "⚠️",
      title: "Rising Mental Health Concerns",
      description: "Student stress and anxiety levels continue to climb across campuses worldwide.",
    },
    {
      icon: "👤",
      title: "Underutilized Counselling Services",
      description: "Many students avoid seeking help due to stigma and accessibility barriers.",
    },
    {
      icon: "🕐",
      title: "Lack of Centralized Support",
      description: "Fragmented resources make it difficult for students to find the right help when needed.",
    },
  ]

  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 text-balance">
            The Silent Struggle in Campuses
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Problem Cards */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 animate-fade-in-up hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{problem.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-700 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stressed Student Illustration */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-12 text-center overflow-hidden min-h-[400px] flex items-center justify-center">
                {/* Floating stress elements */}
                <div className="absolute top-6 left-6 animate-float opacity-80">
                  <div className="bg-white/90 rounded-lg p-2 shadow-md transform rotate-12">
                    <div className="text-xs text-slate-600 font-mono">DEADLINE</div>
                    <div className="text-xs text-red-500 font-bold">TOMORROW</div>
                  </div>
                </div>

                <div className="absolute top-4 right-8 animate-float opacity-80" style={{ animationDelay: "0.5s" }}>
                  <div className="bg-white/90 rounded-full p-3 shadow-md">
                    <div className="text-red-500 text-lg">⏰</div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-4 animate-float opacity-80" style={{ animationDelay: "1s" }}>
                  <div className="bg-white/90 rounded-lg p-2 shadow-md transform -rotate-6">
                    <div className="text-xs text-slate-600">📚 EXAM</div>
                  </div>
                </div>

                <div className="absolute top-16 right-4 animate-float opacity-80" style={{ animationDelay: "1.5s" }}>
                  <div className="bg-white/90 rounded-lg p-2 shadow-md transform rotate-6">
                    <div className="text-xs text-slate-600">📄 ESSAY</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-12 animate-float opacity-80" style={{ animationDelay: "2s" }}>
                  <div className="bg-white/90 rounded-full p-2 shadow-md">
                    <div className="text-orange-500 text-sm">💼</div>
                  </div>
                </div>

                <div className="absolute top-12 left-16 animate-float opacity-80" style={{ animationDelay: "2.5s" }}>
                  <div className="bg-white/90 rounded-lg p-1 shadow-md transform -rotate-12">
                    <div className="text-xs text-red-500">❌ FAILED</div>
                  </div>
                </div>

                {/* Central stressed student */}
                <div className="relative z-10 text-center">
                  <img
                    src="/stressed-college-student-sitting-with-head-in-hand.jpg"
                    alt="Stressed student overwhelmed by academic pressure"
                    className="w-48 h-48 mx-auto mb-4 rounded-lg shadow-lg"
                  />
                  <p className="text-slate-700 text-lg max-w-sm mx-auto font-medium">
                    Students overwhelmed by academic pressure and lacking proper support channels
                  </p>
                </div>

                {/* Stress wave effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-300/30 rounded-full animate-ping"
                      style={{
                        width: `${120 + i * 60}px`,
                        height: `${120 + i * 60}px`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: "3s",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
