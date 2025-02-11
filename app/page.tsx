import Link from "next/link";
import { getCookie } from "cookies-next";


export default function HomePage() {
  const role = getCookie("user-role"); // Get the user's role from cookies

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#344CB7] p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Welcome to Star-Software</h1>
      <div className="w-full max-w-2xl bg-white p-8 rounded-full shadow-lg flex flex-col items-center space-y-6">
        
        {/* Show login options if user is not logged in */}
        {!role && (
          <div className="flex space-x-6">
            <Link
              href="/auth/login"
              className="flex flex-col items-center text-xl font-semibold text-white bg-[#344CB7] p-4 rounded-full w-32 h-32 justify-center hover:bg-blue-700 transition-colors duration-300"
            >
              Admin
            </Link>
            <Link
              href="/auth/login"
              className="flex flex-col items-center text-xl font-semibold text-white bg-[#344CB7] p-4 rounded-full w-32 h-32 justify-center hover:bg-blue-700 transition-colors duration-300"
            >
              Manager
            </Link>
          </div>
        )}

        {/* Show dashboard links if user is logged in */}
        {role === "admin" && (
          <Link
            href="/admin/dashboard"
            className="block text-xl font-semibold text-white bg-[#344CB7] p-4 rounded-full w-48 text-center hover:bg-blue-700 transition-colors duration-300"
          >
            Go to Admin Dashboard
          </Link>
        )}
        {role === "manager" && (
          <Link
            href="/manager/dashboard"
            className="block text-xl font-semibold text-white bg-[#344CB7] p-4 rounded-full w-48 text-center hover:bg-blue-700 transition-colors duration-300"
          >
            Go to Manager Dashboard
          </Link>
        )}
      </div>
    </div>
  );
}
