"use client";

import Link from "next/link";
import { Navbar,Button } from "flowbite-react";
import Image from 'next/image';
import {poppins} from "@/app/fonts/fonts";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import servicesData from "@/data/services.json";
function Navcomp() {

const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-lavender-light ">
      <Navbar
        fluid
        className={`${poppins.className} bg-lavender-light max-w-screen-lg mx-auto`}
      >
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/layout/navbar-logo-loica.png"
            alt="logo Centro de Psicología y Sexología Loica"
            width={150}
            height={70}
            quality={100}
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            as={Link}
            href="/agenda"
            size="sm"
            className="bg-lavender mr-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-md "
          >
            Agenda
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-[#374151] ">
          <Navbar.Link className="border-none" href="/">
            Inicio
          </Navbar.Link>
          <Navbar.Link className="border-none" href="/nosotras">
            Nosotras
          </Navbar.Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border-none text-[#374151] hover:text-cyan-700 ml-3 py-2 md:py-0 focus:outline-none flex items-center space-x-1"
            >
              <span>Terapias</span>
              <FaChevronDown />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-3 w-56 bg-lavender text-white rounded-md shadow-lg z-50 flex flex-col gap-2 p-2"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href="/servicios" className="border-b mb-2 py-2">
                  Ver Todos
                </Link>
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicios/${service.id}`}
                    className="border-b mb-2 py-2"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Navbar.Link className="border-none" href="/cursosytalleres">
            Cursos y Talleres
          </Navbar.Link>
          <Navbar.Link className="border-none" href="/recursos">
            Recursos
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navcomp;
