import React from "react";
import ActivityWidget from "./ActivityWidget";

export default function Welcome() {
  return (
    <section
      id="home"
      className="flex justify-center my-20  items-center font-serif"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center">
          ¡ Hola, soy Elvio !
        </h1>
        <span className="text-3xl max-sm:text-xl text-center">
          Desarrollador Fullstack
        </span>
        <span className="text-xl text-center">Actividad de contribución</span>
        <ActivityWidget />
      </div>
    </section>
  );
}
