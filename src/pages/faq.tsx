import DefaultLayout from "@/layouts/default";
import { SearchIcon } from "@/components/icons";

export default function FAQ() {
  return (
    <DefaultLayout>
      {/* Hero / search frame */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="bg-[#d61f2a] rounded-3xl p-12 md:p-20 text-center text-cream-50">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#fff3e0] mb-8">Hi, how can we help?</h1>

            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f6ead1] opacity-90">
                  <SearchIcon className="text-[#f6ead1] w-6 h-6" />
                </span>
                <input
                  aria-label="Search"
                  placeholder="Enter your query"
                  className="w-full py-4 pl-14 pr-6 rounded-full text-lg md:text-xl bg-[#fff3e0] border-4 border-[#ffb24a] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Everything you need to know</h2>
          <p className="text-base text-default-600 mt-2">Quick topics for you to learn more</p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column items */}
            <div className="space-y-6">
              <TopicItem
                color="bg-red-600"
                title="Blood Donation"
                description="Learn everything you need to know about blood donations"
              />
              <TopicItem
                color="bg-emerald-300"
                title="Stem Cell Donation"
                description="Learn everything you need to know about stem cell donations"
              />
              <TopicItem
                color="bg-red-500"
                title="Canadian Blood Services"
                description="Learn everything you need to know about Canadian Blood Services"
              />
            </div>

            {/* Right column items */}
            <div className="space-y-6">
              <TopicItem
                color="bg-orange-400"
                title="Plasma Donation"
                description="Learn everything you need to know about plasma donations"
              />
              <TopicItem
                color="bg-sky-300"
                title="Canadian Blood Services"
                description="Learn everything you need to know about Canadian Blood Services"
              />
              <TopicItem
                color="bg-orange-400"
                title="Canadian Blood Services"
                description="Learn everything you need to know about Canadian Blood Services"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-red-600">Still want to ask us questions?</h3>
            <p className="text-sm text-default-600 my-4 max-w-2xl mx-auto">
              Let's find out! Depending on your responses to the following questions, you may be able to donate as of
              today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-orange-400 hover:bg-orange-300 text-white font-semibold px-8 py-3 rounded-full"
            >
              <span className="bg-white/20 rounded-full p-2">?</span>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

function TopicItem({ color, title, description }: { color: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`flex items-center justify-center w-14 h-14 rounded-full ${color} flex-shrink-0`}></div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">{title}</h4>
          <span className="text-2xl text-default-400">›</span>
        </div>
        <p className="text-sm text-default-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
