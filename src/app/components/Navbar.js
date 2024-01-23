import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center m-10">
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
      <div className="flex flex-row gap-10 list-none">
        <li>
          <Link href="/">Strona glowna</Link>
        </li>
        <li>
          <Link href="/pages/kontakt">Kontakt</Link>
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
