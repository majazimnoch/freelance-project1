"use client";
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import Button from "./Button";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasCookie("localConsent")) {
        setShowConsent(true);
        setShowOverlay(true); // Show overlay when consent is not given
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setShowOverlay(false); // Hide overlay after accepting cookies

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365); // Set expiration to 1 year from now
    setCookie("localConsent", "true", { expires: expirationDate });
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white opacity-50 transition-opacity duration-500 ${
          showOverlay ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed bottom-0 left-0 w-full bg-white flex justify-center items-end transition-opacity duration-500 ease-in-out ${
          showConsent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full">
          <div className="bg-secondary px-10 py-8 flex items-center justify-around gap-2">
            <span className="text-white">
              We use cookies to enhance your browsing experience. By clicking
              "Accept," you consent to our cookie usage. Read more about it{" "}
              <Link href="/pages/cookies"> here </Link>.
            </span>
            <Button
              buttonText="Accept"
              onClick={acceptCookie}
              bgColor="bg-background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
