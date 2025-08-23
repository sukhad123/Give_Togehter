const socialLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/letsgivetogether/?hl=en",
    bgColor: "bg-[#E4405F]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.01 7.053.072 2.695.272.273 2.69.073 7.052.01 8.333 0 8.74 0 12s.01 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.99 8.74 24 12 24s3.667-.01 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.99 15.667 24 15.26 24 12s-.01-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.01 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/givetogether/posts/?feedView=all",
    bgColor: "bg-[#0077B5]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    bgColor: "bg-[#1877F2]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: "Youtube",
    bgColor: "bg-[#FF0000]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const Social = () => {
  return (
    <div className="bg-[#70B8B7] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Follow us on socials</h2>
          <p className="text-lg">Follow us for epic updates, donation tips, and some real fun content!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img src="/index/social.png" alt="Social media grid" className="rounded-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.link}
                  href="#"
                  className={`${link.bgColor} flex items-center justify-center text-white font-bold py-4 px-6 rounded-full text-lg w-full transition-transform transform hover:scale-105`}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
