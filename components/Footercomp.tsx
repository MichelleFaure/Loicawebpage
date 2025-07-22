"use client";

import { FaLinkedin ,FaInstagram } from "react-icons/fa";
import Image from "next/image";
import {poppins} from "@/app/fonts/fonts";
import { motion } from "framer-motion";
function Footercomp() {
  return (
    <section
      className={`${poppins.className} bg-lavender-light text-grey-font shadow-none w-full p-16`}
    >
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center gap-4 text-sm bg-soft-Lavender p-4 rounded-lg shadow-lg">
          <Image
            src="/layout/navbar-logo-loica.png"
            alt="logo Centro de Psicología y Sexología Loica"
            width={170}
            height={144}
            quality={100}
          />
          <motion.a
            href="https://www.linkedin.com/company/centro-loica-psicologia-y-sexologia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.05, color: "#9C9CE6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
            <span>Linkedin</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/centro.loica/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.05, color: "#9C9CE6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram />
            <span>Instagram</span>
          </motion.a>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-start">
          <div className="font-semibold ">Enlaces</div>
          <ul className="text-sm flex flex-col gap-2">
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/">Inicio</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/nosotras">Nosotras</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/servicios">Terapias</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/cursosytalleres">Cursos</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/recursos">Recursos</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/agenda">Agenda</a>
            </motion.li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-start">
          <div className="font-semibold ">Ubicación</div>
          <ul className="text-sm flex flex-col gap-2">
            <li> Santiago, Chile</li>
            <li> Almería, España</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-start">
          <div className="font-semibold ">Contacto</div>
          <ul className="text-sm flex flex-col gap-2">
            <li> loica.contactos@gmail.com</li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#9C9CE6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Cuentanos tu experiencia
            </motion.li>
          </ul>
        </div>
      </div>
    </section>

  );

}
export default Footercomp;
