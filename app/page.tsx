'use client'

import SubTitle from "./../components/SubTitle";
import SeccionsHome from "@/components/SeccionsHome";
import Profiles from "@/components/Profiles";
import Opinions from "@/components/Opinions";
import ContacUs from "@/components/ContacUs";
import Explore from "@/components/Explore";
import Link from "next/link";
import { poppins } from "@/app/fonts/fonts";
import Typewriter from "typewriter-effect";
import Isapres from "@/components/Isapres";
import { motion } from "framer-motion";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <section className="relative">
        <div className="bg-[url(/home/bannerImg.jpg)] bg-no-repeat  bg-cover bg-center md:ps-52 h-[600px] flex flex-col justify-center">
          <div className="absolute bg-slate-900 top-0 left-0 opacity-20 rounded-lg h-[100%] w-[100%]"></div>

          <div
            className={`${poppins.className} px-8 z-10 max-w-screen-lg text-white text-xl font-light text-center md:text-left `}
          >
            <motion.p
              className="text-2xl py-4 font-medium z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Un refugio para sanar, sin juicios ni prisa
            </motion.p>

            <div className="flex flex-col justify-center z-10">
              <div className="flex flex-col my-4 ">
                <motion.h2
                  className="text-6xl font-light mb-8 md:mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Loica es
                </motion.h2>
                <motion.div
                  className="text-4xl md:text-6xl font-bold min-w-[340px] min-h-[100px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "feminista",
                        "humanista",
                        "ética",
                        "refugio",
                        "compromiso social",
                        "libertad",
                        "transformadora",
                        "autonomía",
                        "comunidad",
                        "ternura",
                        "escucha",
                        "reparación",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: "natural",
                    }}
                  />
                </motion.div>
              </div>
            </div>
            <motion.p
              className="py-4 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Aquí el cuidado es forma de lucha; y sanar, un acto de dignidad
            </motion.p>
            <div>
              <div className="flex items-center  mx-auto md:mx-0 md:justify-between flex-col gap-4 md:flex-row max-w-md text-center">
                <Link
                  href="/agenda"
                  className="z-10 bg-lavender w-56 md:min-w-28 text-xl p-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
                >
                  AGENDA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3
        className={`text-grey-font font-light text-xl md:text-4xl mt-10 md:mt-32 text-center ${poppins.className}`}
      >
        Caminemos a tu ritmo
      </h3>
      <div
        className={`text-grey-font flex justify-center gap-2  text-xl md:text-4xl mb-10 md:mb-32 text-center ${poppins.className}`}
      >
        <div> hacia una vida con</div>
        <div className="relative">          
          <Image
              src="/home/undelineHome.png"
              alt="underline"
              width={500}
              height={320}
              className="absolute left-0 top-6 md:top-8 -z-10"
              quality={100}
            />
                  sentido y goce</div>
      </div>
      <SeccionsHome></SeccionsHome>

      <SubTitle text="Nosotras"></SubTitle>
      <Profiles></Profiles>
      <Isapres></Isapres>
      <Opinions></Opinions>
      <Explore></Explore>
      <ContacUs></ContacUs>
    </>
  );
}
export default HomePage;
