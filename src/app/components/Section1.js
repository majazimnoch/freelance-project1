import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-wrap p-10">
        <div className="bg-primary flex flex-col justify-start items-center relative w-80 h-96 m-3 p-6 rounded-3xl">
          <Image
            src="/images/icon.png"
            alt="logo"
            width={60}
            height={60}
            className="icon-section"
          />
          <div className="absolute w-full p-4 py-20 text-center">
            <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
            <p className="text-background leading-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, ab ducimus maiores quisquam
              expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>
        <div className="bg-primary flex flex-col justify-start items-center relative w-80 h-96 m-3 p-6 rounded-3xl">
          <Image
            src="/images/icon.png"
            alt="logo"
            width={60}
            height={60}
            className="icon-section"
          />
          <div className="absolute w-full p-4 py-20 text-center">
            <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
            <p className="text-background leading-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, ab ducimus maiores quisquam
              expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>
        <div className="bg-primary flex flex-col justify-start items-center relative w-80 h-96 m-3 p-6 rounded-3xl">
          <Image
            src="/images/icon.png"
            alt="logo"
            width={60}
            height={60}
            className="icon-section"
          />
          <div className="absolute w-full p-4 py-20 text-center">
            <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
            <p className="text-background leading-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, ab ducimus maiores quisquam
              expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>

        {/* Rest of your code for other cards */}
      </div>
    </div>
  );
}
