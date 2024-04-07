import React from "react";
import Image from "next/image";
export default function Section1() {
  return (
    <div className="bg-white flex justify-center items-center lg:py-10">
      <div className="flex justify-center items-center lg:gap-14 flex-wrap p-8">
        <div className="bg-primary flex flex-col justify-start items-center relative w-72 h-96 m-3 p-8 rounded-3xl">
          <Image
            src="/images/handshake.png"
            alt="logo"
            width={70}
            height={70}
            className="icon-section"
          />
          <div className="absolute w-full px-6 py-20 text-center">
            <h2 className="text-background text-2xl font-pacifico py-2.5 px-7.5 my-4.5">
              Card one
            </h2>
            <p className="text-background leading-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, maiores quisquam expedita
              voluptate!
            </p>
          </div>
        </div>

        <div className="bg-primary flex flex-col justify-start items-center relative w-72 h-96 m-3 p-8 rounded-3xl">
          <Image
            src="/images/microphone.png"
            alt="logo"
            width={60}
            height={60}
            className="icon-section"
          />
          <div className="absolute w-full px-6 py-20 text-center">
            <h2 className="text-background font-pacifico py-2.5 px-7.5 text-2xl my-4.5">
              Card two
            </h2>
            <p className="text-background leading-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis bland
            </p>
          </div>
        </div>

        <div className="bg-primary flex flex-col justify-start items-center relative w-72 h-96 m-3 p-8 rounded-3xl">
          <Image
            src="/images/reading-book.png"
            alt="logo"
            width={60}
            height={60}
            className="icon-section"
          />
          <div className="absolute w-full px-6 py-20 text-center">
            <h2 className="text-background font-pacifico py-2.5 px-7.5 text-2xl my-4.5">
              Card three
            </h2>
            <p className="text-background leading-normal">
              Nobis tempore nulla in eum nisi laboriosam reiciendis porro
              accusamus, debitis blanditiis dolorum vero, ab ducimus maiores
              quisquam expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>
        {/*         <div className="bg-primary flex flex-col justify-start items-center relative w-72 h-96 m-3 p-6 rounded-3xl">
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
        <div className="bg-primary flex flex-col justify-start items-center relative w-72 h-96 m-3 p-6 rounded-3xl">
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
        </div> */}
      </div>
    </div>
  );
}
