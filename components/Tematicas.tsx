"use client";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { motion } from "framer-motion";
const tematicas = [
  "Comunicación asertiva y vínculos sanos",
  "Educación inclusiva y crítica de los medios",
  "Atención, memoria y bienestar psicoemocional",
  "Trauma relacional, duelo migratorio y autocuidado",
  "Masculinidades, emociones y autoestima",
  "Transdiversidades, adolescencia y género",
  "Derechos sexuales y reproductivos",
  "Educación sexual en familia e infancia",
  "Consentimiento y prevención del abuso",
];
const Tematicas = () => {
  return (
    <section
      className={`${poppins.className} relative p-4 max-w-screen-lg mx-auto my-36`}
    >
      <Image
        src="/cursosytalleres/cursoimg5.png"
        alt="decoración fondo"
        width={588}
        height={552}
        quality={100}
        className="md:absolute -z-10 bottom-0 right-0"
      />
      <div className="text-4xl w-[350px] text-grey-font">
        Temáticas que hemos abordado
      </div>
      <Image
        src="/cursosytalleres/underline2.png"
        alt="underline"
        width={300}
        height={15}
        quality={100}
        className="mt-4 mb-8"
      />
      <div className="text-xl mb-4 text-grey-font">Nos han invitado en Chile y España a hablar de:</div>

      <div className="flex flex-col gap-4 text-base text-grey-font">
        {tematicas.map((texto, index) => (
          <motion.div
            key={texto}
            className="flex md:items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
            <p>{texto}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Tematicas;
