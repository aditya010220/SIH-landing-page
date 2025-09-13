import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Guided First Aid",
      description: "Instant coping support when you need it most",
    },
    {
      icon: "📅",
      title: "Confidential Booking",
      description: "Private appointments with qualified counsellors",
    },
    {
      icon: "🎧",
      title: "Resource Hub",
      description: "Guides, audios, and videos for self-care",
    },
    {
      icon: "💬",
      title: "Peer Support",
      description: "Student-to-student care and understanding",
    },
    {
      icon: "📊",
      title: "Admin Dashboard",
      description: "Anonymous insights for better campus wellness",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-6 text-balance">
            What You'll Find Inside
          </h2>
          <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
            Comprehensive tools and support designed specifically for student mental wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-emerald-100 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">{feature.title}</h3>
                <p className="text-emerald-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
