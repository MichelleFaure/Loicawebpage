import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";

interface BannerCoralProps {
  title: string;
  text: string;
}

function BannerCoral({ title, text }: BannerCoralProps) {
  return (
    <section className={`${poppins.className}`}>
      <div className="bg-coral w-full text-white relative py-24">
        <div className="flex max-w-screen-lg mx-auto">
          <div className=" z-10 md:w-1/2 p-4">
            <h2 className="text-4xl font-medium mb-4">{title}</h2>
            <p className="font-light">{text}</p>
          </div>
          <div className="absolute top-10 md:top-10 right-0 z-0 md:w-1/2 flex justify-end ">
            <Image
              src="/layout/loicaImg.png"
              alt="Imagen de una flor"
              width={610}
              height={333}
              quality={100}
              className="w-[200px] md:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BannerCoral