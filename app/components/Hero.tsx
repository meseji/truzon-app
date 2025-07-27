export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-grain font-serif mb-8 tracking-tight leading-none">
            Corporate
            <br />
            <span className="font-medium">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-grain font-light">
            Building tomorrow's enterprises through strategic vision, 
            innovative solutions, and unwavering commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-premium bg-black text-white px-8 py-4 text-lg font-medium tracking-wide rounded-sm min-w-[200px]">
              Explore Portfolio
            </button>
            <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-4 text-lg font-medium tracking-wide rounded-sm min-w-[200px] hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}