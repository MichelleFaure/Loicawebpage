import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
const Tematicas = () => {
  return (
    <section
      className={`${poppins.className} relative p-4 max-w-screen-lg mx-auto my-36`}
    >
      <Image
        src="/cursosytalleres/cursoimg5.png"
        alt="underline"
        width={588}
        height={552}
        quality={100}
        className="md:absolute -z-10 bottom-0 right-0"
      />
      <div className=" text-4xl  w-[350px] text-grey-font">
        Temáticas que hemos abordado
      </div>
      <Image
        src="/cursosytalleres/underline2.png"
        alt="underline"
        width={300}
        height={15}
        quality={100}
        className="mt-4 mb-10"
      />

      <div className="flex flex-col gap-4 text-base text-grey-font">
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Comunicación asertiva y vínculos sanos</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Educación inclusiva y crítica de los medios</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Atención, memoria y bienestar psicoemocional</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Trauma relacional, duelo migratorio y autocuidado</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Masculinidades, emociones y autoestima</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Transdiversidades, adolescencia y género</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Derechos sexuales y reproductivos</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Educación sexual en familia e infancia</p>
        </div>
        <div className="flex md:items-center gap-2">
          <TbRosetteDiscountCheckFilled className="text-lavender text-2xl" />
          <p>Consentimiento y prevención del abuso</p>
        </div>
      </div>
    </section>
  );
};
export default Tematicas;
