"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { passwords } from "@/config/passwords";
import Hyperspeed from "@/components/Hyperspeed";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the password
    console.log(password);
    // Hardcoded password check
    if (passwords.includes(password)) {
      // Navigate to the home page on successful login
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  const hyperspeedOptions = useMemo(
    () => ({
      onSpeedUp: () => {},
      onSlowDown: () => {},
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.03, 400 * 0.2],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
        sticks: 0x03b3c3,
      },
    }),
    []
  );

  return (
    <div>
      <Hyperspeed effectOptions={hyperspeedOptions} />
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-center text-white">
            Welcome Back
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-200 sr-only"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 text-lg text-white bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 text-lg font-semibold text-white bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-150 hover:scale-105"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 