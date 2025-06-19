import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
const CursosCards = () => {
  return (
    <section
      className={`${poppins.className} max-w-screen-lg my-24 mx-auto px-4 py-10`}
    >
      <h3 className="text-center text-2xl text-grey-font">
        Formaciones que transforman:
      </h3>
      <h3 className="text-center text-4xl text-grey-font mt-4 mb-24">
        sexualidad, género, vínculos y salud mental
      </h3>
      <div className="flex flex-col gap-8">
        <div className="relative flex flex-col-reverse gap-10 justify-around md:flex-row shadow-xl p-8 rounded-xl items-center  bg-lavender text-white text-base">
          <div className="z-10 max-w-[450px]">
            Entre Chile y España, hemos facilitado espacios formativos que no
            nacen solo del conocimiento técnico, sino de la escucha, la empatía
            y la certeza de que lo personal es profundamente político.
          </div>
          <Image
            src="/cursosytalleres/cursoimg1.png"
            alt="imagen del equipo de centro de psicologia loica realizando talleres y cursos a publico"
            width={250}
            height={187}
            quality={100}
            className="z-10"
          />
          <Image
            src="/cursosytalleres/cornerbg2.png"
            alt=""
            width={147}
            height={213}
            quality={100}
            className="absolute top-0 left-0"
          />
        </div>
        <div className="relative flex flex-col gap-10 justify-around md:flex-row shadow-xl p-8 rounded-xl items-center  bg-lavender text-white text-base">
          <Image
            src="/cursosytalleres/cursoimg2.png"
            alt="imagen del equipo de centro de psicologia loica realizando talleres y cursos a publico"
            width={250}
            height={187}
            quality={100}
            className="z-10"
          />
          <div className="z-10 max-w-[450px]">
            Nos han invitado a hablar de sexualidad, migración, género,
            consentimiento, salud mental, memoria y vínculos. Y en cada uno de
            esos espacios, no llegamos desde la verdad absoluta, sino desde el
            deseo de construir juntas nuevas formas de comprendernos, de
            relacionarnos, de vivirnos.
          </div>

          <Image
            src="/cursosytalleres/cornerbg.png"
            alt=""
            width={147}
            height={213}
            quality={100}
            className="absolute top-0 right-0"
          />
        </div>
        <div className="relative flex flex-col-reverse gap-10 justify-around md:flex-row shadow-xl p-8 rounded-xl items-center  bg-lavender text-white text-base">
          <div className="z-10 max-w-[450px]">
            Nuestra apuesta metodológica es vivencial, situada y adaptada a cada
            comunidad. Trabajamos desde una perspectiva feminista,
            interseccional y respetuosa de la diversidad cultural.
          </div>
          <Image
            src="/cursosytalleres/cursoimg3.png"
            alt="imagen del equipo de centro de psicologia loica realizando talleres y cursos a publico"
            width={250}
            height={187}
            quality={100}
            className="z-10"
          />
          <Image
            src="/cursosytalleres/cornerbg2.png"
            alt=""
            width={147}
            height={213}
            quality={100}
            className="absolute top-0 left-0"
          />
        </div>
        <div className="relative flex flex-col gap-10 justify-around md:flex-row shadow-xl p-8 rounded-xl items-center  bg-lavender text-white text-base">
          <Image
            src="/cursosytalleres/cursoimg4.png"
            alt="imagen del equipo de centro de psicologia loica realizando talleres y cursos a publico"
            width={250}
            height={187}
            quality={100}
            className="z-10"
          />
          <div className="z-10 max-w-[450px]">
            Preferimos las rondas a los podios, los talleres a las conferencias,
            el vínculo antes que la instrucción. Y sabemos que cuando se
            habilita la confianza, el aprendizaje se vuelve experiencia y el
            conocimiento se hace cuerpo.
          </div>

          <Image
            src="/cursosytalleres/cornerbg.png"
            alt="underline"
            width={147}
            height={213}
            quality={100}
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};
export default CursosCards;
