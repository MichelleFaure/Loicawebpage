'use client'
import { Typewriter } from "react-simple-typewriter";
import Profiles from "@/components/Profiles";
import SubTitle from "@/components/SubTitle";
import Image from "next/image";
import { poppins } from "../fonts/fonts";

function NosotrasPage() {
  return (
    <section>
      <div
        className={`max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-8 md:px-0 ${poppins.className}`}
      >
        <div>
          <h3 className="text-sm">Un espacio seguro para sanar</h3>
          <div className="flex flex-col md:flex-row md:items-center my-4">
            <h2 className="text-3xl font-light">Loica es</h2>
            <div className="text-3xl font-bold md:pl-2">
              <Typewriter
                words={[
                  "Bienestar",
                  "feminista",
                  "humanista",
                  "integral",
                  "acción social",
                  "libertad",
                  "acompañamiento",
                  "crecimiento personal",
                  "autonomía",
                  "salud",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>

          <p className="text-md">
                Aqui falta un texto que no esta en figma buuuu...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/us/usBannerImg.png"
            alt="Imagen banner pagina nosotras de centro de psicologia"
            width={400}
            height={270}
          />
        </div>
      </div>
      <div className="bg-bluish-Gray w-full py-20 px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          <div>
            <h2 className="text-white text-5xl text-center mb-8">
              Nuestra Visión
            </h2>
            <p
              className={`text-white text-xl font-light text-center md:text-left  ${poppins.className}`}
            >
              Ofrecer un espacio seguro y acogedor brindando psicológico y
              sexológico, promoviendo el bienestar emocional, mental y sexual
              desde una perspectiva de derechos, de género, feminista y
              humanista. Abordando de manera integral la salud mental tanto
              colectiva como individual sin patologizar.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/us/flower.png"
              alt="Imagen de una flor"
              width={274}
              height={421}
            />
          </div>
          <div>
            <h2 className="text-white text-5xl text-center mb-8">
              Nuestra Misión
            </h2>
            <p
              className={`text-white text-xl font-light text-center md:text-right ${poppins.className}`}
            >
              Comprometidas con un modelo de psicoterapia con conciencia y
              responsabilidad social, promoviendo un espacio centrado en la
              persona y sus necesidades como ser diverso y único, otorgando
              comodidad, seguridad y apoyo en cada proceso de crecimiento
              personal. Con un enfoque cada día más integrativo, trabajando en
              colaboración con distintas disciplinas en pos de una comprensión
              más completa de la salud y el bienestar.
            </p>
          </div>
        </div>
      </div>
      <SubTitle text="Lorem ipsum dolor sit"></SubTitle>
      <Profiles></Profiles>
    </section>
  );
}
export default NosotrasPage;
