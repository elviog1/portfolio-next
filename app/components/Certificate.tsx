import Image from "next/image";
import Link from "next/link";
import React from "react";
import freeCodeCamp from "../../public/freecodecamp.jpeg";
import openBootCamp from "../../public/openbootcamp-sql.jpeg";
import sql from "../../public/openbootcamp-sql.jpeg";
export default function Certificate() {
  return (
    <section className="flex flex-col justify-center items-center my-10 gap-10 max-w-6xl mx-auto ">
      <div className="w-full">
        <h2 className="flex justify-center font-serif text-5xl pb-5 mb-5 text-center">
          Idiomas y Certificado
        </h2>
        <div className="flex justify-around">
          <div className="text-xl">
            <span>Español</span>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="text-xl">
            <span>Ingles</span>
            <p>⭐⭐</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-wrap gap-4">
          <Link href="https://www.credly.com/badges/b95e81c0-105e-4baa-a0e3-93ec593ceb7a/linked_in_profile">
            <Image
              src="https://images.credly.com/size/340x340/images/9ab2bbf5-a5cd-4c36-9c5a-1ce7e0e0cd32/Insignia_MERN-20.png"
              alt="Certificado de Mindhub"
              className="w-60 "
              width={1000}
              height={1000}
            />
          </Link>

          <Link href="/">
            <Image
              src={openBootCamp}
              alt="Certificado de JS"
              className="w-80 "
              width={1000}
              height={1000}
            />
          </Link>

          <Link href="https://www.freecodecamp.org/certification/Elviog1/javascript-algorithms-and-data-structures">
            <Image
              src={freeCodeCamp}
              alt="Certificado de JS"
              className="w-80 "
              width={1000}
              height={1000}
            />
          </Link>
          <Link href="https://storage.googleapis.com/openvitae-prod/diplomas%2F2907393f-6c9a-4568-9e78-c9f3b06a47f9.pdf">
            <Image
              src={sql}
              alt="Certificado de SQL"
              className="w-80 "
              width={1000}
              height={1000}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
