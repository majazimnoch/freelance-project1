"use client";
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import Button from "./Button";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (!hasCookie("localConsent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365); // Set expiration to 1 year from now
    setCookie("localConsent", "true", { expires: expirationDate });
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-white flex justify-center items-end transition-opacity duration-500 ease-in-out ${showConsent ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full">
        <div className="bg-primary px-4 py-8 flex items-center justify-between gap-4">
          <span className="text-background">
            We use cookies to enhance your browsing experience. By clicking
            "Accept," you consent to our cookie usage. Read more about it{" "}
            <Link href="/pages/oferta"> here </Link>
          </span>
          <Button buttonText="Accept" onClick={acceptCookie} />
        </div>
      </div>
    </div>
  );
}
