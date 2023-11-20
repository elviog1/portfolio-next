"use client";
import React, { useState } from "react";
import Project from "./Project";
import futbolCiego from "../../public/futbolciego1.jpeg";
import freeFigma from "../../public/freefigmatemplates.jpeg";
import memoryGame from "../../public/game1.jpeg";
import pizza from "../../public/pizzeria1.jpeg";
import braille from "../../public/braille-traductor.jpeg";
export default function Works() {
  const projects = [
    {
      name: "Futbol Ciego Avellaneda",
      description:
        "Proyecto de un equipo de fútbol para ciegos, donde se muestran los jugadores con su descripción personal, ficha de contacto, información del club y como administrador puedes crear y editar jugadores.",
      picture: futbolCiego,
      url: "https://futbolciegoavellaneda.vercel.app/",
      github: "https://github.com/elviog1/piranias",
    },
    {
      name: "Free Figma Templates (Clone)",
      description:
        "Landing page clonada del sitio oficial de Free Figma Templates que ofrece sus servicios gratis.",
      picture: freeFigma,
      url: "https://freefigmatemplates-clone.netlify.app/",
      github: "https://github.com/elviog1/freeFigmaTemplates-clone",
    },
    {
      name: "Memory Game",
      description:
        "Juego en el que tendrás que encontrar dos cartas iguales hasta que no queden cartas boca abajo.",
      picture: memoryGame,
      url: "https://memory-fruit-game.netlify.app/",
      github: "https://github.com/elviog1/game-memory",
    },
    {
      name: "Pizzeria",
      description:
        "Proyecto personal donde realizo un ecommerce donde puedes comprar, retirar y editar las cantidades del producto y como administrador te sale una tabla con el pedido del usuario a realizar.",
      picture: pizza,
      url: "https://pizzeria-solano.vercel.app/",
      github: "https://github.com/elviog1/id-pizza",
    },
    {
      name: "Braille Traductor",
      description:
        "Pagina donde escribiremos una frase y obtendremos el resultado en Braille.",
      picture: braille,
      url: "https://braille-traductor.vercel.app/",
      github: "https://github.com/elviog1/braille-traductor",
    },
  ];

  const noticiasPorSeccion: any = 5; // Define el número de noticias por sección

  const [seccionActual, setSeccionActual] = useState(1);

  const totalSecciones = Math.ceil(projects.length / noticiasPorSeccion); // cantidad de noticias dividido noticias secciones

  const cambiarSeccion = (seccion: any) => {
    setSeccionActual(seccion);
  };
  const startIndex = (seccionActual - 1) * noticiasPorSeccion;
  const endIndex = startIndex + noticiasPorSeccion;
  const noticiasSeccion = projects.slice(startIndex, endIndex);

  return (
    <section
      id="projects"
      className="flex justify-center items-center  max-w-7xl mx-auto "
    >
      <div className="w-full">
        <span className="flex justify-center font-serif text-5xl pb-5">
          Proyectos - {projects.length}
        </span>
        <div className="flex flex-wrap gap-5 justify-center">
          {noticiasSeccion.map((project, index) => (
            <Project
              key={index}
              project={project}
              noticiasPorSeccion={noticiasPorSeccion}
              seccionActual={seccionActual}
            />
          ))}
        </div>
        <div className="flex justify-center">
          {Array.from({ length: totalSecciones }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => cambiarSeccion(index + 1)}
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-bold my-5"
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
