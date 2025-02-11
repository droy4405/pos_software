import Link from "next/link";
import GoBack from "../buttons/GoBack";

export default function PurchasePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Purchase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Sales Option */}
        <Link
          href="/Components/Sales/Sales"
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <span className="text-lg font-semibold text-gray-900">Purchase</span>
        </Link>

        {/* Sales Return Option */}
        <Link
          href="/Components/Sales/SalesReturn"
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <span className="text-lg font-semibold text-gray-900">
            Purchase Return
          </span>
        </Link>
      </div>
      <GoBack />
    </div>
  );
}
