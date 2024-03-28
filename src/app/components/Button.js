import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Button({ buttonText, imageSrc, link, onClick, bgColor, hoverBgColor }) {
  const buttonStyles = {
    backgroudColor: bgColor || 'bg-secondary'
  };

  const buttonContent = (
    <button 
      onClick={onClick}
      className={`${buttonStyles.backgroudColor} ${hoverBgColor && `hover:${hoverBgColor}`} hover:bg-primary text-white flex flex-row items-center py-4 px-6 rounded-xl transition-colors duration-300`}
    >
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