export function HowItWorksSection() {
  const steps = [
    { icon: "🌱", title: "Sign Up", description: "Create your safe space in minutes" },
    { icon: "🌸", title: "Self-Check", description: "Assess your wellbeing with guided tools" },
    { icon: "✨", title: "Get Support", description: "Connect with AI, peers, or counsellors" },
    { icon: "🌿", title: "Grow & Reflect", description: "Track your journey and celebrate progress" },
  ]

  return (
    <section id="flow" className="py-20 bg-gradient-to-b from-teal-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-teal-900 mb-6 text-balance">
            From Stress to Support, Step by Step
          </h2>
          <p className="text-xl text-teal-600 max-w-3xl mx-auto">
            Your wellness journey simplified into four meaningful steps
          </p>
        </div>

        <div className="relative">
          {/* Flow Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-300 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10 border-4 border-teal-100">
                  <span className="text-3xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">{step.title}</h3>
                <p className="text-teal-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
