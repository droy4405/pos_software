import Link from "next/link";

export default function ProductSetting() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Setting</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* Phones */}
        <Link
          href="/Components/Productsetting/Phones"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Phones
        </Link>

        {/* Cover */}
        <Link
          href="/Components/Productsetting/Cover"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Cover
        </Link>

        {/* SmartWatch */}
        <Link
          href="/Components/Productsetting/SmartWatch"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          SmartWatch
        </Link>

        {/* Charger */}
        <Link
          href="/Components/Productsetting/Charger"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Charger
        </Link>

        {/* Screen Protector */}
        <Link
          href="/Components/Productsetting/ScreenProtector"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Screen Protector
        </Link>

        {/* Headphone */}
        <Link
          href="/Components/Productsetting/Headphone"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Headphone
        </Link>
      </div>
    </div>
  );
}