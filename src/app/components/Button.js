import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Button({
  buttonText,
  imageSrc,
  link,
  onClick,
  bgColor,
}) {
  const buttonStyles = {
    backgroundColor: bgColor || "bg-secondary",
  };

  const buttonContent = (
    <button
      onClick={onClick}
      className={`${buttonStyles.backgroundColor} hover:bg-primary text-white flex flex-row items-center py-4 px-6 rounded-xl transition-colors duration-300`}
    >
      <p>{buttonText}</p>
      {imageSrc && (
        <Image
          src="/images/chevron.png"
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
      {link ? <Link href={link}>{buttonContent}</Link> : <>{buttonContent}</>}
    </div>
  );
}
