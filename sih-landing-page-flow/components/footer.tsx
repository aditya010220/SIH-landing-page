export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Quote */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg flex items-center justify-center">
                {/* <span className="text-white text-sm">🌿</span> */}
              </div>
              <span className="text-2xl font-serif">Drona</span>
            </div>
            <p className="text-slate-300 text-lg italic leading-relaxed mb-8">
              "Healing is not linear — but it always begins with a choice."
            </p>

            {/* Emergency Helpline */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xl">📞</span>
                <span className="text-sm text-slate-400">24/7 Mental Health Helpline</span>
              </div>
              <p className="text-xl font-mono text-white">1800-599-0019</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6 text-emerald-400 text-lg">Resources</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span>About Drona</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span>Mental Health Resources</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span>Crisis Support</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-emerald-400 text-lg">Contact</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center space-x-3">
                <span className="text-lg">✉️</span>
                <a href="mailto:support@drona.care" className="hover:text-emerald-400 transition-colors">
                  support@drona.care
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">Campus Wellness Centers</p>
                <p className="text-sm">Find support resources at your institution</p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-slate-400 mb-2">For institutional partnerships:</p>
                <a
                  href="mailto:partnerships@drona.care"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  partnerships@drona.care
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 flex items-center space-x-2">
              <span>&copy; 2025 Drona</span>
              
              <span>Crafted with care for student wellbeing</span>
            </p>

            <div className="text-center">
              <p className="text-slate-400 italic text-sm max-w-md">
                "In the garden of the mind, every thought is a seed. Choose to plant hope, water it with kindness, and
                watch healing bloom."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
