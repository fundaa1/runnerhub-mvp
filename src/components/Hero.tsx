import Link from 'next/link';

const Hero = () => {
  const whatsAppNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

  return (
    <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 md:p-12 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Placeholder SVG Logo */}
        <div className="mb-6 md:mb-0 md:mr-8">
          <svg
            className="w-24 h-24 md:w-32 md:h-32 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z" // Simple lightning bolt, can be replaced
            ></path>
          </svg>
          {/* Or you could use an Image component if you have a logo in /public */}
          {/* <Image src="/images/logo.svg" alt="RunnerHub Logo" width={150} height={50} /> */}
        </div>

        {/* Tagline and CTAs */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            RunnerHub
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Shop 24/7 • Fast WhatsApp Orders
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#products"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Browse Catalogue
            </Link>
            {whatsAppNumber && (
              <Link
                href={`https://wa.me/${whatsAppNumber}?text=Hi%20Sindi%2C%20I%27d%20like%20to%20know%20more%20about%20RunnerHub%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Chat on WhatsApp
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero; 