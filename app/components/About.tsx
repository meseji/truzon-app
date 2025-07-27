export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 paper-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-8 tracking-tight">
              Defining the Future of 
              <span className="font-medium block">Corporate Leadership</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-grain">
              For over two decades, we have been at the forefront of corporate innovation, 
              guiding enterprises through transformational journeys that redefine industry standards.
            </p>

            <div className="space-y-6">
              {[
                { number: '25+', label: 'Years of Excellence' },
                { number: '500+', label: 'Global Partnerships' },
                { number: '50+', label: 'Industry Awards' }
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
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm relative overflow-hidden">
              {/* Abstract geometric pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-black transform rotate-45"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-black transform -rotate-12"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-black transform rotate-12"></div>
              </div>
              
              {/* Paper texture overlay */}
              <div className="absolute inset-0 paper-bg opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}