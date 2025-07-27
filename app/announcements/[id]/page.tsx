'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AnnouncementArticlePage() {
    const params = useParams();
    const id = params.id;

    // Mock data - in a real app, this would come from an API or database
    const announcements = [
        {
            id: '1',
            date: '2025-01-15',
            category: 'Partnership',
            title: 'Strategic Partnership with Global Tech Leader',
            excerpt: 'Truzon Labs announces a major strategic partnership to expand our portfolio companies into international markets.',
            content: `
        <p>We are excited to announce a groundbreaking strategic partnership with a leading global technology company that will significantly expand our reach into international markets. This partnership represents a major milestone in our company's growth trajectory and demonstrates the strength of our portfolio companies.</p>

        <h3>Partnership Overview</h3>
        <p>This collaboration will provide our portfolio companies with access to new distribution channels, advanced technology resources, and strategic guidance from industry experts. The partnership encompasses several key areas:</p>

        <ul>
          <li><strong>Market Expansion:</strong> Access to new international markets across Europe, Asia, and Latin America</li>
          <li><strong>Technology Integration:</strong> Enhanced platform capabilities through advanced API integrations</li>
          <li><strong>Resource Sharing:</strong> Shared development resources and technical expertise</li>
          <li><strong>Strategic Guidance:</strong> Mentorship from seasoned industry leaders</li>
        </ul>

        <h3>Impact on Portfolio Companies</h3>
        <p>This partnership is expected to accelerate growth across all our business units and create new opportunities for innovation and market expansion. Our portfolio companies will benefit from:</p>

        <blockquote>
          "This partnership opens doors to opportunities we never thought possible. The combined expertise and resources will allow us to serve customers globally while maintaining our commitment to innovation and excellence."
        </blockquote>

        <h3>Implementation Timeline</h3>
        <p>The partnership will be implemented in phases over the next 18 months:</p>

        <ul>
          <li><strong>Phase 1 (Q1 2025):</strong> Initial integration and team alignment</li>
          <li><strong>Phase 2 (Q2-Q3 2025):</strong> Market expansion into European markets</li>
          <li><strong>Phase 3 (Q4 2025-Q1 2026):</strong> Full global rollout and optimization</li>
        </ul>

        <h3>Looking Forward</h3>
        <p>We believe this partnership will not only accelerate our growth but also strengthen our position as a leader in the technology sector. We look forward to sharing more updates as we progress through the implementation phases.</p>

        <p>For more information about this partnership and its implications for our stakeholders, please contact our investor relations team.</p>
      `,
            author: 'Leadership Team',
            authorRole: 'Executive Leadership',
            readTime: '5 min read',
            isNew: true,
            featured: true,
            tags: ['Partnership', 'Growth', 'International', 'Strategy'],
            relatedIds: ['2', '4', '7']
        },
        {
            id: '2',
            date: '2025-01-10',
            category: 'Investment',
            title: 'Series B Funding Round Completed',
            excerpt: 'Successfully closed $25M Series B funding round to accelerate growth across our portfolio businesses.',
            content: `
        <p>Truzon Labs has successfully completed a $25 million Series B funding round led by prominent venture capital firms. This significant investment marks a crucial milestone in our company's journey and validates the strength of our business model and growth potential.</p>

        <h3>Funding Details</h3>
        <p>The Series B round was oversubscribed, demonstrating strong investor confidence in our vision and execution capabilities. The funding round details include:</p>

        <ul>
          <li><strong>Total Amount:</strong> $25 million</li>
          <li><strong>Lead Investor:</strong> Prominent venture capital firm with extensive technology portfolio</li>
          <li><strong>Participating Investors:</strong> Mix of existing investors and new strategic partners</li>
          <li><strong>Valuation:</strong> Significant increase from our Series A round</li>
        </ul>

        <h3>Strategic Allocation</h3>
        <p>This investment will be strategically allocated across our portfolio companies to accelerate product development, expand market presence, and strengthen our technology infrastructure:</p>

        <blockquote>
          "This funding provides us with the resources needed to execute our ambitious growth plans while maintaining our focus on innovation and customer success."
        </blockquote>

        <h3>Investment Areas</h3>
        <ul>
          <li><strong>Product Development (40%):</strong> Enhanced features and new product lines</li>
          <li><strong>Market Expansion (30%):</strong> International growth and new market penetration</li>
          <li><strong>Technology Infrastructure (20%):</strong> Scalability and security improvements</li>
          <li><strong>Team Growth (10%):</strong> Key hires across all departments</li>
        </ul>

        <h3>Investor Perspective</h3>
        <p>Our lead investor commented on the investment decision, highlighting our strong market position and growth trajectory. The partnership brings not only capital but also valuable strategic guidance and industry connections.</p>

        <h3>Next Steps</h3>
        <p>With this funding secured, we are well-positioned to execute our growth strategy and continue building innovative solutions that serve our customers' evolving needs. We expect to announce several new initiatives in the coming months as we deploy this capital strategically.</p>
      `,
            author: 'Finance Team',
            authorRole: 'Chief Financial Officer',
            readTime: '6 min read',
            isNew: true,
            featured: true,
            tags: ['Investment', 'Funding', 'Growth', 'Series B'],
            relatedIds: ['1', '3', '6']
        }
    ];

    const relatedAnnouncements = [
        {
            id: '3',
            title: 'Meseji 3.0 Platform Launch',
            category: 'Product Launch',
            date: '2024-12-20',
            excerpt: 'Our flagship communication platform launches with enhanced AI capabilities and enterprise features.'
        },
        {
            id: '4',
            title: 'New Regional Office Opening',
            category: 'Expansion',
            date: '2024-12-15',
            excerpt: 'Opening our new Asia-Pacific headquarters to better serve our growing international client base.'
        },
        {
            id: '7',
            title: 'Enterprise Integration Partnership',
            category: 'Partnership',
            date: '2024-11-10',
            excerpt: 'New partnership enables seamless integration with leading enterprise software platforms.'
        }
    ];

    const announcement = announcements.find(a => a.id === id);

    if (!announcement) {
        return (
            <div className="grain-effect">
                <div className="corporate-clean min-h-screen">
                    <Header />
                    <div className="pt-32 pb-16 text-center">
                        <h1 className="text-4xl font-light text-grain font-serif mb-4">Article Not Found</h1>
                        <p className="text-gray-600 mb-8">The announcement you're looking for doesn't exist.</p>
                        <a href="/announcements" className="btn-premium bg-black text-white px-8 py-3 text-base font-medium tracking-wide rounded-sm">
                            Back to Announcements
                        </a>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

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
        <div className="grain-effect">
            <div className="corporate-clean min-h-screen">
                <Header />

                {/* Article Header */}
                <article className="pt-32 pb-16">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                                <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
                                <li>/</li>
                                <li><a href="/announcements" className="hover:text-black transition-colors">Announcements</a></li>
                                <li>/</li>
                                <li className="text-gray-700">{announcement.title}</li>
                            </ol>
                        </nav>

                        {/* Article Meta */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-sm ${getCategoryColor(announcement.category)}`}>
                                    {announcement.category}
                                </span>
                                {announcement.isNew && (
                                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-sm animate-pulse">
                                        NEW
                                    </span>
                                )}
                            </div>

                            <time className="text-sm text-gray-500 text-grain mb-4 block">
                                {formatDate(announcement.date)}
                            </time>
                        </div>

                        {/* Article Title */}
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-light text-grain font-serif mb-6 tracking-tight leading-tight">
                                {announcement.title}
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed text-grain mb-8">
                                {announcement.excerpt}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-gray-600 font-medium text-sm">
                                            {announcement.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-grain">{announcement.author}</div>
                                        <div className="text-sm text-gray-500 text-grain">{announcement.authorRole}</div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500 text-grain">
                                    {announcement.readTime}
                                </div>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div
                                className="text-gray-700 leading-relaxed text-grain article-content"
                                dangerouslySetInnerHTML={{ __html: announcement.content }}
                            />
                        </div>

                        <style jsx>{`
              .article-content {
                line-height: 1.8;
              }
              .article-content h3 {
                font-size: 1.5rem;
                font-weight: 500;
                margin: 2rem 0 1rem 0;
                color: #1f2937;
                font-family: 'Playfair Display', serif;
              }
              .article-content p {
                margin-bottom: 1.5rem;
                color: #4b5563;
              }
              .article-content ul {
                margin: 1.5rem 0;
                padding-left: 1.5rem;
              }
              .article-content li {
                margin-bottom: 0.5rem;
                color: #4b5563;
              }
              .article-content li strong {
                color: #1f2937;
                font-weight: 600;
              }
              .article-content blockquote {
                border-left: 4px solid #000;
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: #374151;
                background: #f9fafb;
                padding: 1.5rem;
                border-radius: 0.25rem;
              }
            `}</style>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-medium text-grain mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {announcement.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-sm hover:bg-gray-200 transition-colors cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-medium text-grain mb-4">Share this announcement</h3>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition-colors text-sm">
                                    Share on LinkedIn
                                </button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded-sm hover:bg-gray-900 transition-colors text-sm">
                                    Share on Twitter
                                </button>
                                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-sm hover:bg-gray-200 transition-colors text-sm">
                                    Copy Link
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Announcements */}
                <section className="py-16 bg-gray-50 corporate-grid">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl font-light text-grain font-serif mb-12 text-center">
                            Related Announcements
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedAnnouncements.map((related) => (
                                <article key={related.id} className="group">
                                    <a href={`/announcements/${related.id}`}>
                                        <div className="bg-white professional-texture p-6 rounded-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-sm mb-4 ${getCategoryColor(related.category)}`}>
                                                {related.category}
                                            </span>

                                            <time className="text-sm text-gray-500 text-grain mb-3 block">
                                                {formatDate(related.date)}
                                            </time>

                                            <h3 className="text-lg font-medium text-grain font-serif mb-3 group-hover:text-gray-600 transition-colors">
                                                {related.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm leading-relaxed text-grain">
                                                {related.excerpt}
                                            </p>

                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <span className="text-black font-medium text-sm hover:text-gray-600 transition-colors text-grain group-hover:underline">
                                                    Read More →
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-16 bg-white orbital-pattern">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <h3 className="text-3xl font-light text-grain font-serif mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-lg text-gray-600 text-grain mb-8">
                            Subscribe to receive the latest announcements and updates from Truzon Labs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all text-grain"
                            />
                            <button className="btn-premium bg-black text-white px-8 py-3 text-base font-medium tracking-wide rounded-sm whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>

                {/* Back to Announcements */}
                <section className="py-8 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <a href="/announcements">
                            <button className="btn-premium bg-transparent text-black border-2 border-black px-8 py-3 text-base font-medium tracking-wide rounded-sm hover:bg-black hover:text-white">
                                ← Back to All Announcements
                            </button>
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}