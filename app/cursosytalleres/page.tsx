import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import Tematicas from "@/components/Tematicas";
import CursosCards from "@/components/CursosCards";
import Company from "@/components/Company";

const Page = () => {
  return (
    <section>
      <h2 className={`${poppins.className} text-4xl text-center mt-32 text-grey-font`}>Cursos y Talleres Personalizados</h2>
      <Tematicas></Tematicas>
      <div className="flex flex-wrap justify-center gap-4 my-10 md:my-24">
        <div
          className={`${poppins.className} w-[350px]  bg-lavender p-6 text-white text-center md:text-start font-light`}
        >
          <Image
            src="/layout/bg-img-4.png"
            alt=""
            width={178}
            height={178}
            quality={100}
            className="mx-auto"
          />
          <p className="mt-10">
            Si tú, tu comunidad o institución desean un
            <strong> taller o curso personalizado</strong>, por favor,{" "}
            <strong>rellena el formulario</strong> a continuación con los
            detalles.
          </p>
          <p className="mt-6">
            Estaremos encantadas de atenderte y ofrecerte el asesoramiento que
            necesites. ¡Tu opinión es muy importante para nosotros!
          </p>

        </div>

        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeZYNOc6xdgcfudaaX3HCHm3y7f7fDrUreHFnmxv_bkg6tyXQ/viewform?embedded=true"
            height="530"
            className="min-w-[350px] lg:w-[600px]"
          >
            Cargando…
          </iframe>
        </div>
      </div>
      <Company></Company>
    </section>
  );
}
export default Page