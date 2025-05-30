import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";
const History = () => {
  return (
    <div className="max-w-[1000px] text-sm  mx-auto grid gap-y-6 gap grid-cols-2 grid-rows-5 text-grey-font my-10 ps-10 pe-2">
      <div
        className={`relative shadow-lg min-h-[200px]  col-start-1 sm:col-start-2 col-end-3 ps-10 md:ps-16 py-4 pe-4  bg-lavender-light rounded-r-lg  ${poppins.className}`}
      >
        Nos conocimos en la adolescencia, en un entorno educativo que nos hacía
        ruido. Un espacio que, aunque se decía católico, parecía olvidar los
        valores de cuidado, justicia y amor al prójimo.  En ese contexto de
        contradicciones y exclusiones, comenzamos a mirarnos con complicidad.
        <Image
          src="/history/icon1.png"
          alt="imagen de nosotras locia"
          width={100}
          height={100}
          quality={100}
          className="w-[60px] absolute md:w-[100px] -left-8 top-16 md:top-8 md:-left-14  z-20"
        />
        <div className="h-[930px]   w-full absolute z-10 -left-1 top-20 border-l-4 border-l-coral "></div>
      </div>

      <div
        className={`relative shadow-lg col-start-1 col-end-3 sm:col-end-2 ps-10 md:ps-4 md:pe-16 py-4 pe-4 bg-lavender-light rounded-r-lg sm:rounded-r-none sm:rounded-l-lg  ${poppins.className}`}
      >
        Quizás fue la rabia ante la discriminación, el clasismo o el machismo lo
        que nos unió al principio. Lo cierto es que ahí nació un vínculo que con
        el tiempo se hizo camino compartido.
        <Image
          src="/history/icon2.png"
          alt="imagen de nosotras locia"
          width={100}
          height={100}
          quality={100}
          className="w-[60px] absolute md:w-[100px] -left-8 top-16 md:top-8 md:left-auto md:-right-12 z-20"
        />
      </div>
      <div
        className={`relative shadow-lg col-start-1 sm:col-start-2 col-end-3 row-start-3 ps-10 md:ps-16 py-4 pe-4 bg-lavender-light rounded-r-lg  ${poppins.className}`}
      >
        Sin haberlo planeado, años después elegimos la misma carrera:
        psicología. Si bien partimos en escuelas distintas, la vida nos volvió a
        reunir en la universidad. Estudiamos juntas, reflexionamos, discutimos,
        nos preguntamos desde dónde y para qué ejercer nuestra profesión.
        <Image
          src="/history/icon3.png"
          alt="imagen de nosotras locia"
          width={100}
          height={100}
          quality={100}
          className="w-[60px] absolute md:w-[100px] -left-8 top-16 md:top-8 md:-left-14 z-20"
        />
      </div>
      <div
        className={`relative shadow-lg col-start-1 col-end-3 sm:col-end-2 row-start-4 ps-10 md:ps-4 md:pe-16 py-4 pe-4 bg-lavender-light rounded-r-lg sm:rounded-r-none sm:rounded-l-lg  ${poppins.className}`}
      >
        Nos fuimos reconociendo en una psicología con sentido ético, humano y
        político. Nos acercamos al feminismo, a la perspectiva comunitaria y a
        una forma de acompañar que no fragmenta, sino que integra.
        <Image
          src="/history/icon4.png"
          alt="imagen de nosotras locia"
          width={100}
          height={100}
          quality={100}
          className="w-[60px] absolute md:w-[100px] -left-8 top-16 md:top-8 md:left-auto md:-right-12 z-20"
        />
      </div>
      <div
        className={`relative shadow-lg col-start-1 sm:col-start-2 col-end-3 row-start-5 ps-10 md:ps-16 py-4 pe-4 bg-lavender-light rounded-r-lg  ${poppins.className}`}
      >
        La amistad se transformó en hermandad, y esa hermandad en proyecto. Así,
        en 2022 nació Loica: un centro psicoterapéutico que es, para nosotras,
        un sueño hecho espacio.
        <Image
          src="/history/icon5.png"
          alt="imagen de nosotras locia"
          width={100}
          height={100}
          quality={100}
          className="w-[60px] absolute md:w-[100px] -left-8 top-16 md:top-8 md:-left-14 z-20"
        />
      </div>
    </div>
  );
};
export default History;
