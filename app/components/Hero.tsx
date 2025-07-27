export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden orbital-pattern">
      {/* Subtle orbital elements that complement planet logo */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 border border-gray-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 border border-gray-150 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 border border-gray-200 rounded-full opacity-15"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gray-50 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-grain font-serif mb-8 tracking-tight leading-none">
            Innovation
            <br />
            <span className="font-medium">Ecosystem</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-grain font-light">
            A parent company fostering innovation across multiple technology ventures. 
            Building the future through strategic investments and business development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-premium bg-black text-white px-8 py-4 text-lg font-medium tracking-wide rounded-sm min-w-[200px]">
              Our Businesses
            </button>
            <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-4 text-lg font-medium tracking-wide rounded-sm min-w-[200px] hover:bg-black hover:text-white">
              Partnership Opportunities
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}