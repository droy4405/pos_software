import Link from "next/link";

export default function ManageManagers() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Managers</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md space-y-6">
        <Link
          href="/admin/managers/create"
          className="block text-xl font-semibold text-gray-900 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          Create New Manager
        </Link>
        {/* List of managers */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Manager List</h2>
          {/* Fetch and display managers here */}
        </div>
      </div>
    </div>
  );
}