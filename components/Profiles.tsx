import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import abaoutUs from "@/data/aboutUs.json";
import { motion } from "framer-motion";

function Profiles() {
  return (
    <section
      className={`flex gap-10 flex-wrap justify-center relative items-center mb-24 transition-all duration-500 ease-in-out ${poppins.className}`}
    >
      {abaoutUs.map((profile, index) => {
        return (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[310px] sm:w-[400px] overflow-hidden bg-white shadow-lg rounded-lg min-h-[620px]"
          >
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
                quality={100}
                className="w-[150px] h-[150px] object-cover rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="text-center p-5 mt-20">
              <h2 className="text-gray-700 font-semibold">{profile.name}</h2>
              <h3 className="text-gray-500 text-sm">{profile.degree}</h3>
              <p className="text-sm text-gray-500 mt-4 leading-5 min-h-[230px]">
                {profile.description}
              </p>
              <p className="text-xs mt-2 text-gray-500">
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
          </motion.div>
        );
      })}

      <div className="absolute top-[600px] md:top-[300px] right-0 opacity-30 -z-10">
        <Image
          src="/layout/bg-img.png"
          alt=""
          width={340}
          height={500}
          quality={100}
        />
      </div>

      <div className="absolute -top-[150px] -left-[250px] opacity-30 -z-10">
        <Image
          src="/layout/bg-img-2.png"
          alt=""
          width={600}
          height={630}
          quality={100}
        />
      </div>
    </section>
  );
}

export default Profiles;
