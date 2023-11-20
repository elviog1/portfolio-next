"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageButton from "./LanguageButton";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logo-name.png";
import logoDark from "../../public/logo-name-dark.png";
export default function Header() {
  const [clickButton, setClickButton] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const handleButton = () => {
    setClickButton(!clickButton);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  useEffect(() => {
    return () => {
      setClickButton(false);
    };
  }, []);

  return (
    <header className="p-4">
      <nav className="container mx-auto flex items-center justify-between">
        {!isDark ? (
          <Image
            src={logo}
            alt="logo-portfolio"
            className="w-40"
            width={1000}
            height={1000}
          />
        ) : (
          <Image
            src={logoDark}
            alt="logo-portfolio"
            className="w-40"
            width={1000}
            height={1000}
          />
        )}
        <div className="hidden md:block">
          <div className="flex gap-4">
            <button onClick={toggleDarkMode}>
              {isDark ? (
                <BsFillSunFill className="duration-200 hover:text-orange-400 text-3xl mr-5 cursor-pointer" />
              ) : (
                <BsFillMoonStarsFill className="duration-200 hover:text-blue-400 text-3xl mr-5 cursor-pointer" />
              )}
            </button>

            {/* <LanguageButton /> */}
            <div className="flex items-center gap-4 font-semibold">
              <Link className="hover:text-red-500 duration-300" href="#about">
                Sobre mi
              </Link>
              <Link
                className="hover:text-red-500 duration-300"
                href="#tecnology"
              >
                Tecnologias
              </Link>
              <Link
                className="hover:text-red-500 duration-300"
                href="#projects"
              >
                Proyectos
              </Link>
              <Link className="hover:text-red-500 duration-300" href="#contact">
                Contactame
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 md:hidden">
          <button onClick={toggleDarkMode}>
            {isDark ? (
              <BsFillSunFill className="duration-200 hover:text-orange-400 text-3xl mr-5 cursor-pointer" />
            ) : (
              <BsFillMoonStarsFill className="duration-200 hover:text-blue-400 text-3xl mr-5 cursor-pointer" />
            )}
          </button>
          {/* <LanguageButton /> */}
          <button onClick={handleButton}>
            {clickButton ? "Cerrar" : "Menú"}
          </button>
        </div>
      </nav>
      {/* mobile */}
      {clickButton && (
        <div className=" md:hidden flex flex-col gap-2 p-2 rounded my-2">
          <Link href="/">Inicio</Link>
          <Link href="/">Proyectos</Link>
          <Link href="/">Contacto</Link>
        </div>
      )}
    </header>
  );
}
