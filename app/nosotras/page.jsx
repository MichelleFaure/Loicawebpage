'use client'
import Profiles from "@/components/Profiles";
import SubTitle from "@/components/SubTitle";
import Image from "next/image";
import { poppins } from "../fonts/fonts";
import History from "@/components/History";
import { motion } from "framer-motion";
function NosotrasPage() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-screen-lg mx-auto my-14">
        <div>
          <Image
            src="/us/usLogo.png"
            alt="loco centro Psicología loica"
            width={230}
            height={217}
            quality={100}
            className="flex justify-center items-center p-4 max-w-screen-lg mx-auto"
          />
        </div>
        <div
          className={`font-light text-2xl p-4 text-center md:text-start  ${poppins.className}`}
        >
          <span className="text-4xl font-medium">Somos Loica </span>
          un espacio de escucha, cuidado y transformación. Psicología y
          Sexología desde una mirada feminista, comunitaria y con perspectiva
          crítica.
        </div>
      </div>
      <div className="bg-lavender-light w-full py-20 px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          <div>
            <motion.h2
              className="text-grey-font text-5xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Nuestra Visión
            </motion.h2>
            <motion.p
              className={`text-grey-font text-center text-base/8 md:text-left  ${poppins.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Entregar un espacio con perspectiva de derechos, de género,
              feminista y humanista. Un lugar seguro, cálido y libre de juicios
              donde brindar acompañamiento psicológico y sexológico de manera
              respetuosa, cercana y consciente. Nos importa cuidar sin
              patologizar, mirar sin estigmas, comprender la salud mental como
              un proceso integral, que atraviesa tanto lo individual como lo
              colectivo.
            </motion.p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/us/flower.png"
              alt="Imagen de una flor"
              width={274}
              height={421}
              quality={100}
            />
          </div>
          <div>
            <motion.h2
              className="text-grey-font text-5xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Nuestra Misión
            </motion.h2>
            <motion.p
              className={`text-grey-font text-base/8 ${poppins.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Nos mueve una psicoterapia consciente y con responsabilidad
              social, que ponga en el centro la singularidad de cada persona y
              la complejidad de sus vivencias. Ofrecemos un espacio amable,
              seguro y colaborativo para transitar procesos de crecimiento
              personal, desde un enfoque integrativo que dialoga con distintas
              disciplinas y formas de comprender el bienestar.
            </motion.p>
          </div>
        </div>
      </div>
      <h3
        className={`text-grey-font text-3xl md:text-5xl text-center mt-10 md:mt-24 ${poppins.className}`}
      >
        NUESTRA HISTORIA
      </h3>
      <h4
        className={`text-grey-font text-xl md:text-3xl font-light text-center mt-4 md:mb-20 ${poppins.className}`}
      >
        COMO NACE LOICA
      </h4>
      <History></History>
      <div className="bg-coral w-full py-12 px-8 my-24 ">
        <div
          className={`text-xl text-light-coral text-center max-w-screen-lg mx-auto ${poppins.className}`}
        >
          <div className="text-3xl font-light">Loica no es solo un centro</div>
          <div className="my-8 font-light">
            Es un lugar que tejemos día a día con quienes confían en nosotras.
            Un espacio que imagina otras formas de habitar la salud mental y la
            sexualidad:
          </div>
          <motion.div
            className="text-4xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            más libres, más humanas, más nuestras.
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="origin-left flex justify-center items-center"
          >
            <Image
              src="/us/underline.png"
              alt="underline"
              width={300}
              height={32}
              quality={100}
              className="md:w-[500px] p-4"
            />
          </motion.div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-screen-lg my-10 mx-auto">
        <div>
          <Image
            src="/us/usimg.png"
            alt="imagen del equipo de centro psicóloga loica"
            width={380}
            height={360}
            quality={100}
            className="flex justify-center items-center px-4 max-w-screen-lg mx-auto"
          />
        </div>
        <div
          className={`font-light px-4 text-center md:text-start text-base/7 ${poppins.className}`}
        >
          Somos un equipo de psicólogas con formación en sexología, feminismo y
          perspectiva de género, trauma relacional, neurodivergencias y salud
          mental comunitaria. Trabajamos desde una psicología situada, que
          reconoce los contextos, las historias y las múltiples formas de vivir
          el cuerpo, el deseo, el dolor y el vínculo. Nuestro enfoque integra
          saberes clínicos con prácticas afectivas, y se nutre tanto de la
          escucha profesional como del contacto humano real.
        </div>
      </div>

      <SubTitle text="Nuestro Equipo"></SubTitle>
      <Profiles></Profiles>
    </section>
  );
}
export default NosotrasPage;
