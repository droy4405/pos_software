"use client";
import React from 'react'
import MenuBar from './MenuBar';       
const handleSelectItem = (component: string) => {
    console.log(component);
  };
  const items = [
    "Home",
    "Sales",
    "Purchases",
    "Inventory",
    "Contacts",
    "ProDuct Setting",
    "Report",
    "Setting",
  ];
export const ClickEvent = () => {
  return (
    <div>
        <MenuBar components={items} onSelectItem={handleSelectItem}/>
    </div>
  )
}
