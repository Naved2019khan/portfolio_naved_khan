import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { Experience } from "@/components/Experience";
import { Approch } from "@/components/Approch";
import Footer from "@/components/Footer";
import { TechStack } from "@/components/TechStack";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
<Experience />
        <TechStack />
        {/* <Grid /> */}
        <RecentProjects />
        {/* <Client /> */}
        <Experience />
        < Approch />
        <Footer />
      </div>
    </main>
  );
}
