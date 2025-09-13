export function VisionSection() {
  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 text-6xl opacity-20">🌿</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-15">✨</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-8 text-balance">
          A Safe, Stigma-Free Circle for All
        </h2>

        <p className="text-2xl md:text-3xl text-emerald-700 leading-relaxed text-pretty">
          Every student deserves balance, healing, and guidance — without judgment.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
