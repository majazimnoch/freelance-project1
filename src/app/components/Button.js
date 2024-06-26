import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Button({
  buttonText,
  link,
  onClick,
  bgColor,
  imageSrc,
  hasImage = false,
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
      {hasImage && imageSrc && (
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
      {link ? <Link href={link}>{buttonContent}</Link> : <>{buttonContent}</>}
    </div>
  );
}
