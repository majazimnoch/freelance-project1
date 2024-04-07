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
            <h2 className="font-bold">Jane Doe</h2>
            <p>Example Street Name 1/2</p>
            <p>345 67 London</p>
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
            <h2 className="font-bold">Get in touch!</h2>
            <p>534 564 564 647</p>
            <p>test_email@test.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <iframe
          className="w-full lg:w-96 h-64 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6805638541696!2d-0.12720032343379223!3d51.50072917181175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2sse!4v1712512833405!5m2!1sen!2sse"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
