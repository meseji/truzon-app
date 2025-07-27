export default function Announcements() {
  const announcements = [
    {
      date: '2025-01-15',
      category: 'Partnership',
      title: 'Strategic Partnership with Global Tech Leader',
      excerpt: 'Truzon Labs announces a major strategic partnership to expand our portfolio companies into international markets.',
      isNew: true
    },
    {
      date: '2025-01-10',
      category: 'Investment',
      title: 'Series B Funding Round Completed',
      excerpt: 'Successfully closed $25M Series B funding round to accelerate growth across our portfolio businesses.',
      isNew: true
    },
    {
      date: '2024-12-20',
      category: 'Product Launch',
      title: 'Meseji 3.0 Platform Launch',
      excerpt: 'Our flagship communication platform launches with enhanced AI capabilities and enterprise features.',
      isNew: false
    },
    {
      date: '2024-12-15',
      category: 'Expansion',
      title: 'New Regional Office Opening',
      excerpt: 'Opening our new Asia-Pacific headquarters to better serve our growing international client base.',
      isNew: false
    },
    {
      date: '2024-12-01',
      category: 'Recognition',
      title: 'Industry Excellence Award',
      excerpt: 'Truzon Labs recognized as "Technology Innovator of the Year" by the Business Innovation Council.',
      isNew: false
    },
    {
      date: '2024-11-25',
      category: 'Acquisition',
      title: 'Strategic Acquisition Completed',
      excerpt: 'Successfully acquired emerging AI startup to strengthen our technology capabilities and market position.',
      isNew: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Partnership': 'bg-blue-100 text-blue-800',
      'Investment': 'bg-green-100 text-green-800',
      'Product Launch': 'bg-purple-100 text-purple-800',
      'Expansion': 'bg-orange-100 text-orange-800',
      'Recognition': 'bg-yellow-100 text-yellow-800',
      'Acquisition': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="announcements" className="py-24 bg-gray-50 corporate-lines">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight">
            Latest 
            <span className="font-medium block">Announcements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-grain">
            Stay updated with the latest news, partnerships, and developments 
            across our portfolio of technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <article key={index} className="group">
              <div className="bg-white professional-texture p-8 rounded-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100 hover:border-gray-200">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-sm ${getCategoryColor(announcement.category)}`}>
                    {announcement.category}
                  </span>
                  {announcement.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-sm animate-pulse">
                      NEW
                    </span>
                  )}
                </div>

                {/* Date */}
                <time className="text-sm text-gray-500 text-grain mb-4 block">
                  {formatDate(announcement.date)}
                </time>

                {/* Title */}
                <h3 className="text-xl font-medium text-grain font-serif mb-4 group-hover:text-gray-600 transition-colors leading-tight">
                  {announcement.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed text-grain mb-6 flex-1">
                  {announcement.excerpt}
                </p>

                {/* Read More */}
                <div className="pt-4 border-t border-gray-100">
                  <a href="/announcements">
                    <button className="text-black font-medium text-sm hover:text-gray-600 transition-colors text-grain group-hover:underline">
                      Read Full Announcement →
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white orbital-pattern p-12 rounded-sm text-center">
          <h3 className="text-3xl font-light text-grain font-serif mb-4">
            Stay Informed
          </h3>
          <p className="text-lg text-gray-600 text-grain mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest announcements, 
            partnership opportunities, and insights from our portfolio companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all text-grain"
            />
            <button className="btn-premium bg-black text-white px-8 py-3 text-base font-medium tracking-wide rounded-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 text-grain mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>

        {/* Archive Link */}
        <div className="text-center mt-12">
          <a href="/announcements">
            <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-3 text-base font-medium tracking-wide rounded-sm hover:bg-black hover:text-white">
              View All Announcements
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}