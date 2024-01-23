import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Section2() {
  return (
    <div className="bg-background flex flex-row gap-10 justify-center px-20 py-10">
       <Link href="/">
          <Image
            src="/images/fb.png"
            alt="logo"
            width={50}
            height={50}
            className="logo-nav"
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/ig.png"
            alt="logo"
            width={50}
            height={50}
            className="logo-nav"
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/li.png"
            alt="logo"
            width={50}
            height={50}
            className="logo-nav"
          />
        </Link>

    </div>
  )
}
