import Image from "next/image"
import { poppins } from "@/app/fonts/fonts";
const Pilares = () => {
  return (
    <section className={`${poppins.className}`}>
      <h3 className="text-center text-4xl text-grey-font my-14">
        NUESTROS PILARES
      </h3>
      <div className="flex flex-wrap justify-center gap-8 text-white font-semibold text-lg tracking-wide">
        <div className="flex flex-col w-[258px] shadow-xl bg-lavender rounded-lg ps-8 pt-4 pb-8">
          <div className="relative mb-14">
            <Image
              src="/cursosytalleres/educationIcon.png"
              alt="logo de cursos y talleres loica"
              width={109}
              height={109}
              quality={100}
            />
            <Image
              src="/cursosytalleres/circleIcon.png"
              alt="iconobg"
              width={68}
              height={130}
              quality={100}
              className="absolute right-0 top-0"
            />
          </div>
          <div>La educación como herramienta de transformación</div>
        </div>
        <div className="flex flex-col w-[258px] shadow-xl bg-lavender rounded-lg ps-8 pt-4 pb-8">
          <div className="relative mb-14">
            <Image
              src="/cursosytalleres/heartIcon.png"
              alt="logo de cursos y talleres loica"
              width={109}
              height={109}
              quality={100}
            />
            <Image
              src="/cursosytalleres/dotsIcon.png"
              alt="iconobg"
              width={64}
              height={130}
              quality={100}
              className="absolute right-0 top-0"
            />
          </div>
          <div>El cuidado como acto político</div>
        </div>
        <div className="flex flex-col w-[258px] shadow-xl bg-lavender rounded-lg ps-8 pt-4 pb-8">
          <div className="relative mb-14">
            <Image
              src="/cursosytalleres/comunicationIcon.png"
              alt="logo de cursos y talleres loica"
              width={109}
              height={109}
              quality={100}
            />
            <Image
              src="/cursosytalleres/lineIcon.png"
              alt="iconobg"
              width={46}
              height={130}
              quality={100}
              className="absolute right-0 top-0"
            />
          </div>
          <div className="pe-2">La palabra como forma de reparación</div>
        </div>
      </div>
    </section>
  );
}
export default Pilares