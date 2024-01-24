import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="flex justify-center items-center">
      <div class="flex justify-center items-center flex-wrap p-10">
        <div class="bg-primary flex justify-center items-center relative w-80 h-96 m-8 rounded-3xl">
          <Image
            src="/images/icon.png"
            alt="logo"
            width={30}
            height={30}
            className="icon-section"
          />
          <div className="absolute w-full p-8 py-36 text-center">
            <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
            <p className="text-background leading-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, ab ducimus maiores quisquam
              expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>

        <div class="card">
          <div class="icon">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
          </div>
          <div class="content">
            <h2>Card two</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, ab ducimus maiores quisquam
              expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <ion-icon name="color-palette-outline"></ion-icon>
          </div>
          <div class="content">
            <h2>Card three</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
              debitis blanditiis dolorum vero, ab ducimus maiores quisquam
              expedita voluptate! Magni, vitae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   <div className="bg-white px-5 py-20 md:px-80 md:mx-40">
//   <p className="text-center my-10 text-3xl">Zajmuje sie</p>
//   <div className="grid lg:grid-cols-2 grid-rows-2 gap-4 mx-auto">
//     <div className="blob yellow text-background flex flex-col text-center">
//       <p>Afazja. </p>
//     </div>
//     <div className="blob pink text-background flex flex-col text-center">
//       <p>Praca z dziecmi </p>
//     </div>
//     <div className="blob yellow text-background flex flex-col text-center">
//       <p>Cwizcenie wymawiania glosek </p>
//     </div>
//     <div className="blob pink text-background flex flex-col text-center">
//       <p>Pewnosc wymowy </p>
//     </div>
//   </div>
// </div>
