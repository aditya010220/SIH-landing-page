import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-10">
          🌳
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-5xl opacity-20">🧘‍♂️</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-8 text-balance">
          Your Journey Matters. Take the First Step Today.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Begin My Journey
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-white/60 backdrop-blur-sm border-emerald-200 text-emerald-700 hover:bg-white/80 px-8 py-4 text-lg"
          >
            I'm Just Exploring
          </Button>
        </div>
      </div>
    </section>
  )
}
