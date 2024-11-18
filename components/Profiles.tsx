import Image from "next/image";

import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import abaoutUs from "@/data/aboutUs.json";
function Profiles() {
  return (
    <section
      className={`flex gap-10 flex-wrap justify-center items-center mb-24 ${poppins.className}`}
    >
      {abaoutUs.map((profile) => {
        return (
          <div key={profile.name} className="w-[300px] overflow-hidden bg-white shadow-lg rounded-lg">
            <div className="relative h-[150px]">
              <div className="relative h-full">
                <div className="absolute w-[650px] h-[650px] bg-gradient-to-bl from-[#DDDDFA] to-[#9C9CE6] rounded-full top-[-330%] left-1/2 transform -translate-x-1/2 animate-spin-custom opacity-100"></div>
                <div className="absolute w-[650px] h-[650px] bg-gradient-to-bl from-[#DDDDFA] to-[#9C9CE6] rounded-[46%] top-[-332%] left-[48%] transform -translate-x-1/2 opacity-50 animate-spin-custom-slow"></div>
                <div className="absolute w-[650px] h-[650px] bg-gradient-to-bl from-[#DDDDFA] to-[#9C9CE6] rounded-[40%] top-[-328%] left-[52%] transform -translate-x-1/2 opacity-20 animate-spin-custom-slow"></div>
              </div>
              <Image
                src={profile.imgSrc}
                alt="Perfil de usuario"
                width={150}
                height={150}
                className="w-[150px] h-[150px] object-cover rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="text-center p-5 mt-20">
              <h2 className="text-gray-700 font-semibold">{profile.name}</h2>
              <h3 className="text-gray-500 text-sm">{profile.degree}</h3>
              <p className="text-sm text-gray-500 mt-4 leading-5">
                {profile.description}
              </p>
              <p className="text-xs mt-4 text-gray-500">
                {profile.registration_number}
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-lavender p-2 mt-4 font-light text-white rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                Linkedin
              </a>
              <Link href="/agenda">
                <div className="bg-lavender p-2 mt-4 font-light text-white rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                  Ver Agenda
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Profiles;
