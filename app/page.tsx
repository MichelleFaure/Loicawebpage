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


function HomePage() {
  return (
    <div className="m-auto ">
      <section
        className={`text-white text-xl font-light text-center md:text-left   ${poppins.className}`}
      >
        <div className="bg-[url(/home/bannerImg.jpg)] bg-no-repeat  bg-cover bg-center md:ps-52 h-[600px] flex flex-col justify-center">
          <p className="text-2xl py-4 font-medium">
            Tu espacio seguro para sanar
          </p>

          <div className="flex flex-col justify-center">
            <div className="flex flex-col my-4 ">
              <h2 className="text-6xl font-light mb-8 md:mb-2">Loica es</h2>
              <div className="text-4xl md:text-6xl font-bold min-w-[340px] min-h-[100px]">
                <Typewriter
                  options={{
                    strings: [
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
          <p className="py-4">
            Te brindamos un ambiente de cuidado y comprensión.
          </p>
          <div>
            <div className="flex items-center mx-auto md:mx-0 md:justify-between flex-col gap-4 md:flex-row max-w-md text-center">
              <Link
                href="/agenda"
                className={`${poppins.className} bg-lavender w-56 md:min-w-28 text-xl p-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
              >
                AGENDA
              </Link>

              <Link
                href="/servicios"
                className={`${poppins.className} bg-light-coral w-56 md:min-w-28 text-xl p-2 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
              >
                SERVICIOS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SubTitle text="Embárcate en un viaje hacia el bienestar, te acompañaremos en cada paso"></SubTitle>
      <SeccionsHome></SeccionsHome>
      <SubTitle text="Nosotras"></SubTitle>
      <Profiles></Profiles>
      <Opinions></Opinions>
      <Explore></Explore>
      <ContacUs></ContacUs>
    </div>
  );
}
export default HomePage;
