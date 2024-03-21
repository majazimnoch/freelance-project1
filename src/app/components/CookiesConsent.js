"use client"
import React from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import Button from './Button';

export default function CookiesConsent() {

  const [showConsent, setShowConsent] = React.useState( true );

  React.useEffect( () => {
    setShowConsent(hasCookie("localConsent"));
  },[])

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {})
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-white bg-opacity-70 z-[5000]'>
      <div className='fixed bottom-0 left-0 flex items-center justify-between gap- px-4 py-8 bg-primary'>
        <span className=''>We use cookies to enhance your browsing experience. By clicking "Accept," you consent to our cookie usage. Read more about it <Link href="/"> here </Link></span>
        <Button buttonText="Accept" 
            link="/"  
            onClick={() => acceptCookie()} />
      </div>
    </div>
  )
}
