import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="bg-background flex flex-col md:flex-row gap-10 justify-center items-center px-20 py-10">
      <div className="flex flex-col gap-3">
        <Button />
      </div>
      <div className="flex flex-row gap-5">
        <Link href="/">
          <Image
            src="/images/fb.png"
            alt="Facebook"
            width={50}
            height={50}
            className="social-icon"
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/ig.png"
            alt="Instagram"
            width={50}
            height={50}
            className="social-icon"
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/li.png"
            alt="LinkedIn"
            width={50}
            height={50}
            className="social-icon"
          />
        </Link>
      </div>
    </div>
  );
}
