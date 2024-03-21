"use client";
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import Button from "./Button";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    if (!hasCookie("localConsent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-70 z-[5000] flex justify-center items-end">
        <div className="w-full">
          <div className="bg-primary px-4 py-8 flex items-center justify-between gap-4">
            <span className="">
              We use cookies to enhance your browsing experience. By clicking
              "Accept," you consent to our cookie usage. Read more about it{" "}
              <Link href="/pages/oferta"> here </Link>
            </span>
            <Button buttonText="Accept" onClick={acceptCookie} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
