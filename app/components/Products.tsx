export default function Products() {
  const businesses = [
    {
      name: 'Meseji',
      tagline: 'Communication Technology',
      description: 'Enterprise messaging platform serving thousands of businesses with real-time communication solutions and team collaboration tools.',
      benefits: ['Market leader in messaging', 'Scalable infrastructure', 'Enterprise-grade security'],
      icon: '💬',
      status: 'Active Portfolio Company'
    },
    {
      name: 'Widget Solutions',
      tagline: 'Customer Engagement',
      description: 'Specialized customer support technology providing seamless integration solutions for websites and applications.',
      benefits: ['Growing market share', 'Innovative technology', 'Strong customer base'],
      icon: '💭',
      status: 'Active Portfolio Company'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white corporate-dots">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight">
            Our Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-grain">
            Strategic portfolio companies driving innovation across technology sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {businesses.map((business, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 minimal-corporate p-10 rounded-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-black rounded-sm flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                    <span className="text-white">{business.icon}</span>
                  </div>
                  
                  <h3 className="text-3xl font-medium text-grain font-serif mb-2">
                    {business.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-2">
                    {business.tagline}
                  </p>
                  
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs font-medium rounded-sm">
                    {business.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-grain text-center mb-8 text-lg">
                  {business.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {business.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        <span className="text-gray-600 text-grain">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="btn-premium bg-black text-white px-10 py-4 text-base font-medium tracking-wide rounded-sm group-hover:bg-gray-800 transition-colors">
                    View {business.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 text-center bg-gray-50 orbital-pattern p-16 rounded-sm">
          <h3 className="text-3xl font-light text-grain font-serif mb-4">
            Partnership Opportunities
          </h3>
          <p className="text-lg text-gray-600 text-grain mb-8 max-w-xl mx-auto">
            Explore strategic partnerships and investment opportunities with our growing portfolio of technology companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium bg-black text-white px-8 py-4 text-base font-medium tracking-wide rounded-sm">
              Investment Opportunities
            </button>
            <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-4 text-base font-medium tracking-wide rounded-sm hover:bg-black hover:text-white">
              Strategic Partnerships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}