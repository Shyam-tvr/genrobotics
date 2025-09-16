import Intro from "@/components/home/Intro";
import Mission from "@/components/home/Mission";
import Principles from "@/components/home/Principles";
import Verticals from "@/components/home/Verticals";

export default function Home() {
  return (
    <div className="z-10">
      <Intro />
      <Mission />
      <Verticals />
      <Principles />
    </div>
  );
}
