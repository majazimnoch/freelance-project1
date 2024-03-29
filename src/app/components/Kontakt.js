import React from "react";
import Image from "next/image";

export default function Kontakt() {
  return (
     <div className="bg-primary lg:px-20 lg:py-40 flex flex-col justify-center gap-10 lg:flex-row">
      <div className="flex flex-col gap-10 p-10">
        <div className="flex flex-row gap-5 items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/pin.png"
              alt="logo"
              width={60}  
              height={60} 
              className="logo-nav"
            />
          </div>
          <div className="flex flex-col w-9/12">
            <h2 className="font-bold">Bogumila Zimnoch</h2>
            <p>
              Wizyty indywidualne.
            </p>
            <p>Popieluszki 27/44 94-052 Lodz</p>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/mobile.png"
              alt="logo"
              width={60}  
              height={60} 
              className="logo-nav"
            />
          </div>
          <div className="flex flex-col w-9/12">
            <h2 className="font-bold">Skontaktuj sie</h2>
            <p>534564564647</p>
            <p>mskadsd@efws.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.5609644264637!2d19.381830876884845!3d51.74106509360627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a357bad874185%3A0x18f5e91843ab4509!2zUG9waWXFgnVzemtpIDI3LCA5NC0wNTIgxYHDs2TFuiwgUG9sYW5k!5e0!3m2!1sen!2sse!4v1706113726712!5m2!1sen!2sse"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
