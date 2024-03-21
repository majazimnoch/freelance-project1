"use client"
import React, {useState, useEffect} from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import Button from './Button';

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (!hasCookie('localConsent')) {
        setShowConsent(true);
    }
  }, []);


  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", {})
  };

  if (showConsent) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-70 z-[5000]">
        <div className="fixed bottom-0 left-0 flex items-center justify-between gap-4 px-4 py-8 bg-primary">
          <span className="">
            We use cookies to enhance your browsing experience. By clicking "Accept," you consent to our cookie usage. Read more about it{' '}
            <Link href="/"> here </Link>
          </span>
          <Button buttonText="Accept" onClick={acceptCookie} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}