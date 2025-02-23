"use client";

import { getCookie } from "cookies-next";
import { motion } from "framer-motion";
import Link from "next/link"; // Correct import for Next.js Link

export const MotionBox = () => {
  const role = getCookie("user-role") || "";

  return (
    <motion.div
      className="w-full max-w-2xl bg-gray-900 text-white p-10 rounded-xl shadow-2xl flex flex-col items-center space-y-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Show login options if user is not logged in */}
      {!role && (
        <div className="flex space-x-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/auth/login"
              className="flex flex-col items-center text-xl font-semibold text-black bg-white px-6 py-4 rounded-lg shadow-lg transition-transform"
            >
              Admin
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/auth/login"
              className="flex flex-col items-center text-xl font-semibold text-black bg-white px-6 py-4 rounded-lg shadow-lg transition-transform"
            >
              Manager
            </Link>
          </motion.div>
        </div>
      )}

      {/* Show dashboard links if user is logged in */}
      {role === "admin" && (
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="/admin/dashboard"
            className="block text-xl font-semibold text-black bg-white px-6 py-4 rounded-lg shadow-lg transition-transform"
          >
            Go to Admin Dashboard
          </Link>
        </motion.div>
      )}
      {role === "manager" && (
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="/manager/dashboard"
            className="block text-xl font-semibold text-black bg-white px-6 py-4 rounded-lg shadow-lg transition-transform"
          >
            Go to Manager Dashboard
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};