import React from 'react';
import { Link } from 'react-router-dom';
import nigeria from "../assets/nigeria.svg"
import naira from "../assets/naira.svg"



const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Car Rentals', href: '/car-rentals' },
        { name: 'Apartments', href: '/apartments' }
      ]
    },
    {
      title: 'Terms',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cookies Policy', href: '/cookies-privacy' },
        { name: 'Term of Use', href: '/terms-of-use' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Service', href: '/Customer-service' },
        { name: "FAQ's", href: '/faq' },
        { name: 'Safety Guides', href: '/safety-guides' }
      ]
    },
    {
      title: 'Account',
      links: [
        { name: 'Sign Up', href: '/' },
        { name: 'Sign In', href: '/' },
        { name: 'Manage Bookings', href: '/manage-bookings' }
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'complaints', email: 'complaints@smashapartments.com', href: 'mailto:complaints@smashapartments.com' },
        { name: 'Enquiries', email: 'info@smashapartments.com', href: 'mailto:info@smashapartments.com' },
      ]
    }
  ];

  return (
    <footer className="bg-[rgba(250,250,250,1)] text-black">
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
                    <div className='max-w-[800px] mx-auto mb-[1.7rem] flex flex-wrap w-full justify-between items-center w-full text-xs'>
                <p>• Abuja</p>
<p>• Lagos</p>
<p>• Port-Harcourt</p>
<p>• Benin</p>
<p>• Enugu</p>
<p>• Akwa Ibom</p>
<p>• Kaduna</p>
<p>• Kano</p>
<p>• Abia</p>
<p>• Asaba</p>
<p>• Lokoja</p>
<p>• Calabar</p>


            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto max-w-[800px]">

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-base font-semibold text-black mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {section.title === 'Contact Us' ? (
                      <div className="space-y-1">
                        <div className="text-black text-xs font-medium">
                          {link.name}
                        </div>
                        <a
                          href={link.href}
                          className="text-black hover:text-black hover:font-semibold transition-colors duration-200 text-xs block"
                        >
                          {link.email}
                        </a>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-black hover:text-black hover:font-semibold transition-colors duration-200 text-xs"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with Copyright and Social Media */}
        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="flex items-center text-gray-600 text-xs">
                © {new Date().getFullYear()} Smash Apartments. All Rights Reserved

                <p className='px-2 text-gray-600 text-xs'>• Privacy Policy</p>
<p className='px-2 text-gray-600 text-xs'>• Terms of Use</p>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-end space-x-6">
                <div className='flex items-center gap-3'>
                    <img src={naira} alt="" />
                    <img src={nigeria} alt="" />
                </div>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;