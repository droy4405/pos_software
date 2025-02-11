import { NextResponse } from "next/server";
import { deleteCookie } from "cookies-next";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out successfully" });
  deleteCookie("auth-token");
  deleteCookie("user-role");
  return response;
}