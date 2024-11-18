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
      <h2 className="my-24 text-5xl md:text-7xl text-center ">
        El pobre es pobre porque quiere
      </h2>

      <section className="flex flex-row justify-center mb-24">
        <div className="hidden md:flex">
          <div>
            <Image
              src="/home/bannerImg1.png"
              alt="Imagen banner"
              width={500}
              height={600}
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center px-8">
          <div>
            <Image
              src="/home/bannerImg2.png"
              alt="Imagen banner"
              width={400}
              height={400}
            />
          </div>
          <div className="max-w-[350px] p-2">
            <h3 className="text-2xl font-medium my-4">Lorem ipsum dolor sit</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              nunc convallis, hendrerit enim quis, pharetra quam.
            </p>
          </div>
        </div>
      </section>
      <SubTitle text="Lorem ipsum dolor sit"></SubTitle>
      <SeccionsHome></SeccionsHome>
      <SubTitle text="Conoce a nuestro equipo"></SubTitle>
      <Profiles></Profiles>
      <Opinions></Opinions>
      <Explore></Explore>
      <ContacUs></ContacUs>
      
    </div>
  );
}
export default HomePage;
