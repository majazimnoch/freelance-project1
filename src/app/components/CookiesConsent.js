"use client"
import React from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Link from 'next/link'

export default function CookiesConsent() {

  const [showConsent, setShowConsent] = React.useState( true );

  React.useEffect( () => {
    setShowConsent( hasCookie( "localConsent" ));
  },[])

  return (
    <div>
      Cookies Banner 
    </div>
  )
}
