import React from "react";

const Footer = () => {
  return (
    <div className="w-[91vw] mx-auto bg-[#D51C29]">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-8"></div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Mission & Vision
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">How It Works</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                For Donors
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                For Organizations
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">Get Involved</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Donate Blood
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Volunteer
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Partner With Us
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="border-t border-white pt-8">
        <p className="text-sm text-white text-center">
          &copy; {new Date().getFullYear()} GiveTogether. All rights reserved.
          <span className="mx-2">•</span>
          <a href="#" className="text-white hover:text-gray-900">
            Privacy Policy
          </a>
          <span className="mx-2">•</span>
          <a href="#" className="text-white hover:text-gray-900">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
