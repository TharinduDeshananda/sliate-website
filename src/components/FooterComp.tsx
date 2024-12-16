import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.gov.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition duration-300"
              >
                Ministry of Higher Education
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-300"
              >
                University Grant Commission
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-300"
              >
                Model & Past Papers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-300"
              >
                Student Centered Learning
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-300"
              >
                ✉ Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Life @ SLIATE Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Life @ SLIATE
          </h3>
          <ul className="space-y-2">
            <li>Canteens</li>
            <li>Student Hostels</li>
            <li>Student Counseling</li>
            <li>Sports and Games</li>
            <li>Other Facilities</li>
          </ul>
        </div>

        {/* Research Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Research</h3>
          <ul className="space-y-2">
            <li>Research Symposium</li>
            <li>Research Allowance</li>
            <li>Research Papers</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">
            Reports
          </h3>
          <ul className="space-y-2">
            <li>Common Circular</li>
            <li>Internal Circular</li>
            <li>Annual Report</li>
            <li>Review Report</li>
            <li>ASM Decisions</li>
            <li>GC Decisions</li>
            <li>Establishments Code</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">
            SLIATE Head Office <br />
            320, T B Jayah Mawatha <br />
            Colombo, Sri Lanka
          </p>
          <p className="text-gray-400 mt-3">
            <strong>Phone:</strong> (+94) 112 691307 / 112 691572
          </p>
          <p className="text-gray-400 mt-3">
            <strong>Email:</strong> contact@sliate.lk
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Social Media & Copyright Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center max-w-7xl mx-auto text-sm">
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="YouTube"
          >
            YouTube
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-4 md:mt-0">
          © 2018 SLIATE All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
