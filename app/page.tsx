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


function HomePage() {
  return (
    <>
      <section>
        <div className="bg-[url(/home/bannerImg.jpg)] relative bg-no-repeat  bg-cover bg-center md:ps-52 h-[600px] flex flex-col justify-center">
          <div
            className={`${poppins.className} px-8 z-10 max-w-screen-lg text-white text-xl font-light text-center md:text-left `}
          >
            <p className="text-2xl py-4 font-medium z-10">
              Un refugio para sanar, sin juicios ni prisa.
            </p>

            <div className="flex flex-col justify-center z-10">
              <div className="flex flex-col my-4 ">
                <h2 className="text-6xl font-light mb-8 md:mb-2">Loica es</h2>
                <div className="text-4xl md:text-6xl font-bold min-w-[340px] min-h-[100px]">
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
                </div>
              </div>
            </div>
            <p className="py-4 z-10">
              Aquí el cuidado es forma de lucha; y sanar, un acto de dignidad.
            </p>
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

          <div className="absolute bg-slate-900 h-[500px] w-[700px] opacity-20 rounded-lg"></div>
        </div>
      </section>

      <SubTitle text="Caminemos a tu ritmo, hacia una vida con sentido y goce"></SubTitle>
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
