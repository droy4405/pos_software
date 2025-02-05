import Daily from "./Home/Daily/daily";
import "./globals.css";
import Link from "next/link";
import React from "react";
import { ClickEvent } from "./Components/ClickEvent";

function Page() {
  return (
    <main>
      <Daily/>
      <ClickEvent />
      <Link href="/Home">
        <h1>Monthly</h1>
      </Link>
      <Link href="/Users">
        <h1>Users</h1>
      </Link>
    </main>
  );
}
export default Page;
