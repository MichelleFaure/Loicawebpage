import BannerCoral from "@/components/BannerCoral";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";

const Page = () => {
  return (
    <section>
      <BannerCoral
        title="CURSOS Y TALLERES"
        text="En Loica, sabemos que aprender junto a otros potencia el conocimiento y el crecimiento personal. El intercambio de experiencias y perspectivas enriquece el aprendizaje, generando un espacio dinámico y significativo."
      />
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
            <strong> taller o curso personalizado</strong> taller o curso
            personalizado, por favor, <strong>rellena el formulario</strong> a
            continuación con los detalles.
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
    </section>
  );
}
export default Page