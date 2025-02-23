

import { MotionEffect } from "./Components/HomePageClient/MotionWelcome";
import { MotionBox } from "./Components/HomePageClient/MotionBox";

export default function HomePage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <MotionEffect effect01="Welcome to the Dashboard" />
      <MotionBox />
    </div>
  );
}
