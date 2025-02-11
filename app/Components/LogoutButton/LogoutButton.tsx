// /app/components/LogoutButton.tsx
"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    deleteCookie("auth-token");
    deleteCookie("user-role");
    router.push("/"); // Redirect to the home page
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
    >
      Logout
    </button>
  );
}