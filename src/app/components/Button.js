import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Button({ buttonText, imageSrc, link }) {
  const buttonContent = (
    <button className="bg-secondary text-white flex flex-row items-center py-4 px-6 rounded-xl">
      <p>{buttonText}</p>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="logo"
          width={30}
          height={30}
          className="arrow-btn"
        />
      )}
    </button>
  );

  return (
    <div>
      {link ? (
        <Link href={link}>{buttonContent}</Link>
      ) : (
        <>{buttonContent}</>
      )}
    </div>
  );
}



{/* <div>
<Link href="/pages/kontakt">
  <button className="bg-secondary text-white flex flex-row items-center py-4 px-6 rounded-xl">
    <p className="">Umow wizyte</p>
    <Image
      src="/images/arrow.png"
      alt="logo"
      width={30}
      height={30}
      className="arrow-btn"
    />
  </button>
</Link>
</div> */}