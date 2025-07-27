import Link from "next/link";

export default function Announcements() {
  const announcements = [
    {
        id: 1,
        date: '2025-01-15',
        category: 'Partnership',
        title: 'Strategic Partnership with Global Tech Leader',
        excerpt: 'Truzon Labs announces a major strategic partnership to expand our portfolio companies into international markets.',
        content: 'We are excited to announce a groundbreaking strategic partnership with a leading global technology company that will significantly expand our reach into international markets. This partnership will provide our portfolio companies with access to new distribution channels, advanced technology resources, and strategic guidance from industry experts. The collaboration is expected to accelerate growth across all our business units and create new opportunities for innovation and market expansion.',
        author: 'Leadership Team',
        readTime: '3 min read',
        isNew: true,
        featured: true
    },
    {
        id: 2,
        date: '2025-01-10',
        category: 'Investment',
        title: 'Series B Funding Round Completed',
        excerpt: 'Successfully closed $25M Series B funding round to accelerate growth across our portfolio businesses.',
        content: 'Truzon Labs has successfully completed a $25 million Series B funding round led by prominent venture capital firms. This significant investment will be strategically allocated across our portfolio companies to accelerate product development, expand market presence, and strengthen our technology infrastructure. The funding round saw participation from both existing investors and new strategic partners who share our vision for the future of business communication technology.',
        author: 'Finance Team',
        readTime: '4 min read',
        isNew: true,
        featured: true
    },
    {
        id: 3,
        date: '2024-12-20',
        category: 'Product Launch',
        title: 'Meseji 3.0 Platform Launch',
        excerpt: 'Our flagship communication platform launches with enhanced AI capabilities and enterprise features.',
        content: 'Today marks a significant milestone with the official launch of Meseji 3.0, featuring revolutionary AI-powered communication tools and enhanced enterprise capabilities. The new platform includes advanced natural language processing, intelligent message routing, automated workflow integration, and comprehensive analytics dashboard. These improvements represent months of dedicated development and user feedback integration, positioning Meseji as the leading enterprise communication solution.',
        author: 'Product Team',
        readTime: '5 min read',
        isNew: false,
        featured: false
    },
    {
        id: 4,
        date: '2024-12-15',
        category: 'Expansion',
        title: 'New Regional Office Opening',
        excerpt: 'Opening our new Asia-Pacific headquarters to better serve our growing international client base.',
        content: 'We are proud to announce the opening of our new Asia-Pacific regional headquarters in Singapore. This strategic expansion reflects our commitment to serving our rapidly growing international client base and establishing a stronger presence in key Asian markets. The new office will house our regional sales, customer success, and technical support teams, ensuring localized service delivery and faster response times for our Asia-Pacific customers.',
        author: 'Operations Team',
        readTime: '3 min read',
        isNew: false,
        featured: false
    },
    {
        id: 5,
        date: '2024-12-01',
        category: 'Recognition',
        title: 'Industry Excellence Award',
        excerpt: 'Truzon Labs recognized as "Technology Innovator of the Year" by the Business Innovation Council.',
        content: 'We are honored to receive the prestigious "Technology Innovator of the Year" award from the Business Innovation Council. This recognition acknowledges our commitment to developing cutting-edge solutions that transform how businesses communicate and collaborate. The award specifically highlights our contributions to enterprise messaging technology and our role in driving digital transformation across various industries.',
        author: 'Marketing Team',
        readTime: '2 min read',
        isNew: false,
        featured: false
    },
    {
        id: 6,
        date: '2024-11-25',
        category: 'Acquisition',
        title: 'Strategic Acquisition Completed',
        excerpt: 'Successfully acquired emerging AI startup to strengthen our technology capabilities and market position.',
        content: 'Truzon Labs has completed the strategic acquisition of an innovative AI startup specializing in natural language processing and machine learning technologies. This acquisition will significantly enhance our product capabilities and accelerate our roadmap for AI-powered communication solutions. The talented team from the acquired company will join our research and development division, bringing valuable expertise and cutting-edge technology to our portfolio.',
        author: 'Corporate Development',
        readTime: '4 min read',
        isNew: false,
        featured: false
    },
    
   
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
                  <Link href={`/announcements/${announcement.id}`}>
                    <button className="text-black font-medium text-sm hover:text-gray-600 transition-colors text-grain group-hover:underline">
                      Read Full Announcement →
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Archive Link */}
        <div className="text-center mt-12">
          <Link href="/announcements">
            <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-3 text-base font-medium tracking-wide rounded-sm hover:bg-black hover:text-white">
              View All Announcements
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}