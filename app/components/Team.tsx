export default function Team() {
  const team = [
    {
      name: 'Alex Thompson',
      position: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in software development and business strategy.',
      initials: 'AT'
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      bio: 'Expert in scalable architecture and cloud technologies with a passion for innovation.',
      initials: 'PS'
    },
    {
      name: 'David Kim',
      position: 'Head of Product',
      bio: 'Product strategist focused on creating user-centric solutions that drive business growth.',
      initials: 'DK'
    },
    {
      name: 'Maria Garcia',
      position: 'VP of Engineering',
      bio: 'Engineering leader with expertise in building high-performance, reliable software systems.',
      initials: 'MG'
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50 geometric-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight">
            Meet Our 
            <span className="font-medium block">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-grain">
            Our diverse team of experts brings together decades of experience in software development, 
            product design, and business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white p-8 rounded-sm hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600 font-medium text-lg">
                    {member.initials}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium text-grain font-serif mb-2 group-hover:text-gray-600 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-gray-500 text-grain mb-4 font-medium">
                  {member.position}
                </p>
                
                <p className="text-gray-600 leading-relaxed text-grain text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Culture Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-grain font-serif mb-6">
            Join Our Growing Team
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-grain">
            We&apos;re always looking for talented individuals who share our passion for building 
            exceptional software solutions. Explore career opportunities at Truzon Labs.
          </p>
          <button className="btn-premium bg-black text-white px-8 py-3 text-base font-medium tracking-wide rounded-sm">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}