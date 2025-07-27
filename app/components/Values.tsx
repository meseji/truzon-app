export default function Values() {
  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, building trust through transparency and accountability.',
      icon: '⚖️'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to drive progress and transformation.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We pursue perfection in every endeavor, setting new benchmarks for quality and performance.',
      icon: '🎯'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working together to achieve extraordinary results.',
      icon: '🤝'
    }
  ];

  return (
    <section id="values" className="py-24 bg-gray-50 corporate-lines">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight">
            Our Core 
            <span className="font-medium block">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-grain">
            These fundamental principles guide every decision we make and every relationship we build, 
            ensuring sustainable success for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md transition-shadow">
                    {value.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-grain font-serif mb-4 group-hover:text-gray-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-grain">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-grain font-serif italic max-w-4xl mx-auto leading-relaxed">
            "Excellence is not a destination, but a journey of continuous improvement 
            and unwavering commitment to our values."
          </blockquote>
          <cite className="block mt-6 text-gray-600 text-grain">
            — Leadership Team, TRUZON
          </cite>
        </div>
      </div>
    </section>
  );
}