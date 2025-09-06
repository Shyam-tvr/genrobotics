import Transform from "@/components/home/Transform";
import Hero from "../components/home/Hero";
import HiddenDanger from "../components/home/HiddenDanger";
import Statistics from "@/components/home/Statistics";
import Milestones from "@/components/home/Milestones";
import Products from "@/components/home/Products";
import Models from "@/components/home/Models";
import Features from "@/components/home/Features";
import Recognition from "@/components/home/Recognition";
import Impact from "@/components/home/Impact";
import Clients from "@/components/home/Clients";
import Industries from "@/components/home/Industries";
import Awards from "@/components/home/Awards";
import Testmonials from "@/components/home/Testmonials";
import Challenges from "@/components/home/Challenges";
import Services from "@/components/home/Services";
import { Roboto } from 'next/font/google';

// You can configure the font with options like subsets, weight, etc.
const roboto = Roboto({
  weight: ['100','200','300','400','500','600','700','800','900'], // You can specify specific font weights
  subsets: ['latin'], // You can also specify subsets like 'latin' or 'latin-ext'
});



export default function Home() {
  return (
    <div className={roboto.className}>
      <Hero />
      <HiddenDanger />
      <Transform />
      <Statistics />
      <Milestones />
      <Products />
      <Models />
      <Services />
      <Features />
      <Recognition />
      <Impact />
      <Industries />
      <Clients />
      <Awards />
      <Testmonials />
      <Challenges />
    </div>
  );
}
