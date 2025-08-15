const Footer = () => {
  return (
    <footer className="bg-[#D51C29] text-[#FFFBEB]">
      <div className="w-[85%] mx-auto py-10">
        {/* Top: Logo */}
        <div className="pb-6 border-b border-white/20">
          <img src="/logo/LogoWhite.svg" alt="Give Together" className="size-1/9" />
        </div>

        {/* Middle: Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-8">
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Pages</h4>
            <ul className="space-y-3">
              <li>
                <a className="hover:opacity-90" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="/FAQ">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="/landing">
                  Landing Page
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a className="hover:opacity-90" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="#">
                  Volunteer With Us
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="#">
                  Support Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a className="hover:opacity-90" href="/FAQ">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="#">
                  Blood Donation Guide
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" target="_blank" rel="noreferrer" href="https://www.blood.ca/">
                  Canadian Blood Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a className="hover:opacity-90" href="#">
                  Join Our Community
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="#">
                  Community Guide
                </a>
              </li>
              <li>
                <a className="hover:opacity-90" href="#">
                  Reach Out To Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Social + legal links */}
        <div className="py-6 flex flex-col items-center gap-5">
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/15"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FFFBEB]">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.78 2.65 4.78 6.09V24h-4v-7.39c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V24h-4V8z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/15"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FFFBEB]">
                <path d="M7 2C4.25 2 2 4.25 2 7v10c0 2.75 2.25 5 5 5h10c2.75 0 5-2.25 5-5V7c0-2.75-2.25-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/15"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FFFBEB]">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v2h2.2L15.9 15h-2v7A10 10 0 0022 12z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/15"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FFFBEB]">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.8zM9.6 15.5v-7l6.4 3.5-6.4 3.5z" />
              </svg>
            </a>
          </div>

          <div className="text-[#FFFBEB]/90 text-sm flex gap-8">
            <a href="#" className="hover:opacity-90">
              Terms & Conditions
            </a>
            <a href="#" className="hover:opacity-90">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/20 pt-4 pb-2 text-center text-sm">
          <p>
            © {new Date().getFullYear()} All Rights Reserved &nbsp; Built with{" "}
            <span className="text-yellow-300">❤</span> in Canada by students!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
