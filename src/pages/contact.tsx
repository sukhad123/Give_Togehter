import { Hero } from "@/components/hero";
import DefaultLayout from "@/layouts/default";
export default function ContactPage() {
  return (
    <DefaultLayout>
      {/* Hero */}
      <Hero />

      {/* Socials */}
      <section className="bg-[#fff3e0] py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Follow us on socials</h2>
          <p className="mt-2 text-default-600">Follow us for epic updates, donation tips, and some real fun content!</p>

          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <a
                href="#"
                className="flex items-center gap-4 bg-[#E4405F] text-white px-8 py-4 rounded-full font-semibold text-lg w-full md:w-96"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.01 7.053.072 2.695.272.273 2.69.073 7.052.01 8.333 0 8.74 0 12s.01 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.99 8.74 24 12 24s3.667-.01 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.99 15.667 24 15.26 24 12s-.01-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.01 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-[#1877F2] text-white px-8 py-4 rounded-full font-semibold text-lg w-full md:w-96"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>

            <div className="flex flex-col gap-6 items-start">
              <a
                href="#"
                className="flex items-center gap-4 bg-[#0077B5] text-white px-8 py-4 rounded-full font-semibold text-lg w-full md:w-96"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-[#FF0000] text-white px-8 py-4 rounded-full font-semibold text-lg w-full md:w-96"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Forms section */}
      <section className="bg-[#fff3e0] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-center items-center">
            {/* Left: Reach out form */}
            <div className="lg:col-span-6 text-center">
              <h3 className="text-3xl font-bold">Reach out to us</h3>
              <p className="mt-2 text-default-600">Still have questions? Ask us any questions you might have!</p>

              <form className="mt-6 space-y-4 max-w-md mx-auto">
                <input
                  placeholder="First Name"
                  className="w-full rounded-full border border-gray-400 px-4 py-3 bg-transparent"
                />
                <input
                  placeholder="Last Name"
                  className="w-full rounded-full border border-gray-400 px-4 py-3 bg-transparent"
                />
                <input
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-400 px-4 py-3 bg-transparent"
                />
                <input
                  placeholder="Phone Number"
                  className="w-full rounded-full border border-gray-400 px-4 py-3 bg-transparent"
                />
                <textarea
                  placeholder="Let us know your query"
                  className="w-full rounded-2xl border border-gray-400 px-4 py-3 min-h-[120px]"
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center gap-3 bg-orange-400 hover:bg-orange-300 text-white font-semibold px-8 py-3 rounded-full"
                >
                  Submit form <span className="text-2xl">›</span>
                </button>
              </form>
            </div>

            {/* Right: Join mission panel */}
            <div className="lg:col-span-6">
              <div className="bg-[#76bfb9] rounded-3xl p-8 md:p-12 max-w-full">
                <h3 className="text-3xl font-bold text-[#08363a] text-center">Like our mission?</h3>
                <p className="mt-4 text-sm text-[#08363a] text-center">
                  Join us and be part of the best student-led community that's making a difference
                </p>

                <form className="mt-6 space-y-4">
                  <input
                    placeholder="First Name"
                    className="w-full rounded-full border border-[#0e5250] px-4 py-3 bg-transparent"
                  />
                  <input
                    placeholder="Last Name"
                    className="w-full rounded-full border border-[#0e5250] px-4 py-3 bg-transparent"
                  />
                  <input
                    placeholder="Email"
                    className="w-full rounded-full border border-[#0e5250] px-4 py-3 bg-transparent"
                  />
                  <input
                    placeholder="Phone Number"
                    className="w-full rounded-full border border-[#0e5250] px-4 py-3 bg-transparent"
                  />
                  <select className="w-full rounded-full border border-[#0e5250] px-4 py-3 bg-transparent">
                    <option>Area of Interest</option>
                  </select>
                  <textarea
                    placeholder="Why would you like to join us?"
                    className="w-full rounded-2xl border border-[#0e5250] px-4 py-3 min-h-[120px] bg-transparent"
                  />

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-[#08363a]">5/200 characters</div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-orange-400 hover:bg-orange-300 text-white font-semibold px-6 py-3 rounded-full"
                    >
                      Submit form <span className="text-2xl">›</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
