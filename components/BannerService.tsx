import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
interface BannerServiceProps {
  title: string;
  description: string;
  imgSrc: string;
}
function BannerService({ title, description, imgSrc }: BannerServiceProps) {
  return (
    <section className="max-w-screen-lg mx-auto my-24">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="p-8 md:w-3/4">
          <h2 className="text-5xl mt-4 text-center md:text-start">{title}</h2>
          <p
            className={`${poppins.className} md:pl-2 text-center md:text-start my-10`}
          >
            {description}
          </p>
          <div className="flex items-center mx-auto md:mx-0 md:justify-between flex-col gap-4 md:flex-row max-w-md text-center">
            <Link
              href="/agenda"
              className={`${poppins.className} bg-lavender w-56 md:min-w-28 text-xl p-2 rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md`}
            >
              Agenda Aqui
            </Link>
          </div>
        </div>
        <div className="px-8">
          <Image
            src={imgSrc}
            alt="imagen servicio ofrecido por centro de psicologia"
            width={500}
            height={500}
            className="md:ml-8 object-cover rounded-md h-full md:h-[380px] "
            quality={100}
            
          />
        </div>
      </div>
    </section>
  );
}
export default BannerService;
