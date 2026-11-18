//
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-img.jpg"
          alt="Luxury modern residential apartments"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
          <div className="max-w-2xl text-white">
            <p className="text-yellow-400 uppercase tracking-[5px] mb-5 font-medium">
              About Us
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Dreams,
              <span className="block text-yellow-400">Creating Futures</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
              Your trusted real estate partner in finding the perfect property.
              We turn your property dreams into reality.
            </p>

            <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition duration-300">
              Explore More →
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-6">1. Who We Are</h1>
        <p className="text-gray-700 mb-6">
          Welcome to GS Real Estate, your trusted partner in the world of real
          estate. We are a dedicated team of professionals committed to helping
          you find your dream property. With years of experience and a deep
          understanding of the market, we provide personalized solutions to meet
          your unique needs.
        </p>
        <p className="text-gray-700 mb-6">
          We are a customer-focused real estate company dedicated to helping
          individuals, families, and businesses discover properties that match
          their lifestyle, needs, and investment goals.
        </p>
        <p className="text-gray-700 mb-6">
          With a commitment to transparency, quality, and customer satisfaction,
          we make every step of your real estate journey simple, smooth, and
          rewarding.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-6">2. Our Mission</h1>
        <p className="text-gray-700 mb-6">
          At GS Real Estate, our mission is to empower individuals and families to achieve their real estate dreams. We strive to be the most trusted and reliable real estate partner, providing exceptional service and unmatched expertise to help our clients navigate the complexities of the real estate market.
        </p>
      </div>
    </main>
  );
}
