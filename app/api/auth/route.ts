import { NextResponse } from "next/server";

// Hardcoded admin credentials
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";
const MANAGER_EMAIL = "manager@example.com";
const MANAGER_PASSWORD = "manager123";
export async function POST(request: Request) {
  const { email, password, role } = await request.json();

  // Check if the user is an admin
  if ( email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return NextResponse.json({
      user: { email, role: "admin" },
      token: "admin-token", // Simulate a token
    });
  }
  else if (email === MANAGER_EMAIL && password === MANAGER_PASSWORD) {    
    return NextResponse.json({
        user: { email, role: "manager" },
        token: "manager-token", // Simulate a token
      });
    }
  // If credentials are invalid
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}