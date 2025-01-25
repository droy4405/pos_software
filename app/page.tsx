'use client';
import Daily from "./Home/Daily/page";
import MenuBar from "./Components/MenuBar";
import "./globals.css";
import Link from "next/link";
import React from "react";

const components = [
  "Home",
  "Sales",
  "Purchases",
  "Inventory",
  "Contacts",
  "ProDuct Setting",
  "Report",
  "Setting",
];

const handleSelectItem = (component: string) => {
  console.log(component);
};

function Page() {
  return (
    <main>
      <Daily/>
      <MenuBar components={components} onSelectItem={handleSelectItem} />
      <Link href="/Home">
          <h1>Monthly</h1>
      </Link>
    </main>
  );
}
export default Page;
