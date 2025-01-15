import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";

function Explore() {
  return (
    <section className="max-w-screen-lg mx-auto my-24">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div>
          <p
            className={`${poppins.className} md:pl-2 text-center md:text-start`}
          >
            ¿Buscas mejorar tu bienestar psicógico y sexual?
          </p>
          <h2 className="text-5xl mt-4 mb-8 text-center md:text-start">
            Explora y reserva nuestros servicios
          </h2>
          <div className="flex items-center mx-auto md:mx-0 md:justify-between flex-col gap-4 md:flex-row max-w-md text-center">
            <Link
              href="/servicios"
              className={`${poppins.className} bg-lavender w-56 md:min-w-28 text-xl p-2 rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
            >
              Terapias
            </Link>
            <Link
              href="/servicios/5"
              className={`${poppins.className} bg-lavender w-56 md:min-w-28 text-xl p-2 rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
            >
              Cursos
            </Link>
            <Link
              href="/recursos"
              className={`${poppins.className} bg-lavender w-56 md:min-w-28 text-xl p-2 rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
            >
              Recursos
            </Link>
          </div>
        </div>
        <div className="p-4">
          <Image
            src="/home/explore.png"
            alt="Imagen explora nuestros servicios"
            width={500}
            height={320}
            className="md:ml-8"
          />
        </div>
      </div>
    </section>
  );
}

export default Explore;
