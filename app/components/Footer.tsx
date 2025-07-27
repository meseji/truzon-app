import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-6 tracking-tight">
              Truzon Labs
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering businesses with cutting-edge SaaS platforms for messaging, 
              communication, and customer engagement solutions.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Team', 'Careers', 'Blog'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {['Meseji Platform', 'Chat Widget', 'API Access', 'Custom Development', 'Support'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Truzon Labs LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}