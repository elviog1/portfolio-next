import Welcome from "./components/Welcome";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Tecnology from "./components/Tecnology";
import Works from "./components/Works";
import Square1 from "./components/square/Square1";
import Square3 from "./components/square/Square3";
import Square2 from "./components/square/Square2";

export default function Home() {
  return (
    <main>
      <Square1 col="bg-orange-400" width={"w-16"} height={"h-10"} />
      <Square2 col="bg-red-500" width={"w-8"} height={"h-8"} />
      <Square3 col="bg-emerald-300" width={"w-4"} height={"h-4"} />
      <Welcome />
      <About />
      <Certificate />
      <Tecnology />
      <Works />
    </main>
  );
}
