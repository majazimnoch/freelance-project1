import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import LottieAnimation from "./LottieAnimation"; // Import your LottieAnimation component

export default function Footer() {
  return (
    <div>
      <div className="bg-background flex flex-col md:flex-row gap-10 justify-center items-center px-20 py-20">
        <div className="flex flex-col gap-3">
          <Button buttonText="Umow wizyte" imageSrc="/images/arrow.png" link="/pages/kontakt" />
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
        <div>
        <Image
              src="/images/lion.png"
              alt="Instagram"
              width={180}
              height={180}
            />
        </div>
      </div>
      <div>
       {/*  <LottieAnimation /> {/* Render the LottieAnimation component */} 
      </div>
    </div>
  );
}
