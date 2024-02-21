'use client'
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieAnimation() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://lottie.host/2393bbca-d87c-4895-a701-9dbbc3eb24ef/sjJsFqw6aI.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const animationData = await response.json();

        // Initialize Lottie animation
        lottie.loadAnimation({
          container: lottieContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData,
        });
      } catch (error) {
        console.error("Error fetching Lottie animation data:", error);
      }
    };

    fetchData();

    // Cleanup
    return () => {
      // Stop and destroy animation when component unmounts
      lottie.stop();
      lottie.destroy();
    };
  }, []);

  return <div ref={lottieContainer} style={{ width: "200px" }}></div>;
}