export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 corporate-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-8 tracking-tight">
              Building Tomorrow&apos;s 
              <span className="font-medium block">Technology Leaders</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-grain">
              Truzon Labs LLP is a parent company that incubates, develops, and scales innovative 
              technology businesses. We identify market opportunities and build sustainable ventures 
              that drive digital transformation across industries.
            </p>

            <div className="space-y-6">
              {[
                { number: '5+', label: 'Portfolio Companies' },
                { number: '50M+', label: 'Combined Revenue' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-3xl font-light text-grain font-serif">{stat.number}</div>
                  <div className="text-gray-600 text-grain">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-premium bg-black text-white px-8 py-3 text-base font-medium tracking-wide rounded-sm mt-8">
              Our Story
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-sm relative overflow-hidden">
              {/* Corporate orbital design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Planet-like central element */}
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
                  
                  {/* Orbital rings */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-48 h-48 border border-gray-300 rounded-full opacity-40"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-64 h-64 border border-gray-200 rounded-full opacity-30"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-80 h-80 border border-gray-150 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}