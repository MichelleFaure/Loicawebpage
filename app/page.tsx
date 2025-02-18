import Image from "next/image";
import SubTitle from './../components/SubTitle';
import SeccionsHome from "@/components/SeccionsHome";
import Profiles from '@/components/Profiles';
import Opinions from "@/components/Opinions";
import ContacUs from "@/components/ContacUs";
import Explore from "@/components/Explore";

function HomePage() {
  return (
    <div className="m-auto ">
      <h2 className="my-24 text-5xl md:text-8xl text-center  ">
        Tu espacio seguro para sanar
      </h2>

      <section className="flex flex-row justify-center mb-24">
        <div className="hidden md:flex">
          <Image
            src="/home/bannerImg1.png"
            alt="Imagen banner"
            width={500}
            height={550}
            quality={100}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col items-center text-center px-8">
          <div>
            <Image
              src="/home/bannerImg2.png"
              alt="Imagen banner"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className="max-w-[350px] p-2">
            <h3 className="text-3xl font-medium my-4">
              Te brindamos un ambiente de cuidado y comprensión.
            </h3>
          </div>
        </div>
      </section>
      <SubTitle text="Embárcate en un viaje hacia el bienestar, te acompañaremos en cada paso"></SubTitle>
      <SeccionsHome></SeccionsHome>
      <SubTitle text="Nosotras"></SubTitle>
      <Profiles></Profiles>
      <Opinions></Opinions>
      <Explore></Explore>
      <ContacUs></ContacUs>
    </div>
  );
}
export default HomePage;
