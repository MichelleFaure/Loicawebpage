import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
const History = () => {
  
  const historyData = [
    {
      text: "Nos conocimos en la adolescencia, en un entorno educativo que nos hacía ruido. Un espacio que, aunque se decía católico, parecía olvidar los valores de cuidado, justicia y amor al prójimo.  En ese contexto de contradicciones y exclusiones, comenzamos a mirarnos con complicidad.",
      icon: "/history/icon1.png",
      classes: "col-start-1 sm:col-start-2 col-end-3 py-4",
      line: true,
    },
    {
      text: "Quizás fue la rabia ante la discriminación, el clasismo o el machismo lo que nos unió al principio. Lo cierto es que ahí nació un vínculo que con el tiempo se hizo camino compartido.",
      icon: "/history/icon2.png",
      classes: "col-start-1 col-end-3 sm:col-end-2 md:pe-16 pe-4",
    },
    {
      text: "Sin haberlo planeado, años después elegimos la misma carrera: psicología. Si bien partimos en escuelas distintas, la vida nos volvió a reunir en la universidad. Estudiamos juntas, reflexionamos, discutimos, nos preguntamos desde dónde y para qué ejercer nuestra profesión.",
      icon: "/history/icon3.png",
      classes: "col-start-1 sm:col-start-2 col-end-3 row-start-3",
    },
    {
      text: "Nos fuimos reconociendo en una psicología con sentido ético, humano y político. Nos acercamos al feminismo, a la perspectiva comunitaria y a una forma de acompañar que no fragmenta, sino que integra.",
      icon: "/history/icon4.png",
      classes: "col-start-1 col-end-3 sm:col-end-2 row-start-4 md:pe-16 pe-4",
    },
    {
      text: "   La amistad se transformó en hermandad, y esa hermandad en proyecto. Así, en 2022 nació Loica: un centro psicoterapéutico que es, para nosotras, un sueño hecho espacio.",
      icon: "/history/icon5.png",
      classes: "col-start-1 sm:col-start-2 col-end-3 row-start-5",
    },
  ];
  
  return (
    <div className="max-w-[1000px] text-sm/6  mx-auto grid gap-y-6 gap grid-cols-2 grid-rows-5 text-grey-font my-10 ps-10 pe-2">
      {historyData.map((item, index) => (
        <div
          key={index}
          className={`relative shadow-lg min-h-[200px] flex items-center  ps-10 md:ps-16 pe-4 bg-lavender-light rounded-r-lg ${item.classes} ${poppins.className}`}
        >
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {item.text}
          </motion.p>
            <Image
              src={item.icon}
              alt="icono"
              width={100}
              height={100}
              quality={100}
              className={`w-[60px] absolute md:w-[100px] ${
                index % 2 === 0
                  ? "-left-8 md:-left-14 top-16 md:top-8"
                  : "md:-right-12 top-16 md:top-8 md:left-auto -left-8"
              } z-20`}
            />

          {index === 0 && (
            <div className="h-[930px] w-full absolute z-10 -left-1 top-20 border-l-4 border-l-coral" />
          )}
          {index === 4 && (
            <div className="h-[500px] w-full absolute z-10 -left-1 bottom-32 border-l-4 border-l-coral" />
          )}
        </div>
      ))}
    </div>
  );
};
export default History;
