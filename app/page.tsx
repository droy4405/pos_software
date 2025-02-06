import Home from "./Home/page";
import "./globals.css";
import Link from "next/link";
import React from "react";


function Page() {
  return (
    <main>
      <Home/>
      <Link href="/Home">
        <h1 className="mg-5"></h1>
      </Link>
      <Link href="/Users">
        <h1>Users</h1>
      </Link>
      <Link href="/Components/Products">
        <h1>Products</h1>
      </Link>
    </main>
  );
}
export default Page;
