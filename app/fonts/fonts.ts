import { Cormorant, Poppins, Birthstone_Bounce } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "200"] });
export const birthstone = Birthstone_Bounce({ subsets: ["latin"], weight: ["500"] });