"use client";
import { Footer } from "flowbite-react";
import { FaLinkedin ,FaInstagram } from "react-icons/fa";
import Image from "next/image";
import {poppins} from "@/app/fonts/fonts";
import { motion } from "framer-motion";
function Footercomp() {
  return (
    <Footer
      container
      className={`${poppins.className} bg-lavender-light shadow-none`}
    >
      <div className="flex flex-col  flex-wrap gap-10 max-w-screen-lg mx-auto ">
        <div className="flex gap-10 items-center justify-center">
          <div className="">
            <Image
              src="/layout/navbar-logo-loica.png"
              alt="logo Centro de Psicología y Sexología Loica"
              width={170}
              height={144}
              quality={100}
            />
          </div>
          <div>
            <Footer.LinkGroup col className="text-[#374151]">
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
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-10 mt-10 text-center md:text-start">
          <div>
            <Footer.Title title="Enlaces" className="text-[#374151]" />
            <Footer.LinkGroup col className="text-[#374151]">
              <Footer.Link className="m-0" href="/">Home</Footer.Link>
              <Footer.Link className="m-0" href="/nosotras">Nosotras</Footer.Link>
              <Footer.Link className="m-0" href="/servicios">Servicios</Footer.Link>
              <Footer.Link className="m-0"  href="/cursosytalleres">
                Cursos y Talleres
              </Footer.Link>
              <Footer.Link className="m-0" href="/agenda">Agenda</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Ubicación" className="text-[#374151]" />
            <Footer.LinkGroup col className="text-[#374151]">
              <div> Santiago, Chile</div>
              <div> Almería, España</div>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contacto" className="text-[#374151]" />
            <Footer.LinkGroup col className="text-[#374151]">
              <div> loica.contactos@gmail.com</div>
              <Footer.Link href="/comentarios">Cuentanos tu experiencia</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );

}
export default Footercomp;
