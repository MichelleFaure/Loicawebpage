import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
const Page = () => {
  return (
    <section>
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
            Nos gustaría recibir tu testimonio, sugerencias, opiniones o
            comentarios de cómo ha sido tu experiencia con tu terapeuta en
            nuestro centro, realmente es muy valioso tu aporte para entregar día
            a día la atención que necesitas y mereces.
          </p>
        </div>

        <div>
          <iframe
            src="https://docs.google.com/forms/d/1U-tnNXfpg_9jP678EXyykCXXQXSTCwNlK7treYku64w/viewform?edit_requested=true"
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