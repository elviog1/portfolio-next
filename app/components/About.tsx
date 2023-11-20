import Image from "next/image";
import React from "react";
import selfie from "../../public/elvio-selfie.jpeg";
export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center pb-5  px-4 "
    >
      <div className="max-w-7xl">
        <div className="flex justify-evenly gap-10 w-full flex-wrap ">
          <Image
            src={selfie}
            alt="Picture Elvio"
            className="rounded-full w-64 h-64 object-cover shadow"
            width={1000}
            height={1000}
          />
          <div className=" max-w-xl text-left self-center">
            <h2 className="flex  font-serif text-5xl pb-5">Sobre mi</h2>
            <span className="text-xl">
              Soy Desarrollador Frontend, estudiante de Técnico en Programación
              en la Universidad de Quilmes. Realicé un bootcamp en MINDHUB donde
              aprendí a utilizar las siguientes tecnologías: Javascript, CSS,
              Bootstrap, React/React Native, Tailwind, Redux, Node.js,
              Express.js, MongoDB, Postman, REST API. Desarrollamos proyectos
              simulando un ambiente de trabajo REAL, implementando Metodologías
              Ágiles SCRUM.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
