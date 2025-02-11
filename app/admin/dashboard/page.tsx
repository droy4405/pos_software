import LogoutButton from "@/app/Components/LogoutButton/LogoutButton";
import Link from "next/link";
import MobileView from "@/app/Components/mobile/MobileView";
import LiveDateTime from "@/app/Components/TimePage/TimePage";
import {
  FaBox,
  FaShoppingCart,
  FaDollarSign,
  FaAddressBook,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import GoBack from "@/app/Components/buttons/GoBack";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      {/* Main Content */}
      <main className="flex-1 p-8 max-w-screen-xl mx-auto w-full">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Admin Dashboard
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Welcome, Admin!
          </h2>
          <p className="text-gray-600">
            Manage your products, sales, purchases, and more from this
            dashboard.
          </p>
          <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 w-full">
            <LiveDateTime />
          </div>
        </div>
        {/* Interactive Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
          <Link
            href="/Components/Products"
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <FaBox className="text-gray-700 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">Products</h3>
          </Link>
          <Link
            href="/Components/Sales"
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <FaShoppingCart className="text-gray-700 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">Sales</h3>
          </Link>
          <Link
            href="/Components/Purchase"
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <FaDollarSign className="text-gray-700 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">Purchases</h3>
          </Link>
          <Link
            href="/Components/Contacts"
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <FaAddressBook className="text-gray-700 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">Contacts</h3>
          </Link>
          <Link
            href="/Components/Productsetting"
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <FaCogs className="text-gray-700 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">
              Product Setting
            </h3>
          </Link>
          <Link
            href="/Components/Report"
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <FaChartLine className="text-gray-700 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">Report</h3>
          </Link>
        </div>
        {/* Logout Button */}
        <div className="mt-8 flex justify-center w-full">
          <LogoutButton />
        </div>
        {/* Footer */}
        <footer className="mt-10 text-center text-gray-500 w-full">
          © 2025 Star-Software. All rights reserved.
        </footer>
      </main>
      {/* Mobile View */}
      <MobileView />
    </div>
  );
}
