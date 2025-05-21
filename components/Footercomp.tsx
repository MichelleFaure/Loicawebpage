"use client";
import { Footer } from "flowbite-react";
import { FaLinkedin ,FaInstagram } from "react-icons/fa";
import Image from "next/image";
import {poppins} from "@/app/fonts/fonts";
function Footercomp() {
  return (
    <div className="bg-lavender-light  ">
      <Footer
        container
        className={`${poppins.className} bg-lavender-light max-w-screen-lg mx-auto shadow-none `}
      >
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1  ">
            <div className="grid grid-cols-1  gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
              <div className="m-auto md:m-0">
                <Image
                  src="/layout/footer-logo-loica.png"
                  alt="logo Centro de Psicología y Sexología Loica"
                  width={150}
                  height={144}
                  quality={100}
                />
              </div>
              <div>
                <Footer.Title
                  title="Redes Sociales"
                  className="text-[#374151]"
                />
                <Footer.LinkGroup col className="text-[#374151]">
                  <a
                    href="https://www.linkedin.com/company/centro-loica-psicologia-y-sexologia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 "
                  >
                    <FaLinkedin />
                    <span>Linkedin</span>
                  </a>
                  <a
                    href="https://www.instagram.com/centro.loica/ "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 "
                  >
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Enlaces" className="text-[#374151]" />
                <Footer.LinkGroup col className="text-[#374151]">
                  <Footer.Link href="/">Home</Footer.Link>
                  <Footer.Link href="/nosotras">Nosotras</Footer.Link>
                  <Footer.Link href="/servicios">Servicios</Footer.Link>
                  <Footer.Link href="/cursosytalleres">Cursos y Talleres</Footer.Link>
                  <Footer.Link href="/agenda">Agenda</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Ubicación" className="text-[#374151]" />
                <Footer.LinkGroup col className="text-[#374151]">
                  <div> Santiago, Chile</div>
                  <div> Almería, España</div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );

}
export default Footercomp;
