'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AnnouncementsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

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
        {
            id: 7,
            date: '2024-11-10',
            category: 'Partnership',
            title: 'Enterprise Integration Partnership',
            excerpt: 'New partnership enables seamless integration with leading enterprise software platforms.',
            content: 'We have established a comprehensive partnership with major enterprise software providers to enable seamless integration capabilities across popular business platforms. This collaboration will allow our customers to integrate our communication solutions directly into their existing workflows, improving productivity and user adoption rates.',
            author: 'Business Development',
            readTime: '3 min read',
            isNew: false,
            featured: false
        },
        {
            id: 8,
            date: '2024-10-28',
            category: 'Product Launch',
            title: 'Mobile App 2.0 Release',
            excerpt: 'Enhanced mobile experience with new features and improved performance across all devices.',
            content: 'Our mobile application has been completely redesigned with version 2.0, offering enhanced user experience, improved performance, and new collaborative features. The update includes offline messaging capabilities, advanced security features, and seamless synchronization across all devices.',
            author: 'Mobile Team',
            readTime: '3 min read',
            isNew: false,
            featured: false
        }
    ];

    const categories = ['All', 'Partnership', 'Investment', 'Product Launch', 'Expansion', 'Recognition', 'Acquisition'];

    const filteredAnnouncements = announcements.filter(announcement => {
        const matchesCategory = selectedCategory === 'All' || announcement.category === selectedCategory;
        const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            announcement.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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

    const featuredAnnouncements = announcements.filter(a => a.featured);
    const regularAnnouncements = filteredAnnouncements.filter(a => !a.featured);

    return (
        <div className="grain-effect">
            <div className="corporate-clean min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white orbital-pattern">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-light text-grain font-serif mb-6 tracking-tight">
                                Company
                                <span className="font-medium block">Announcements</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-grain">
                                Stay informed about our latest developments, partnerships, and strategic initiatives
                                across our portfolio of technology companies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Announcements */}
                {featuredAnnouncements.length > 0 && (
                    <section className="py-16 bg-gray-50 corporate-grid">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <h2 className="text-3xl font-light text-grain font-serif mb-12 text-center">
                                Featured Announcements
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {featuredAnnouncements.map((announcement) => (
                                    <article key={announcement.id} className="group">
                                        <div className="bg-white professional-texture p-8 rounded-sm hover:shadow-xl transition-all duration-300 border-2 border-black/10 hover:border-black/20">
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

                                            <time className="text-sm text-gray-500 text-grain mb-4 block">
                                                {formatDate(announcement.date)}
                                            </time>

                                            <h3 className="text-2xl font-medium text-grain font-serif mb-4 group-hover:text-gray-600 transition-colors">
                                                {announcement.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed text-grain mb-6">
                                                {announcement.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <span>{announcement.author}</span>
                                                    <span>•</span>
                                                    <span>{announcement.readTime}</span>
                                                </div>
                                                <Link href={`/announcements/${announcement.id}`}>
                                                    <button className="text-black font-medium text-sm hover:text-gray-600 transition-colors text-grain group-hover:underline">
                                                        Read More →
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Search and Filter */}
                <section className="py-8 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            {/* Search */}
                            <div className="flex-1 max-w-md">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search announcements..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all text-grain"
                                    />
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${selectedCategory === category
                                                ? 'bg-black text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Announcements */}
                <section className="py-16 bg-white minimal-corporate">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-light text-grain font-serif">
                                All Announcements
                            </h2>
                            <span className="text-gray-500 text-grain">
                                {filteredAnnouncements.length} announcement{filteredAnnouncements.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        <div className="space-y-8">
                            {regularAnnouncements.map((announcement) => (
                                <article key={announcement.id} className="group">
                                    <div className="bg-gray-50 professional-texture p-8 rounded-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                                        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                            {/* Content */}
                                            <div className="flex-1">
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

                                                <time className="text-sm text-gray-500 text-grain mb-3 block">
                                                    {formatDate(announcement.date)}
                                                </time>

                                                <h3 className="text-xl font-medium text-grain font-serif mb-3 group-hover:text-gray-600 transition-colors">
                                                    {announcement.title}
                                                </h3>

                                                <p className="text-gray-600 leading-relaxed text-grain mb-4">
                                                    {announcement.excerpt}
                                                </p>

                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <span>{announcement.author}</span>
                                                    <span>•</span>
                                                    <span>{announcement.readTime}</span>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="lg:flex-shrink-0">
                                                <Link href={`/announcements/${announcement.id}`}>
                                                    <button className="btn-premium bg-black text-white px-6 py-3 text-sm font-medium tracking-wide rounded-sm group-hover:bg-gray-800 transition-colors">
                                                        Read Full Article
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredAnnouncements.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 bg-gray-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-grain mb-2">No announcements found</h3>
                                <p className="text-gray-600 text-grain">Try adjusting your search or filter criteria.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="py-16 bg-gray-50 corporate-lines">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <h3 className="text-3xl font-light text-grain font-serif mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-lg text-gray-600 text-grain mb-8">
                            Subscribe to receive the latest announcements and updates directly in your inbox.
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

                        <p className="text-sm text-gray-500 text-grain mt-4">
                            No spam, unsubscribe at any time. Privacy policy applies.
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}