import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="font-bold flex flex-row md:text-lg justify-between items-center p-10 bg-white">
      <div>
        <Link href="/">
          <Image
            src="/images/icon.png"
            alt="logo"
            width={30}
            height={30}
            className="logo-nav"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-10 list-none text-background ">
        <li>
          <Link href="/">Home page</Link>
        </li>
        <li>
          <Link href="/pages/kontakt">Contact</Link>
        </li>
      </div>
    </div>
  );
}

{
  /* <Link href="/">
          <Image
            src="/images/logo-b.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded"
          />
        </Link> */
}
