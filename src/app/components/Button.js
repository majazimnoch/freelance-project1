import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Button() {
  return (
    <div>
      <Link href="/pages/kontakt">
        <button className="bg-primary text-white flex flex-row items-center py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          <p className="uppercase ">Umow wizyte</p>
          <Image
            src="/images/arrow.png"
            alt="logo"
            width={30}
            height={30}
            className="logo-nav"
          />
        </button>
      </Link>
    </div>
  );
}
