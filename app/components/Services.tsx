export default function Services() {
  const services = [
    {
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements and integrate seamlessly with your existing systems.',
      icon: '⚙️'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration services to connect your applications with third-party services and internal systems.',
      icon: '🔗'
    },
    {
      title: 'Cloud Migration',
      description: 'Secure and efficient migration of your applications and data to cloud platforms with minimal downtime.',
      icon: '☁️'
    },
    {
      title: 'Technical Support',
      description: '24/7 technical support and maintenance services to ensure your systems run smoothly and efficiently.',
      icon: '🛠️'
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your software architecture and roadmap.',
      icon: '💡'
    },
    {
      title: 'Training & Onboarding',
      description: 'Comprehensive training programs to help your team maximize the potential of our software solutions.',
      icon: '📚'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 corporate-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight">
            Our 
            <span className="font-medium block">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-grain">
            Comprehensive software services to support your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gray-100 rounded-sm flex items-center justify-center text-2xl mb-6 group-hover:bg-gray-200 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-grain font-serif mb-4 group-hover:text-gray-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-grain">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-premium bg-black text-white px-8 py-3 text-base font-medium tracking-wide rounded-sm">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}