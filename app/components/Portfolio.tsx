export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Financial Services',
      description: 'Transforming traditional banking through digital innovation and strategic partnerships.',
      category: 'Finance'
    },
    {
      title: 'Technology Solutions',
      description: 'Building scalable platforms that drive efficiency and growth across industries.',
      category: 'Technology'
    },
    {
      title: 'Healthcare Innovation',
      description: 'Revolutionizing patient care through advanced medical technologies and systems.',
      category: 'Healthcare'
    },
    {
      title: 'Sustainable Energy',
      description: 'Leading the transition to renewable energy sources and sustainable practices.',
      category: 'Energy'
    },
    {
      title: 'Real Estate Development',
      description: 'Creating iconic spaces that define modern urban living and commercial excellence.',
      category: 'Real Estate'
    },
    {
      title: 'Manufacturing Excellence',
      description: 'Optimizing production processes through automation and lean methodologies.',
      category: 'Manufacturing'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white corporate-dots">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight">
            Portfolio of 
            <span className="font-medium block">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-grain">
            Discover our diverse range of successful ventures across multiple industries, 
            each representing our commitment to innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 professional-texture aspect-[4/3] rounded-sm mb-6 relative overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                {/* Corporate visual representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central element */}
                    <div className="w-16 h-16 bg-gray-300 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    {/* Orbital elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 border border-gray-300 rounded-full group-hover:rotate-45 transition-transform duration-700 opacity-60"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 border border-gray-200 rounded-full group-hover:-rotate-30 transition-transform duration-500 opacity-40"></div>
                    </div>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 text-sm font-medium rounded-sm text-grain">
                    {item.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-grain font-serif mb-3 group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-grain">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-3 text-base font-medium tracking-wide rounded-sm hover:bg-black hover:text-white">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}