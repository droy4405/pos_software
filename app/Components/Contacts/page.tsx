import Link from "next/link";
import GoBack from "../buttons/GoBack";

export default function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contacts</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* Customer Information */}
        <Link
          href="/Components/Contacts/CustomerInformation"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Customer Information
        </Link>

        {/* Party Information */}
        <Link
          href="/Components/Contacts/PartyInformation"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Party Information
        </Link>

        {/* Customer Dues */}
        <Link
          href="/Components/Contacts/CustomerDues"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Customer Dues
        </Link>

        {/* Party Dues */}
        <Link
          href="/Components/Contacts/PartyDues"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Party Dues
        </Link>

        {/* Owner Payments */}
        <Link
          href="/Components/Contacts/OwnerPayments"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Owner Payments
        </Link>
      </div>
      <GoBack/>
    </div>
  );
}