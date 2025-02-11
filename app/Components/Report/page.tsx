import Link from "next/link";
import GoBack from "../buttons/GoBack";

export default function Report() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* Sales Report */}
        <Link
          href="/Components/Report/SalesReport"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Sales Report
        </Link>

        {/* Sales Return Report */}
        <Link
          href="/Components/Report/SalesReturnReport"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Sales Return Report
        </Link>

        {/* Purchase Report */}
        <Link
          href="/Components/Report/PurchaseReport"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Purchase Report
        </Link>
    
        {/* Purchase Return Report */}
        <Link
          href="/Components/Report/PurchaseReport"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Purchase Return Report
        </Link>
        {/* Day Cash Book */}
        <Link
          href="/Components/Report/DayCashBook"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Day Cash Book
        </Link>

        {/* Profit & Loss Account */}
        <Link
          href="/Components/Report/ProfitLossAccount"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Profit & Loss Account
        </Link>

        {/* Ledger Review */}
        <Link
          href="/Components/Report/LedgerReview"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Ledger Review
        </Link>

        {/* Voucher Report */}
        <Link
          href="/Components/Report/VoucherReport"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Voucher Report
        </Link>

        {/* Balance Sheet */}
        <Link
          href="/Components/Report/BalanceSheet"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Balance Sheet
        </Link>
      </div>
      <GoBack />    
    </div>
  );
}